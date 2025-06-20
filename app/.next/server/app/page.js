(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969");
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ "(rsc)/./node_modules/next/dist/client/components/error-boundary.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ "(rsc)/./node_modules/next/dist/server/app-render/entry-base.js");
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/page.tsx */ "(rsc)/./app/page.tsx")), "/home/ubuntu/sully-booking-system/app/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ "(rsc)/./app/layout.tsx")), "/home/ubuntu/sully-booking-system/app/app/layout.tsx"],
'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ "(rsc)/./node_modules/next/dist/client/components/not-found-error.js", 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/ubuntu/sully-booking-system/app/app/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/page.tsx */ "(ssr)/./app/page.tsx"));


/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fcomponents%2Fauth-provider.tsx%22%2C%22ids%22%3A%5B%22AuthProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fcomponents%2Fauth-provider.tsx%22%2C%22ids%22%3A%5B%22AuthProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/auth-provider.tsx */ "(ssr)/./components/auth-provider.tsx"));


/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ "(ssr)/./node_modules/next/dist/client/components/app-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ "(ssr)/./node_modules/next/dist/client/components/client-page.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ "(ssr)/./node_modules/next/dist/client/components/error-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ "(ssr)/./node_modules/next/dist/client/components/layout-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ "(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ "(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js", 23));


/***/ }),

/***/ "(ssr)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var _components_auth_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/auth-provider */ "(ssr)/./components/auth-provider.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 



