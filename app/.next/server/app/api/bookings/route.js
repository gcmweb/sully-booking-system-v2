"use strict";
(() => {
var exports = {};
exports.id = "app/api/bookings/route";
exports.ids = ["app/api/bookings/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _home_ubuntu_sully_booking_system_app_app_api_bookings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/bookings/route.ts */ "(rsc)/./app/api/bookings/route.ts");




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "standalone"
const routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,
        page: "/api/bookings/route",
        pathname: "/api/bookings",
        filename: "route",
        bundlePath: "app/api/bookings/route"
    },
    resolvedPagePath: "/home/ubuntu/sully-booking-system/app/app/api/bookings/route.ts",
    nextConfigOutput,
    userland: _home_ubuntu_sully_booking_system_app_app_api_bookings_route_ts__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;
const originalPathname = "/api/bookings/route";
function patchFetch() {
    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ "(rsc)/./app/api/bookings/route.ts":
/*!***********************************!*\
  !*** ./app/api/bookings/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   POST: () => (/* binding */ POST),
/* harmony export */   dynamic: () => (/* binding */ dynamic)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ "(rsc)/./lib/db.ts");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ "(rsc)/./lib/auth.ts");
/* harmony import */ var _lib_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/validations */ "(rsc)/./lib/validations.ts");
/* harmony import */ var _lib_booking_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/booking-utils */ "(rsc)/./lib/booking-utils.ts");
/* harmony import */ var _lib_subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/subscription */ "(rsc)/./lib/subscription.ts");
/* harmony import */ var _lib_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/notifications */ "(rsc)/./lib/notifications.ts");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_7__);








