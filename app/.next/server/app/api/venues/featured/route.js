"use strict";
(() => {
var exports = {};
exports.id = "app/api/venues/featured/route";
exports.ids = ["app/api/venues/featured/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvenues%2Ffeatured%2Froute&page=%2Fapi%2Fvenues%2Ffeatured%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvenues%2Ffeatured%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvenues%2Ffeatured%2Froute&page=%2Fapi%2Fvenues%2Ffeatured%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvenues%2Ffeatured%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   patchFetch: () => (/* binding */ patchFetch),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js");
/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ "(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js");
/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_ubuntu_sully_booking_system_app_app_api_venues_featured_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/venues/featured/route.ts */ "(rsc)/./app/api/venues/featured/route.ts");




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,
        page: "/api/venues/featured/route",
        pathname: "/api/venues/featured",
        filename: "route",
        bundlePath: "app/api/venues/featured/route"
    },
    resolvedPagePath: "/home/ubuntu/sully-booking-system/app/app/api/venues/featured/route.ts",
    nextConfigOutput,
    userland: _home_ubuntu_sully_booking_system_app_app_api_venues_featured_route_ts__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;
const originalPathname = "/api/venues/featured/route";
function patchFetch() {
    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ "(rsc)/./app/api/venues/featured/route.ts":
/*!******************************************!*\
  !*** ./app/api/venues/featured/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   dynamic: () => (/* binding */ dynamic)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ "(rsc)/./lib/db.ts");


const dynamic = "force-dynamic";
// GET /api/venues/featured - Get all featured venues (public endpoint)
async function GET() {
    try {
        const featuredVenues = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.venue.findMany({
            where: {
                featured: true,
                isActive: true
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                address: true,
                city: true,
                postcode: true,
                phone: true,
                email: true,
                website: true,
                cuisine: true,
                venueType: true,
                logoUrl: true,
                headerImageUrl: true,
                isActive: true,
                featured: true,
                capacity: true,
                branding: true,
                images: {
                    select: {
                        id: true,
                        url: true,
                        alt: true
                    },
                    where: {
                        isActive: true
                    },
                    orderBy: {
                        displayOrder: "asc"
                    }
                },
                owner: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            },
            take: 3
        });
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: true,
            data: featuredVenues
        });
    } catch (error) {
        console.error("Error fetching featured venues:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: false,
            error: "Failed to fetch featured venues"
        }, {
            status: 500
        });
    }
}


/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prisma: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (true) globalForPrisma.prisma = prisma;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvenues%2Ffeatured%2Froute&page=%2Fapi%2Fvenues%2Ffeatured%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvenues%2Ffeatured%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();