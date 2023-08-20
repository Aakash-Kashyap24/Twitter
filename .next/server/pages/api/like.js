"use strict";
(() => {
var exports = {};
exports.id = 295;
exports.ids = [295,748];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 5134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3732);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9025);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);



const serverAuth = async (req, res)=>{
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);
    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }
    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.findUnique({
        where: {
            email: session.user.email
        }
    });
    if (!currentUser) {
        throw new Error("Not signed in");
    }
    return {
        currentUser
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);


/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3732);
/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5134);


async function handler(req, res) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).end();
    }
    try {
        if (req.method === "POST") {
            const { postId } = req.body;
            const { currentUser } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
            if (!postId || typeof postId !== "string") {
                throw new Error("Invalid ID");
            }
            const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.findUnique({
                where: {
                    id: postId
                }
            });
            if (!post) {
                throw new Error("Invalid ID");
            }
            let updatedLikedIds = [
                ...post.likeIds || []
            ];
            updatedLikedIds.push(currentUser.id);
            // NOTIFICATION PART START
            try {
                const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.findUnique({
                    where: {
                        id: postId
                    }
                });
                if (post?.userId) {
                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.notification.create({
                        data: {
                            body: `${currentUser.username} liked your tweet!`,
                            userId: post.userId
                        }
                    });
                    await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.update({
                        where: {
                            id: post.userId
                        },
                        data: {
                            hasNotification: true
                        }
                    });
                }
            } catch (error) {
                return error;
            }
            const updatedPost = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.update({
                where: {
                    id: postId
                },
                data: {
                    likeIds: updatedLikedIds
                }
            });
            // NOTIFICATION PART END
            return res.status(200).json(updatedPost);
        }
        if (req.method === "DELETE") {
            const { postId } = req.query;
            const { currentUser } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
            if (!postId || typeof postId !== "string") {
                throw new Error("Invalid ID");
            }
            const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.findUnique({
                where: {
                    id: postId
                }
            });
            if (!post) {
                throw new Error("Invalid ID");
            }
            let updatedLikedIds = [
                ...post.likeIds || []
            ];
            updatedLikedIds = updatedLikedIds.filter((likedId)=>likedId !== currentUser?.id);
            const updatedPost = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post.update({
                where: {
                    id: postId
                },
                data: {
                    likeIds: updatedLikedIds
                }
            });
            return res.status(200).json(updatedPost);
        }
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
var __webpack_exports__ = __webpack_require__.X(0, [25], () => (__webpack_exec__(847)));
module.exports = __webpack_exports__;

})();