const dynamic = "force-dynamic";
async function GET(request) {
    try {
        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.requireAuth)();
        const { searchParams } = new URL(request.url);
        const venueId = searchParams.get("venueId");
        const status = searchParams.get("status");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        let whereClause = {};
        if (user.role === _prisma_client__WEBPACK_IMPORTED_MODULE_7__.UserRole.CUSTOMER) {
            whereClause.customerId = user.id;
        } else if (user.role === _prisma_client__WEBPACK_IMPORTED_MODULE_7__.UserRole.VENUE_OWNER) {
            if (venueId) {
                // Verify venue ownership
                const venue = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.venue.findUnique({
                    where: {
                        id: venueId,
                        ownerId: user.id
                    }
                });
                if (!venue) {
                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                        error: "Access denied",
                        bookings: [],
                        pagination: {
                            page: 1,
                            limit: 10,
                            total: 0,
                            pages: 0
                        }
                    }, {
                        status: 403
                    });
                }
                whereClause.venueId = venueId;
            } else {
                // Get all bookings for user's venues
                const userVenues = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.venue.findMany({
                    where: {
                        ownerId: user.id
                    },
                    select: {
                        id: true
                    }
                });
                // Ensure userVenues is an array and extract IDs safely
                const venueIds = Array.isArray(userVenues) ? userVenues.map((v)=>v?.id).filter(Boolean) : [];
                if (venueIds.length > 0) {
                    whereClause.venueId = {
                        in: venueIds
                    };
                } else {
                    // No venues found, return empty result
                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                        success: true,
                        bookings: [],
                        pagination: {
                            page: 1,
                            limit: 10,
                            total: 0,
                            pages: 0
                        }
                    });
                }
            }
        } else if (user.role === _prisma_client__WEBPACK_IMPORTED_MODULE_7__.UserRole.SUPER_ADMIN) {
            if (venueId) {
                whereClause.venueId = venueId;
            }
        }
        if (status) {
            whereClause.status = status;
        }
        const bookings = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.booking.findMany({
            where: whereClause,
            include: {
                venue: {
                    select: {
                        id: true,
                        name: true,
                        address: true,
                        city: true
                    }
                },
                table: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                customer: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true
                    }
                },
                payments: true
            },
            orderBy: {
                createdAt: "desc"
            },
            skip: (page - 1) * limit,
            take: limit
        });
        const total = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.booking.count({
            where: whereClause
        });
        // Ensure bookings is always an array
        const safeBookings = Array.isArray(bookings) ? bookings : [];
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: true,
            bookings: safeBookings,
            pagination: {
                page: page || 1,
                limit: limit || 10,
                total: total || 0,
                pages: Math.ceil((total || 0) / (limit || 10))
            }
        });
    } catch (error) {
        console.error("Get bookings error:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            error: "Failed to fetch bookings",
            bookings: [],
            pagination: {
                page: 1,
                limit: 10,
                total: 0,
                pages: 0
            }
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const bookingData = _lib_validations__WEBPACK_IMPORTED_MODULE_3__.bookingSchema.parse(body);
        // Check venue exists
        const venue = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.venue.findUnique({
            where: {
                id: bookingData.venueId
            }
        });
        if (!venue) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: "Venue not found"
            }, {
                status: 404
            });
        }
        // Check subscription limits
        const subscriptionCheck = await (0,_lib_subscription__WEBPACK_IMPORTED_MODULE_5__.checkSubscriptionLimits)(bookingData.venueId);
        if (!subscriptionCheck.canCreateBooking) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: "Booking limit exceeded for this venue"
            }, {
                status: 403
            });
        }
        // Check availability
        const bookingDate = new Date(bookingData.date);
        const availability = await (0,_lib_booking_utils__WEBPACK_IMPORTED_MODULE_4__.checkAvailability)(bookingData.venueId, bookingDate, bookingData.time, bookingData.partySize, bookingData.serviceType, bookingData.tableId);
        if (!availability.available) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: availability.reason
            }, {
                status: 409
            });
        }
        // Create booking
        const booking = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.booking.create({
            data: {
                ...bookingData,
                date: bookingDate,
                status: _prisma_client__WEBPACK_IMPORTED_MODULE_7__.BookingStatus.PENDING
            },
            include: {
                venue: true,
                table: true
            }
        });
        // Increment booking usage
        await (0,_lib_subscription__WEBPACK_IMPORTED_MODULE_5__.incrementBookingUsage)(bookingData.venueId);
        // Send confirmation email
        await (0,_lib_notifications__WEBPACK_IMPORTED_MODULE_6__.sendBookingConfirmation)(bookingData.customerEmail, {
            bookingId: booking.id,
            customerName: bookingData.customerName,
            venueName: venue.name,
            venueAddress: `${venue.address}, ${venue.city}`,
            venuePhone: venue.phone,
            date: bookingDate.toDateString(),
            time: bookingData.time,
            partySize: bookingData.partySize,
            serviceType: bookingData.serviceType,
            specialRequests: bookingData.specialRequests
        });
        // Create notification for venue owner
        await (0,_lib_notifications__WEBPACK_IMPORTED_MODULE_6__.createNotification)(venue.ownerId, _prisma_client__WEBPACK_IMPORTED_MODULE_7__.NotificationType.BOOKING_CONFIRMATION, "New Booking Received", `New booking from ${bookingData.customerName} for ${bookingDate.toDateString()} at ${bookingData.time}`);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            success: true,
            booking
        });
    } catch (error) {
        console.error("Create booking error:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            error: "Failed to create booking"
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

/***/ "(rsc)/./lib/booking-utils.ts":
/*!******************************!*\
  !*** ./lib/booking-utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAvailability: () => (/* binding */ checkAvailability),
/* harmony export */   getAvailableTables: () => (/* binding */ getAvailableTables),
/* harmony export */   getAvailableTimeSlots: () => (/* binding */ getAvailableTimeSlots),
/* harmony export */   getVenueOpeningHours: () => (/* binding */ getVenueOpeningHours),
/* harmony export */   isVenueOpenAt: () => (/* binding */ isVenueOpenAt)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "(rsc)/./lib/db.ts");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