function HomePage() {
    const [featuredVenues, setFeaturedVenues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loadingVenues, setLoadingVenues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { user, loading: authLoading, logout } = (0,_components_auth_provider__WEBPACK_IMPORTED_MODULE_3__.useAuth)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchFeaturedVenues();
    }, []);
    const fetchFeaturedVenues = async ()=>{
        try {
            const response = await fetch("/api/venues/featured");
            if (response.ok) {
                const data = await response.json();
                setFeaturedVenues(data.data || []);
            }
        } catch (error) {
            console.error("Failed to fetch featured venues:", error);
        } finally{
            setLoadingVenues(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
                className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "\uD83D\uDCC5 Sully"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/venues",
                                        className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                                        children: "Browse Venues"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    !authLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: user ? // Authenticated user navigation
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/my-bookings",
                                                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                                                    children: "My Bookings"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/dashboard",
                                                    className: "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",
                                                    children: "\uD83D\uDCCA Dashboard"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Welcome, ",
                                                                user.firstName,
                                                                "!"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                            onClick: logout,
                                                            className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                                                            children: "\uD83D\uDEAA Logout"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : // Non-authenticated user navigation
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/my-bookings",
                                                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                                                    children: "My Bookings"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/auth/login",
                                                    className: "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    href: "/auth/register",
                                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                                    children: "Sign Up"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "relative py-20 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "inline-block px-3 py-1 mb-4 text-sm bg-gray-100 rounded-full",
                                children: "\uD83D\uDE80 Complete Booking Management System"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6",
                                children: [
                                    "Streamline Your",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "text-blue-600",
                                        children: " Restaurant Bookings"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto",
                                children: "Powerful booking system for restaurants, cafes, bars, and food trucks. Manage reservations, track analytics, and grow your business with ease."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/venues",
                                        className: "inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                        children: "Find & Book Venues →"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    !authLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: user ? "/dashboard" : "/auth/register",
                                        className: "inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50",
                                        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "\uD83D\uDCCA Go to Dashboard"
                                        }, void 0, false) : "Start Your Venue"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            !loadingVenues && featuredVenues.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "inline-block px-3 py-1 mb-4 text-sm bg-yellow-100 rounded-full",
                                    children: "⭐ Featured Venues"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                    children: "Discover Amazing Venues"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "Handpicked restaurants, cafes, and bars offering exceptional dining experiences"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: featuredVenues.map((venue)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "relative h-48 bg-gradient-to-br from-blue-100 to-purple-100",
                                            children: [
                                                (()=>{
                                                    let imageUrl = null;
                                                    let imageAlt = venue.name;
                                                    if (venue.headerImageUrl) {
                                                        imageUrl = venue.headerImageUrl;
                                                        imageAlt = `${venue.name} header image`;
                                                    } else if (venue.images && venue.images.length > 0) {
                                                        imageUrl = venue.images[0].url;
                                                        imageAlt = venue.images[0].alt || venue.name;
                                                    } else if (venue.logoUrl) {
                                                        imageUrl = venue.logoUrl;
                                                        imageAlt = `${venue.name} logo`;
                                                    }
                                                    return imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                                        src: imageUrl,
                                                        alt: imageAlt,
                                                        className: "w-full h-full object-cover",
                                                        onError: (e)=>{
                                                            e.currentTarget.style.display = "none";
                                                            const fallback = e.currentTarget.nextElementSibling;
                                                            if (fallback) fallback.style.display = "flex";
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 25
                                                    }, this) : null;
                                                })(),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "w-full h-full flex items-center justify-center",
                                                    style: {
                                                        display: "none"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-4xl",
                                                                children: "\uD83D\uDCC5"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                className: "text-blue-600 font-medium mt-2",
                                                                children: venue.name
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "absolute top-4 right-4",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",
                                                        children: "⭐ Featured"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                                    className: "text-xl font-semibold text-gray-900 hover:text-blue-600",
                                                                    children: venue.name
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center text-sm text-gray-500 mt-1",
                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        children: [
                                                                            "\uD83D\uDCCD ",
                                                                            venue.city,
                                                                            ", ",
                                                                            venue.postcode
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "px-2 py-1 border border-gray-300 text-xs rounded-full ml-2",
                                                            children: venue.venueType.replace("_", " ")
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                venue.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-gray-600 text-sm mb-4 line-clamp-2",
                                                    children: venue.description
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "flex items-center justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center text-gray-600",
                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        children: [
                                                                            "\uD83D\uDC65 Capacity: ",
                                                                            venue.capacity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center text-gray-600",
                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        children: [
                                                                            "\uD83D\uDCDE ",
                                                                            venue.phone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "text-sm text-gray-500",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                children: [
                                                                    "Managed by ",
                                                                    venue.owner.firstName,
                                                                    " ",
                                                                    venue.owner.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            href: `/book/${venue.id}`,
                                                            className: "block",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                                className: "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                                                                children: "Book Now →"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, venue.id, true, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/venues",
                                className: "inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50",
                                children: "View All Venues →"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                    children: "Everything You Need to Manage Bookings"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                    children: "From table reservations to event management, Sully provides all the tools your venue needs to succeed."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-2xl",
                                                children: feature.icon
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                            className: "text-lg font-semibold text-gray-900 mb-2",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-gray-600",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, feature.title, true, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                    children: "Simple, Transparent Pricing"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xl text-gray-600",
                                    children: "Start free, upgrade when you need more bookings"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "bg-white p-8 rounded-lg border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                            className: "text-2xl font-semibold mb-2",
                                            children: "Free Plan"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "text-3xl font-bold mb-2",
                                            children: [
                                                "\xa30",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-lg font-normal",
                                                    children: "/month"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "Perfect for small venues getting started"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            className: "space-y-3 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Up to 50 bookings per month"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Basic booking management"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Email notifications"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Basic analytics"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: user ? "/dashboard" : "/auth/register",
                                            className: "block",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                className: "w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                children: user ? "Go to Dashboard" : "Get Started Free"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "bg-white p-8 rounded-lg border-2 border-blue-200 shadow-lg relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "absolute -top-3 left-1/2 transform -translate-x-1/2",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "px-3 py-1 bg-blue-600 text-white text-sm rounded-full",
                                                children: "Most Popular"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                            className: "text-2xl font-semibold mb-2",
                                            children: "Pro Plan"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "text-3xl font-bold mb-2",
                                            children: [
                                                "\xa330",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-lg font-normal",
                                                    children: "/month"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "For growing restaurants and venues"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                            className: "space-y-3 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Unlimited bookings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Advanced booking management"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 19
                                                        }, this),
                                                        "SMS & Email notifications"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Advanced analytics & reports"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Embeddable booking widgets"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-green-500 mr-2",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Priority support"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: user ? "/dashboard/subscription" : "/auth/register",
                                            className: "block",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                className: "w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                                                children: user ? "Upgrade to Pro" : "Start Pro Trial"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
                className: "bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex flex-col md:flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center space-x-2 mb-4 md:mb-0",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-2xl font-bold",
                                    children: "\uD83D\uDCC5 Sully"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "text-gray-400",
                                children: "\xa9 2025 Sully Booking System. All rights reserved."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/sully-booking-system/app/app/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
const features = [
    {
        title: "Table Management",
        description: "Organize tables, set capacity limits, and manage seating arrangements with ease.",
        icon: "\uD83D\uDC65"
    },
    {
        title: "Real-time Bookings",
        description: "Accept bookings 24/7 with instant confirmation and availability checking.",
        icon: "\uD83D\uDCC5"
    },
    {
        title: "Analytics Dashboard",
        description: "Track booking trends, revenue, and customer insights with detailed reports.",
        icon: "\uD83D\uDCCA"
    },
    {
        title: "Multi-Service Support",
        description: "Handle dine-in, takeaway, delivery, and event bookings all in one place.",
        icon: "⭐"
    },
    {
        title: "Embeddable Widgets",
        description: "Add booking forms to your website with customizable iframe widgets.",
        icon: "✅"
    },
    {
        title: "Automated Notifications",
        description: "Send confirmation emails and SMS reminders to customers automatically.",
        icon: "\uD83D\uDD14"
    }
];


/***/ }),

/***/ "(ssr)/./components/auth-provider.tsx":
/*!**************************************!*\
  !*** ./components/auth-provider.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Simulate checking for existing session
        setLoading(false);
    }, []);
    const login = async (email, password)=>{
        // Simplified login - just return false for now
        return false;
    };
    const logout = ()=>{
        setUser(null);
    };
    const register = async (userData)=>{
        // Simplified register - just return false for now
        return false;
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            logout,
            register
        },
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/sully-booking-system/app/components/auth-provider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


/***/ }),

/***/ "(rsc)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("d2b91738ad1e");
if (false) {}


/***/ }),

/***/ "(rsc)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"} */ "(rsc)/./node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ "(rsc)/./app/globals.css");
/* harmony import */ var _components_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth-provider */ "(rsc)/./components/auth-provider.tsx");




const metadata = {
    title: "Sully Booking System",
    description: "Complete booking management system for restaurants, cafes, bars, and venues",
    keywords: "booking system, restaurant reservations, table booking, venue management"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_provider__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {
                children: children
            }, void 0, false, {
                fileName: "/home/ubuntu/sully-booking-system/app/app/layout.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/sully-booking-system/app/app/layout.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/sully-booking-system/app/app/layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/sully-booking-system/app/app/page.tsx#default`));


/***/ }),

/***/ "(rsc)/./components/auth-provider.tsx":
/*!**************************************!*\
  !*** ./components/auth-provider.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ e0),
/* harmony export */   useAuth: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/sully-booking-system/app/components/auth-provider.tsx#AuthProvider`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/sully-booking-system/app/components/auth-provider.tsx#useAuth`);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();