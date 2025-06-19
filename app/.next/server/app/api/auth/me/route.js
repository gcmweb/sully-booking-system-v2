"use strict";
(() => {
var exports = {};
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _home_ubuntu_sully_booking_system_app_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/me/route.ts */ "(rsc)/./app/api/auth/me/route.ts");




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,
        page: "/api/auth/me/route",
        pathname: "/api/auth/me",
        filename: "route",
        bundlePath: "app/api/auth/me/route"
    },
    resolvedPagePath: "/home/ubuntu/sully-booking-system/app/app/api/auth/me/route.ts",
    nextConfigOutput,
    userland: _home_ubuntu_sully_booking_system_app_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;
const originalPathname = "/api/auth/me/route";
function patchFetch() {
    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ "(rsc)/./app/api/auth/me/route.ts":
/*!**********************************!*\
  !*** ./app/api/auth/me/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   dynamic: () => (/* binding */ dynamic)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ "(rsc)/./lib/auth.ts");


const dynamic = "force-dynamic";
async function GET(request) {
    console.log("\uD83D\uDD35 [AUTH-BACKEND] Auth check request received");
    console.log("\uD83D\uDD35 [AUTH-BACKEND] Request headers:", Object.fromEntries(request.headers.entries()));
    try {
        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getSession)();
        console.log("\uD83D\uDD35 [AUTH-BACKEND] Session check result:", user ? `User found: ${user.email}` : "No user session");
        // Return 200 with user: null for unauthenticated users
        // This is not an error state, just means user is not logged in
        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            user: user || null
        });
        console.log("\uD83D\uDFE2 [AUTH-BACKEND] Auth check completed successfully");
        return response;
    } catch (error) {
        console.error("\uD83D\uDD34 [AUTH-BACKEND] Auth check error:", error);
        console.error("\uD83D\uDD34 [AUTH-BACKEND] Error stack:", error?.stack);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            error: "Authentication check failed"
        }, {
            status: 500
        });
    }
}


/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),
/* harmony export */   createSession: () => (/* binding */ createSession),
/* harmony export */   generateToken: () => (/* binding */ generateToken),
/* harmony export */   getSession: () => (/* binding */ getSession),
/* harmony export */   getUserFromToken: () => (/* binding */ getUserFromToken),
/* harmony export */   hashPassword: () => (/* binding */ hashPassword),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   requireAuth: () => (/* binding */ requireAuth),
/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),
/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword),
/* harmony export */   verifyToken: () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "(rsc)/./node_modules/bcryptjs/index.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "(rsc)/./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ "(rsc)/./node_modules/next/dist/api/headers.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ "(rsc)/./lib/db.ts");




const JWT_SECRET = process.env.JWT_SECRET || "sully-booking-system-secret-key";
const JWT_EXPIRES_IN = "7d";
async function hashPassword(password) {
    return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);
}
async function verifyPassword(password, hashedPassword) {
    return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hashedPassword);
}
function generateToken(payload) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}
function verifyToken(token) {
    try {
        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
async function createSession(userId) {
    const token = generateToken({
        userId
    });
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.create({
        data: {
            userId,
            token,
            expiresAt
        }
    });
    return token;
}
async function getSession() {
    console.log("\uD83D\uDD35 [AUTH-LIB] Getting session");
    try {
        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();
        const token = cookieStore.get("auth-token")?.value;
        console.log("\uD83D\uDD35 [AUTH-LIB] Token from cookies:", token ? `Token found (${token.substring(0, 20)}...)` : "No token found");
        if (!token) {
            console.log("\uD83D\uDD35 [AUTH-LIB] No auth token found in cookies");
            return null;
        }
        console.log("\uD83D\uDD35 [AUTH-LIB] Looking up session in database");
        const session = await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.findUnique({
            where: {
                token
            },
            include: {
                user: true
            }
        });
        if (!session) {
            console.log("\uD83D\uDD34 [AUTH-LIB] No session found in database for token");
            return null;
        }
        console.log("\uD83D\uDD35 [AUTH-LIB] Session found, checking expiration");
        if (session.expiresAt < new Date()) {
            console.log("\uD83D\uDD34 [AUTH-LIB] Session expired, deleting");
            await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.delete({
                where: {
                    id: session.id
                }
            });
            return null;
        }
        console.log("\uD83D\uDFE2 [AUTH-LIB] Valid session found for user:", session.user.email);
        return {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            role: session.user.role,
            isActive: session.user.isActive
        };
    } catch (error) {
        console.error("\uD83D\uDD34 [AUTH-LIB] Session error:", error);
        console.error("\uD83D\uDD34 [AUTH-LIB] Error stack:", error?.stack);
        return null;
    }
}
async function requireAuth(allowedRoles) {
    const user = await getSession();
    if (!user) {
        throw new Error("Authentication required");
    }
    if (!user.isActive) {
        throw new Error("Account is inactive");
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        throw new Error("Insufficient permissions");
    }
    return user;
}
async function logout() {
    try {
        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();
        const token = cookieStore.get("auth-token")?.value;
        if (token) {
            await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.deleteMany({
                where: {
                    token
                }
            });
        }
    } catch (error) {
        console.error("Logout error:", error);
    }
}
function setAuthCookie(token) {
    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: "development" === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
function clearAuthCookie() {
    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();
    cookieStore.delete("auth-token");
}
async function getUserFromToken(request) {
    try {
        const token = request.cookies.get("auth-token")?.value;
        if (!token) {
            return null;
        }
        const session = await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.findUnique({
            where: {
                token
            },
            include: {
                user: true
            }
        });
        if (!session) {
            return null;
        }
        if (session.expiresAt < new Date()) {
            // Session expired, clean it up
            await _db__WEBPACK_IMPORTED_MODULE_3__.prisma.userSession.delete({
                where: {
                    id: session.id
                }
            });
            return null;
        }
        if (!session.user.isActive) {
            return null;
        }
        return {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            role: session.user.role,
            isActive: session.user.isActive
        };
    } catch (error) {
        console.error("Error getting user from token:", error);
        return null;
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();