async function checkAvailability(venueId, date, time, partySize, serviceType, tableId) {
    // Check venue opening hours for the day
    const dayOfWeek = date.getDay();
    const openingHours = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venueOpeningHours.findMany({
        where: {
            venueId,
            dayOfWeek,
            isActive: true
        },
        orderBy: {
            openTime: "asc"
        }
    });
    if (openingHours.length === 0) {
        return {
            available: false,
            reason: "Venue is closed on this day"
        };
    }
    // Check if time is within any of the opening hour slots
    const [hours, minutes] = time.split(":").map(Number);
    const bookingTime = hours * 60 + minutes;
    let isWithinOpeningHours = false;
    for (const slot of openingHours){
        const [openHours, openMinutes] = slot.openTime.split(":").map(Number);
        const [closeHours, closeMinutes] = slot.closeTime.split(":").map(Number);
        const openTime = openHours * 60 + openMinutes;
        const closeTime = closeHours * 60 + closeMinutes;
        if (bookingTime >= openTime && bookingTime <= closeTime) {
            isWithinOpeningHours = true;
            break;
        }
    }
    if (!isWithinOpeningHours) {
        return {
            available: false,
            reason: "Time is outside operating hours"
        };
    }
    // For table bookings, check table availability
    if (serviceType === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.ServiceType.DINE_IN && tableId) {
        const table = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.table.findUnique({
            where: {
                id: tableId
            }
        });
        if (!table || !table.isActive) {
            return {
                available: false,
                reason: "Table is not available"
            };
        }
        if (table.capacity < partySize) {
            return {
                available: false,
                reason: "Table capacity is insufficient"
            };
        }
        // Check for conflicting bookings (2-hour window)
        const startTime = new Date(date);
        startTime.setHours(hours, minutes, 0, 0);
        const endTime = new Date(startTime);
        endTime.setHours(endTime.getHours() + 2);
        const conflictingBookings = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.booking.findMany({
            where: {
                tableId,
                date: {
                    gte: new Date(date.toDateString()),
                    lt: new Date(new Date(date.toDateString()).getTime() + 24 * 60 * 60 * 1000)
                },
                status: {
                    in: [
                        _prisma_client__WEBPACK_IMPORTED_MODULE_1__.BookingStatus.PENDING,
                        _prisma_client__WEBPACK_IMPORTED_MODULE_1__.BookingStatus.CONFIRMED
                    ]
                }
            }
        });
        for (const booking of conflictingBookings){
            const bookingStart = new Date(booking.date);
            const [bookingHours, bookingMinutes] = booking.time.split(":").map(Number);
            bookingStart.setHours(bookingHours, bookingMinutes, 0, 0);
            const bookingEnd = new Date(bookingStart);
            bookingEnd.setMinutes(bookingEnd.getMinutes() + booking.duration);
            // Check for overlap
            if (startTime < bookingEnd && endTime > bookingStart) {
                return {
                    available: false,
                    reason: "Table is already booked for this time"
                };
            }
        }
    }
    // Check venue capacity for non-table bookings
    if (serviceType === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.ServiceType.DINE_IN && !tableId) {
        const venue = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venue.findUnique({
            where: {
                id: venueId
            }
        });
        if (!venue) {
            return {
                available: false,
                reason: "Venue not found"
            };
        }
        // Get all bookings for the same time slot
        const existingBookings = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.booking.findMany({
            where: {
                venueId,
                date: {
                    gte: new Date(date.toDateString()),
                    lt: new Date(new Date(date.toDateString()).getTime() + 24 * 60 * 60 * 1000)
                },
                time,
                status: {
                    in: [
                        _prisma_client__WEBPACK_IMPORTED_MODULE_1__.BookingStatus.PENDING,
                        _prisma_client__WEBPACK_IMPORTED_MODULE_1__.BookingStatus.CONFIRMED
                    ]
                }
            }
        });
        const totalPartySize = existingBookings.reduce((sum, booking)=>sum + booking.partySize, 0);
        if (totalPartySize + partySize > venue.capacity) {
            return {
                available: false,
                reason: "Venue capacity exceeded"
            };
        }
    }
    return {
        available: true
    };
}
async function getAvailableTables(venueId, date, time, partySize) {
    const tables = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.table.findMany({
        where: {
            venueId,
            isActive: true,
            capacity: {
                gte: partySize
            }
        }
    });
    const availableTables = [];
    for (const table of tables){
        const availability = await checkAvailability(venueId, date, time, partySize, _prisma_client__WEBPACK_IMPORTED_MODULE_1__.ServiceType.DINE_IN, table.id);
        if (availability.available) {
            availableTables.push(table);
        }
    }
    return availableTables;
}
async function getAvailableTimeSlots(venueId, date, serviceType) {
    const dayOfWeek = date.getDay();
    const openingHours = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venueOpeningHours.findMany({
        where: {
            venueId,
            dayOfWeek,
            isActive: true
        },
        orderBy: {
            openTime: "asc"
        }
    });
    if (openingHours.length === 0) {
        return [];
    }
    const timeSlots = [];
    // Generate time slots for each opening hour period
    for (const slot of openingHours){
        const [openHours, openMinutes] = slot.openTime.split(":").map(Number);
        const [closeHours, closeMinutes] = slot.closeTime.split(":").map(Number);
        let currentHour = openHours;
        let currentMinute = openMinutes;
        while(currentHour < closeHours || currentHour === closeHours && currentMinute < closeMinutes){
            const timeString = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
            // Avoid duplicates if time slots overlap between periods
            if (!timeSlots.includes(timeString)) {
                timeSlots.push(timeString);
            }
            currentMinute += 30; // 30-minute intervals
            if (currentMinute >= 60) {
                currentMinute = 0;
                currentHour++;
            }
        }
    }
    // Sort time slots chronologically
    return timeSlots.sort();
}
// Helper function to get opening hours for display
async function getVenueOpeningHours(venueId) {
    const openingHours = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venueOpeningHours.findMany({
        where: {
            venueId,
            isActive: true
        },
        orderBy: [
            {
                dayOfWeek: "asc"
            },
            {
                openTime: "asc"
            }
        ]
    });
    return openingHours;
}
// Helper function to check if venue is open at a specific time
async function isVenueOpenAt(venueId, date, time) {
    const dayOfWeek = date.getDay();
    const [hours, minutes] = time.split(":").map(Number);
    const checkTime = hours * 60 + minutes;
    const openingHours = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venueOpeningHours.findMany({
        where: {
            venueId,
            dayOfWeek,
            isActive: true
        }
    });
    for (const slot of openingHours){
        const [openHours, openMinutes] = slot.openTime.split(":").map(Number);
        const [closeHours, closeMinutes] = slot.closeTime.split(":").map(Number);
        const openTime = openHours * 60 + openMinutes;
        const closeTime = closeHours * 60 + closeMinutes;
        if (checkTime >= openTime && checkTime <= closeTime) {
            return true;
        }
    }
    return false;
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


/***/ }),

