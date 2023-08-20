"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 7320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3732);


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }
    try {
        const { email, username, name, password } = req.body;
        const isUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.user.findUnique({
            where: {
                email
            }
        });
        if (isUser) {
            throw new Error("Already Registerd");
        }
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 12);
        const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.user.create({
            data: {
                email: email,
                username: username,
                name: name,
                hashedPassword: hashedPassword
            }
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7320));
module.exports = __webpack_exports__;

})();