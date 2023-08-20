"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3732);

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(404).end();
    }
    try {
        const { userId } = req.query;
        if (!userId || typeof userId !== "string") {
            throw new Error("Invalid Id");
        }
        const notifications = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.notification.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.update({
            where: {
                id: userId
            },
            data: {
                hasNotification: false
            }
        });
        return res.status(200).json({
            notifications
        });
    } catch (error) {
        return res.status(400).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2737));
module.exports = __webpack_exports__;

})();