/***/ "(rsc)/./lib/notifications.ts":
/*!******************************!*\
  !*** ./lib/notifications.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   getUserNotifications: () => (/* binding */ getUserNotifications),
/* harmony export */   markNotificationAsRead: () => (/* binding */ markNotificationAsRead),
/* harmony export */   sendBookingConfirmation: () => (/* binding */ sendBookingConfirmation),
/* harmony export */   sendBookingReminder: () => (/* binding */ sendBookingReminder)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "(rsc)/./lib/db.ts");

async function sendBookingConfirmation(customerEmail, data) {
    try {
        // In a real application, you would integrate with an email service like SendGrid, Mailgun, etc.
        // For now, we'll just log the email content and create a notification record
        const emailContent = generateBookingConfirmationEmail(data);
        console.log("Booking confirmation email would be sent to:", customerEmail);
        console.log("Email content:", emailContent);
        // Store email template usage for analytics
        await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.emailTemplate.upsert({
            where: {
                name: "booking_confirmation"
            },
            update: {},
            create: {
                name: "booking_confirmation",
                subject: "Booking Confirmation - {{venueName}}",
                htmlBody: emailContent.html,
                textBody: emailContent.text,
                isActive: true
            }
        });
    } catch (error) {
        console.error("Failed to send booking confirmation email:", error);
    // Don't throw error to prevent booking creation from failing
    }
}
async function sendBookingReminder(customerEmail, data) {
    try {
        const emailContent = generateBookingReminderEmail(data);
        console.log("Booking reminder email would be sent to:", customerEmail);
        console.log("Email content:", emailContent);
        await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.emailTemplate.upsert({
            where: {
                name: "booking_reminder"
            },
            update: {},
            create: {
                name: "booking_reminder",
                subject: "Booking Reminder - {{venueName}}",
                htmlBody: emailContent.html,
                textBody: emailContent.text,
                isActive: true
            }
        });
    } catch (error) {
        console.error("Failed to send booking reminder email:", error);
    }
}
async function createNotification(userId, type, title, message, metadata) {
    try {
        await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.notification.create({
            data: {
                userId,
                type,
                title,
                message,
                metadata: metadata || {}
            }
        });
    } catch (error) {
        console.error("Failed to create notification:", error);
    }
}
async function markNotificationAsRead(notificationId) {
    try {
        await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.notification.update({
            where: {
                id: notificationId
            },
            data: {
                isRead: true
            }
        });
    } catch (error) {
        console.error("Failed to mark notification as read:", error);
    }
}
async function getUserNotifications(userId, limit = 10) {
    try {
        return await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.notification.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            },
            take: limit
        });
    } catch (error) {
        console.error("Failed to get user notifications:", error);
        return [];
    }
}
function generateBookingConfirmationEmail(data) {
    const serviceTypeLabel = getServiceTypeLabel(data.serviceType);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        .button { background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmed!</h1>
          <p>Your reservation at ${data.venueName} has been confirmed</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.customerName},</p>
          <p>Thank you for your booking! We're excited to welcome you to ${data.venueName}.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <strong>Booking ID:</strong>
              <span>${data.bookingId.slice(-8)}</span>
            </div>
            <div class="detail-row">
              <strong>Date:</strong>
              <span>${data.date}</span>
            </div>
            <div class="detail-row">
              <strong>Time:</strong>
              <span>${data.time}</span>
            </div>
            <div class="detail-row">
              <strong>Party Size:</strong>
              <span>${data.partySize} ${data.partySize === 1 ? "guest" : "guests"}</span>
            </div>
            <div class="detail-row">
              <strong>Service Type:</strong>
              <span>${serviceTypeLabel}</span>
            </div>
            ${data.specialRequests ? `
            <div class="detail-row">
              <strong>Special Requests:</strong>
              <span>${data.specialRequests}</span>
            </div>
            ` : ""}
          </div>
          
          <div class="booking-details">
            <h3>Venue Information</h3>
            <p><strong>${data.venueName}</strong></p>
            <p>${data.venueAddress}</p>
            <p>Phone: ${data.venuePhone}</p>
          </div>
          
          <p>If you need to make any changes or cancel your booking, please contact the venue directly.</p>
          
          <p>We look forward to seeing you!</p>
        </div>
        
        <div class="footer">
          <p>This email was sent by Sully Booking System</p>
          <p>If you have any questions, please contact ${data.venueName} directly at ${data.venuePhone}</p>
        </div>
      </div>
    </body>
    </html>
  `;
    const text = `
    Booking Confirmed!
    
    Dear ${data.customerName},
    
    Thank you for your booking! We're excited to welcome you to ${data.venueName}.
    
    Booking Details:
    - Booking ID: ${data.bookingId.slice(-8)}
    - Date: ${data.date}
    - Time: ${data.time}
    - Party Size: ${data.partySize} ${data.partySize === 1 ? "guest" : "guests"}
    - Service Type: ${serviceTypeLabel}
    ${data.specialRequests ? `- Special Requests: ${data.specialRequests}` : ""}
    
    Venue Information:
    ${data.venueName}
    ${data.venueAddress}
    Phone: ${data.venuePhone}
    
    If you need to make any changes or cancel your booking, please contact the venue directly.
    
    We look forward to seeing you!
    
    ---
    This email was sent by Sully Booking System
    If you have any questions, please contact ${data.venueName} directly at ${data.venuePhone}
  `;
    return {
        html,
        text
    };
}
function generateBookingReminderEmail(data) {
    const serviceTypeLabel = getServiceTypeLabel(data.serviceType);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Reminder</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Reminder</h1>
          <p>Don't forget about your reservation at ${data.venueName}</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.customerName},</p>
          <p>This is a friendly reminder about your upcoming reservation at ${data.venueName}.</p>
          
          <div class="booking-details">
            <h3>Your Booking</h3>
            <div class="detail-row">
              <strong>Date:</strong>
              <span>${data.date}</span>
            </div>
            <div class="detail-row">
              <strong>Time:</strong>
              <span>${data.time}</span>
            </div>
            <div class="detail-row">
              <strong>Party Size:</strong>
              <span>${data.partySize} ${data.partySize === 1 ? "guest" : "guests"}</span>
            </div>
            <div class="detail-row">
              <strong>Service Type:</strong>
              <span>${serviceTypeLabel}</span>
            </div>
          </div>
          
          <p>We're looking forward to welcoming you! If you need to make any changes, please contact us as soon as possible.</p>
          
          <p><strong>Contact:</strong> ${data.venuePhone}</p>
        </div>
        
        <div class="footer">
          <p>This reminder was sent by Sully Booking System</p>
        </div>
      </div>
    </body>
    </html>
  `;
    const text = `
    Booking Reminder
    
    Dear ${data.customerName},
    
    This is a friendly reminder about your upcoming reservation at ${data.venueName}.
    
    Your Booking:
    - Date: ${data.date}
    - Time: ${data.time}
    - Party Size: ${data.partySize} ${data.partySize === 1 ? "guest" : "guests"}
    - Service Type: ${serviceTypeLabel}
    
    We're looking forward to welcoming you! If you need to make any changes, please contact us as soon as possible.
    
    Contact: ${data.venuePhone}
    
    ---
    This reminder was sent by Sully Booking System
  `;
    return {
        html,
        text
    };
}
function getServiceTypeLabel(type) {
    switch(type){
        case "DINE_IN":
            return "Dine In";
        case "TAKEAWAY":
            return "Takeaway";
        case "DELIVERY":
            return "Delivery";
        case "EVENT":
            return "Event";
        default:
            return type;
    }
}


