
'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useToast } from "../hooks/use-toast";
import Image from 'next/image';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  currentImage?: string;
  onRemove?: () => void;
  disabled?: boolean;
  accept?: string;
  maxSize?: number;
  className?: string;
  label?: string;
  description?: string;
  aspectRatio?: string;
}

export default function ImageUpload({
  onUpload,
  currentImage,
  onRemove,
  disabled = false,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB
  className = '',
  label = 'Upload Image',
  description = 'Drag and drop an image here, or click to select',
  aspectRatio = 'aspect-video',
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    
    // Validate file size
    if (file.size > maxSize) {
      toast({
        title: 'File too large',
        description: `Maximum file size is ${Math.round(maxSize / 1024 / 1024)}MB`,
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const data = await response.json();
      onUpload(data.url);

      toast({
        title: 'Upload successful',
        description: 'Your image has been uploaded successfully.',
      });
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error.message || 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  }, [onUpload, maxSize, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
    disabled: disabled || uploading,
  });

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {label && (
        <div>
          <h3 className="text-sm font-medium text-gray-900">{label}</h3>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
      )}

      {currentImage ? (
        <Card>
          <CardContent className="p-4">
            <div className={`relative ${aspectRatio} bg-gray-100 rounded-lg overflow-hidden`}>
              <Image
                src={currentImage}
                alt="Uploaded image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {onRemove && (
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={handleRemove}
                  disabled={disabled}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div
              {...getRootProps()}
              className={`
                ${aspectRatio} border-2 border-dashed rounded-lg cursor-pointer transition-colors
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
                ${disabled || uploading ? 'cursor-not-allowed opacity-50' : ''}
              `}
            >
              <input {...getInputProps()} />
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                {uploading ? (
                  <>
                    <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-4" />
                    <p className="text-sm text-gray-600">Uploading...</p>
                  </>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 mb-2">
                      {isDragActive ? 'Drop the image here' : 'Drag and drop an image here'}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      or click to select from your computer
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      JPEG, PNG, WebP up to {Math.round(maxSize / 1024 / 1024)}MB
                    </Badge>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
