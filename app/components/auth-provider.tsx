
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    console.log('🔵 [AUTH-FRONTEND] Starting auth check');
    
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      console.log('🔵 [AUTH-FRONTEND] Auth check response status:', response.status);
      console.log('🔵 [AUTH-FRONTEND] Auth check response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const data = await response.json();
        console.log('🔵 [AUTH-FRONTEND] Auth check response data:', data);
        setUser(data.user);
        
        if (data.user) {
          console.log('🟢 [AUTH-FRONTEND] User authenticated:', data.user.email);
        } else {
          console.log('🔵 [AUTH-FRONTEND] No user session found');
        }
      } else {
        console.error('🔴 [AUTH-FRONTEND] Auth check server error:', response.status, response.statusText);
        const errorData = await response.text();
        console.error('🔴 [AUTH-FRONTEND] Error response:', errorData);
        setUser(null);
      }
    } catch (error) {
      console.error('🔴 [AUTH-FRONTEND] Auth check network error:', error);
      setUser(null);
    } finally {
      setLoading(false);
      console.log('🔵 [AUTH-FRONTEND] Auth check completed');
    }
  };

  useEffect(() => {
    console.log('🔵 [AUTH-FRONTEND] AuthProvider mounted, starting initial auth check');
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    console.log('🔵 [AUTH-FRONTEND] Starting login for:', email);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        cache: 'no-store'
      });

      console.log('🔵 [AUTH-FRONTEND] Login response status:', response.status);
      console.log('🔵 [AUTH-FRONTEND] Login response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const error = await response.json();
        console.error('🔴 [AUTH-FRONTEND] Login failed:', error);
        throw new Error(error.error || 'Login failed');
      }

      const data = await response.json();
      console.log('🔵 [AUTH-FRONTEND] Login response data:', data);
      setUser(data.user);
      console.log('🟢 [AUTH-FRONTEND] Login successful for:', data.user.email);
    } catch (error) {
      console.error('🔴 [AUTH-FRONTEND] Login error:', error);
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    console.log('🔵 [AUTH-FRONTEND] Starting registration for:', data.email);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
        cache: 'no-store'
      });

      console.log('🔵 [AUTH-FRONTEND] Registration response status:', response.status);
      console.log('🔵 [AUTH-FRONTEND] Registration response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const error = await response.json();
        console.error('🔴 [AUTH-FRONTEND] Registration failed:', error);
        throw new Error(error.error || 'Registration failed');
      }

      const result = await response.json();
      console.log('🔵 [AUTH-FRONTEND] Registration response data:', result);
      setUser(result.user);
      console.log('🟢 [AUTH-FRONTEND] Registration successful for:', result.user.email);
    } catch (error) {
      console.error('🔴 [AUTH-FRONTEND] Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    console.log('🔵 [AUTH-FRONTEND] Starting logout');
    
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store'
      });
      
      console.log('🔵 [AUTH-FRONTEND] Logout response status:', response.status);
    } catch (error) {
      console.error('🔴 [AUTH-FRONTEND] Logout error:', error);
    } finally {
      setUser(null);
      console.log('🟢 [AUTH-FRONTEND] Logout completed, redirecting to home');
      router.push('/');
    }
  };

  const refreshUser = async () => {
    console.log('🔵 [AUTH-FRONTEND] Refreshing user data');
    await checkAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