/***/ }),

/***/ "(rsc)/./lib/subscription.ts":
/*!*****************************!*\
  !*** ./lib/subscription.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUBSCRIPTION_LIMITS: () => (/* binding */ SUBSCRIPTION_LIMITS),
/* harmony export */   checkImageUploadPermissions: () => (/* binding */ checkImageUploadPermissions),
/* harmony export */   checkSubscriptionLimits: () => (/* binding */ checkSubscriptionLimits),
/* harmony export */   checkVenueCreationLimits: () => (/* binding */ checkVenueCreationLimits),
/* harmony export */   getUserSubscriptionSummary: () => (/* binding */ getUserSubscriptionSummary),
/* harmony export */   incrementBookingUsage: () => (/* binding */ incrementBookingUsage),
/* harmony export */   resetMonthlyUsage: () => (/* binding */ resetMonthlyUsage)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "(rsc)/./lib/db.ts");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


async function checkSubscriptionLimits(venueId) {
    const subscription = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.subscription.findUnique({
        where: {
            venueId
        }
    });
    if (!subscription) {
        // Create free subscription if none exists
        const newSubscription = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.subscription.create({
            data: {
                venueId,
                plan: _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.FREE,
                status: _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionStatus.ACTIVE,
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                bookingsLimit: 50
            }
        });
        return {
            canCreateBooking: true,
            bookingsUsed: 0,
            bookingsLimit: 50,
            plan: _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.FREE
        };
    }
    const canCreateBooking = subscription.plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PAID || subscription.plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PREMIUM || subscription.bookingsLimit !== null && subscription.bookingsUsed < subscription.bookingsLimit;
    return {
        canCreateBooking,
        bookingsUsed: subscription.bookingsUsed,
        bookingsLimit: subscription.bookingsLimit,
        plan: subscription.plan
    };
}
async function checkImageUploadPermissions(venueId) {
    const subscription = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.subscription.findUnique({
        where: {
            venueId
        }
    });
    const plan = subscription?.plan || _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.FREE;
    // Free tier: Logo + Header image only
    // Premium/Paid tier: Logo + Header + Gallery (up to 20 images)
    const permissions = {
        canUploadLogo: true,
        canUploadHeader: true,
        canUploadGallery: plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PREMIUM || plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PAID,
        maxGalleryImages: plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PREMIUM || plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PAID ? 20 : 0,
        plan
    };
    return permissions;
}
async function incrementBookingUsage(venueId) {
    await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.subscription.update({
        where: {
            venueId
        },
        data: {
            bookingsUsed: {
                increment: 1
            }
        }
    });
}
async function resetMonthlyUsage(venueId) {
    await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.subscription.update({
        where: {
            venueId
        },
        data: {
            bookingsUsed: 0,
            currentPeriodStart: new Date(),
            currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }
    });
}
// Subscription plan limits configuration
const SUBSCRIPTION_LIMITS = {
    FREE: {
        venues: 1,
        bookingsPerMonth: 50,
        galleryImages: 0,
        analytics: true,
        widgets: true,
        customBranding: false,
        prioritySupport: false
    },
    PAID: {
        venues: 5,
        bookingsPerMonth: null,
        galleryImages: 20,
        analytics: true,
        widgets: true,
        customBranding: true,
        prioritySupport: false
    },
    PREMIUM: {
        venues: null,
        bookingsPerMonth: null,
        galleryImages: 20,
        analytics: true,
        widgets: true,
        customBranding: true,
        prioritySupport: true
    }
};
async function checkVenueCreationLimits(userId) {
    // Get user's venues count
    const venuesCount = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venue.count({
        where: {
            ownerId: userId
        }
    });
    // Get user's highest subscription plan across all venues
    const userVenues = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.venue.findMany({
        where: {
            ownerId: userId
        },
        include: {
            subscription: true
        }
    });
    // Determine the highest plan the user has
    let highestPlan = _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.FREE;
    for (const venue of userVenues){
        if (venue.subscription) {
            if (venue.subscription.plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PREMIUM) {
                highestPlan = _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PREMIUM;
                break;
            } else if (venue.subscription.plan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PAID && highestPlan === _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.FREE) {
                highestPlan = _prisma_client__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPlan.PAID;
            }
        }
    }
    const limits = SUBSCRIPTION_LIMITS[highestPlan];
    const canCreateVenue = limits.venues === null || venuesCount < limits.venues;
    let message;
    if (!canCreateVenue) {
        message = `You've reached the venue limit for your ${highestPlan} plan (${limits.venues} venue${limits.venues === 1 ? "" : "s"}). Upgrade to create more venues.`;
    }
    return {
        canCreateVenue,
        venuesUsed: venuesCount,
        venuesLimit: limits.venues,
        plan: highestPlan,
        message
    };
}
async function getUserSubscriptionSummary(userId) {
    const venueCheck = await checkVenueCreationLimits(userId);
    const limits = SUBSCRIPTION_LIMITS[venueCheck.plan];
    return {
        plan: venueCheck.plan,
        venues: {
            used: venueCheck.venuesUsed,
            limit: venueCheck.venuesLimit
        },
        features: {
            bookingsPerMonth: limits.bookingsPerMonth,
            galleryImages: limits.galleryImages,
            analytics: limits.analytics,
            widgets: limits.widgets,
            customBranding: limits.customBranding,
            prioritySupport: limits.prioritySupport
        }
    };
}


/***/ }),

/***/ "(rsc)/./lib/validations.ts":
/*!****************************!*\
  !*** ./lib/validations.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   availabilitySchema: () => (/* binding */ availabilitySchema),
/* harmony export */   bookingSchema: () => (/* binding */ bookingSchema),
/* harmony export */   eventSchema: () => (/* binding */ eventSchema),
/* harmony export */   loginSchema: () => (/* binding */ loginSchema),
/* harmony export */   openingHoursSchema: () => (/* binding */ openingHoursSchema),
/* harmony export */   registerSchema: () => (/* binding */ registerSchema),
/* harmony export */   tableSchema: () => (/* binding */ tableSchema),
/* harmony export */   venueOpeningHoursSchema: () => (/* binding */ venueOpeningHoursSchema),
/* harmony export */   venueSchema: () => (/* binding */ venueSchema),
/* harmony export */   widgetSchema: () => (/* binding */ widgetSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ "(rsc)/./node_modules/zod/lib/index.mjs");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);


// Auth validations
const loginSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    email: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email("Invalid email address"),
    password: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(6, "Password must be at least 6 characters")
});
const registerSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    email: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email("Invalid email address"),
    password: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(6, "Password must be at least 6 characters"),
    firstName: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "First name is required"),
    lastName: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Last name is required"),
    phone: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
});
// Venue validations
const venueSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Venue name is required"),
    description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    address: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Address is required"),
    city: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "City is required"),
    postcode: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Postcode is required"),
    phone: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Phone is required"),
    email: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email("Invalid email address"),
    website: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().optional().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.literal("")),
    cuisine: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    venueType: zod__WEBPACK_IMPORTED_MODULE_1__.z.nativeEnum(_prisma_client__WEBPACK_IMPORTED_MODULE_0__.VenueType),
    capacity: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(1, "Capacity must be at least 1")
});
// Booking validations
const bookingSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    venueId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Venue is required"),
    serviceType: zod__WEBPACK_IMPORTED_MODULE_1__.z.nativeEnum(_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ServiceType),
    date: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Date is required"),
    time: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    partySize: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(1, "Party size must be at least 1"),
    customerName: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Customer name is required"),
    customerEmail: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email("Invalid email address"),
    customerPhone: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Phone number is required"),
    specialRequests: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    tableId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
});
// Table validations
const tableSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Table name is required"),
    capacity: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(1, "Capacity must be at least 1"),
    description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()
});
// Event validations
const eventSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Event name is required"),
    description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    date: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Date is required"),
    startTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Start time is required"),
    endTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "End time is required"),
    capacity: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(1, "Capacity must be at least 1"),
    price: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(0, "Price must be positive").optional()
});
// Availability validations
const availabilitySchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    dayOfWeek: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(0).max(6),
    openTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Open time is required"),
    closeTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Close time is required"),
    isOpen: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean()
});
// Opening hours validations
const openingHoursSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    dayOfWeek: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(0).max(6),
    openTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    closeTime: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
    isActive: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().default(true)
});
const venueOpeningHoursSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    openingHours: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(openingHoursSchema)
});
// Widget validations
const widgetSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1, "Widget name is required"),
    settings: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        theme: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        primaryColor: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),
        showLogo: zod__WEBPACK_IMPORTED_MODULE_1__.z.boolean().optional(),
        allowedServices: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zod__WEBPACK_IMPORTED_MODULE_1__.z.nativeEnum(_prisma_client__WEBPACK_IMPORTED_MODULE_0__.ServiceType)).optional()
    }).optional()
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/zod","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbookings%2Froute&page=%2Fapi%2Fbookings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbookings%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fsully-booking-system%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();