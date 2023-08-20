(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__]);
private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({ ...options, userland: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_2__ })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_ImageUpload)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dropzone"
const external_react_dropzone_namespaceObject = require("react-dropzone");
;// CONCATENATED MODULE: ./components/ImageUpload.tsx




const ImageUpload = ({ value, onChange, disabled, label })=>{
    const [base64, setBase64] = (0,external_react_.useState)(value);
    const handleChange = (0,external_react_.useCallback)((base64)=>{
        onChange(base64);
    }, [
        onChange
    ]);
    const handleDrop = (0,external_react_.useCallback)((files)=>{
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event)=>{
            setBase64(event.target.result);
            handleChange(event.target.result);
        };
        reader.readAsDataURL(file);
    }, [
        handleChange
    ]);
    const { getRootProps, getInputProps } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            "image/jpeg": [],
            "image/png": []
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...getRootProps({
            className: "w-full p-4 cursor-pointer text-white text-center border-2 border-dotted rounded-md border-neutral-700"
        }),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                ...getInputProps()
            }),
            base64 ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex items-center cursor-pointer justify-center",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: base64,
                    height: "100",
                    width: "100",
                    alt: "Uploaded image"
                })
            }) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-white",
                children: label
            })
        ]
    });
};
/* harmony default export */ const components_ImageUpload = (ImageUpload);


/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Input = ({ placeholder, value, type = "text", onChange, disabled, label })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl text-white font-semibold mb-2",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                disabled: disabled,
                onChange: onChange,
                value: value,
                placeholder: placeholder,
                type: type,
                className: " w-full p-4  text-lg  bg-black  border-2 border-neutral-800  rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed "
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 2391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8709);
/* harmony import */ var _layout_FollowBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _layout_FollowBar__WEBPACK_IMPORTED_MODULE_3__]);
([_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _layout_FollowBar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Layout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-screen bg-black",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container h-full mx-auto xl:px-30 max-w-6xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-4 h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " col-span-3  lg:col-span-2  border-x-[1px]  border-neutral-800 ",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_FollowBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8726);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1042);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Modal = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled })=>{
    const registerModel = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) {
            return;
        }
        onClose();
    }, [
        disabled,
        onClose
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) {
            return;
        }
        onSubmit();
    }, [
        disabled,
        onSubmit
    ]);
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " justify-center  items-center  flex  overflow-x-hidden  overflow-y-auto  fixed  inset-0  z-50  outline-none  focus:outline-none bg-neutral-800 bg-opacity-70 ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " h-full lg:h-auto border-0  rounded-lg  shadow-lg  relative  flex  flex-col  w-full  bg-black  outline-none  focus:outline-none ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex  items-center  justify-between  p-10  rounded-t ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: " text-3xl font-semibold text-white ",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleClose,
                                    className: "p-1 ml-auto text-white border-0 hover:opacity-70 transition   ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineClose, {
                                        size: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative p-10 flex-auto",
                            children: body
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex flex-col gap-3 p-10  ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    disabled: disabled,
                                    label: actionLabel,
                                    secondary: true,
                                    fullwidth: true,
                                    large: true,
                                    outline: false,
                                    onClick: handleSubmit
                                }),
                                footer
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9313);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__, _Avatar__WEBPACK_IMPORTED_MODULE_3__]);
([_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__, _Avatar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const FollowBar = ()=>{
    const { data: users = [] } = (0,_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (users?.length === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-4 hidden lg:block",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-neutral-800 rounded-xl p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-white text-xl font-semibold",
                    children: "Who to follow"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-6 mt-4",
                    children: users?.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    userIds: user.id
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-white font-semibold text-sm",
                                            children: user?.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-netural-400 text-sm",
                                            children: [
                                                "@",
                                                user?.username
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, user?.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6520);
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6726);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1954);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SidebarItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__]);
([_SidebarItem__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Sidebar = ()=>{
    const { data: currentUser, isLoading } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const items = [
        {
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsHouseFill,
            label: "Home",
            href: "/"
        },
        {
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBellFill,
            label: "Notifications",
            href: "/notifications",
            auth: true,
            alert: currentUser?.hasNotification
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUser,
            label: "Profile",
            href: `/user/${currentUser?.id}`,
            auth: true
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-span-1 h-full pr-4 md:pr-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col items-end",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2 lg:w-[230px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            href: item.href,
                            label: item.label,
                            icon: item.icon,
                            auth: item?.auth,
                            alert: item?.alert
                        }, item.href)),
                    currentUser?.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut)(),
                        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiLogOut,
                        label: "Logout"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1954);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SidebarItem = ({ label, icon: Icon, href, auth, onClick, alert })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (onClick) {
            return onClick();
        }
        if (auth && !currentUser) {
            loginModal.onOpen();
        } else if (href) {
            router.push(href);
        }
    }, [
        router,
        href,
        auth,
        loginModal,
        onClick,
        currentUser
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: handleClick,
        className: "flex flex-row items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative rounded-full  h-14 w-14 flex items-center justify-center  p-4 hover:bg-slate-300  hover:bg-opacity-10  cursor-pointer  lg:hidden ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 28,
                        color: "white"
                    }),
                    alert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsDot, {
                        className: "text-sky-500 absolute -top-4 left-0",
                        size: 70
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative hidden  lg:flex  items-row  gap-4  p-4  rounded-full  hover:bg-slate-300  hover:bg-opacity-10  cursor-pointer items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 24,
                        color: "white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "hidden lg:block text-white text-xl",
                        children: label
                    }),
                    alert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsDot, {
                        className: "text-sky-500 absolute -top-4 left-0",
                        size: 70
                    }) : null
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const SidebarLogo = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: ()=>router.push("/"),
        className: " rounded-full  h-14 w-14 p-4  flex  items-center  justify-center  hover:bg-blue-300  hover:bg-opacity-10  cursor-pointer ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsTwitter, {
            size: 28,
            color: "white"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarLogo);


/***/ }),

/***/ 2207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(405);
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9977);
/* harmony import */ var _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4227);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1699);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1954);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _Model__WEBPACK_IMPORTED_MODULE_4__, _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _Model__WEBPACK_IMPORTED_MODULE_4__, _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const EditModal = ()=>{
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { mutate: mutateFetchedUser } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(currentUser?.user?.id);
    const editModal = (0,_hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [profileImage, setProfileImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [coverImage, setCoverImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [username, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUserName(currentUser?.username);
        setBio(currentUser?.bio);
        setEmail(currentUser?.email);
    }, [
        currentUser?.name,
        currentUser?.email,
        currentUser?.username,
        currentUser?.coverImage,
        currentUser?.profileImage,
        currentUser?.bio
    ]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await axios__WEBPACK_IMPORTED_MODULE_8__["default"].patch("/api/edit", {
                name,
                email,
                bio,
                profileImage,
                coverImage,
                username
            });
            mutateFetchedUser();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Updated At");
            editModal.onClose();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        email,
        bio,
        name,
        username,
        mutateFetchedUser,
        profileImage,
        coverImage,
        editModal
    ]);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        editModal.onClose();
    }, [
        editModal
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageUpload__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: profileImage,
                disabled: isLoading,
                onChange: (image)=>setProfileImage(image),
                label: "Upload Profile Image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageUpload__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: coverImage,
                disabled: isLoading,
                onChange: (image)=>setCoverImage(image),
                label: "Upload Cover Image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                placeholder: "Name",
                onChange: (e)=>setName(e.target.value),
                value: name,
                type: "text",
                disabled: isLoading
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                placeholder: "Username",
                onChange: (e)=>setUserName(e.target.value),
                value: username,
                type: "text",
                disabled: isLoading
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                placeholder: "Bio",
                onChange: (e)=>setBio(e.target.value),
                value: bio,
                type: "text",
                disabled: isLoading
            }),
            " "
        ]
    });
    //   const footerContent = (
    //     <div className="text-neutral-400 text-center mt-4">
    //       <p>
    //         First time using Twitter?
    //         <span
    //           onClick={onToggle}
    //           className="
    //             text-white 
    //             cursor-pointer 
    //             hover:underline
    //           "
    //         >
    //           {" "}
    //           Create an account
    //         </span>
    //       </p>
    //     </div>
    //   );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        disabled: isLoading,
        isOpen: editModal.isOpen,
        title: "Edit Your Profile",
        actionLabel: "Edit",
        onClose: editModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1042);
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9977);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__, _Model__WEBPACK_IMPORTED_MODULE_6__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__, _Model__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const LoginModal = ()=>{
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)("credentials", {
                email,
                password
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Logged in");
            loginModal.onClose();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        email,
        password,
        loginModal
    ]);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    }, [
        loginModal,
        registerModal
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                type: "email",
                placeholder: "Email",
                onChange: (e)=>setEmail(e.target.value),
                value: email,
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Password",
                type: "password",
                onChange: (e)=>setPassword(e.target.value),
                value: password,
                disabled: isLoading
            })
        ]
    });
    const footerContent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-neutral-400 text-center mt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "First time using Twitter?",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    onClick: onToggle,
                    className: " text-white  cursor-pointer  hover:underline ",
                    children: [
                        " ",
                        "Create an account"
                    ]
                })
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        disabled: isLoading,
        isOpen: loginModal.isOpen,
        title: "Login",
        actionLabel: "Sign in",
        onClose: loginModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent,
        footer: footerContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1042);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(405);
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9977);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__, _Model__WEBPACK_IMPORTED_MODULE_8__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__, _Model__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const RegisterModal = ()=>{
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (isLoading) {
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    }, [
        loginModal,
        registerModal,
        isLoading
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/register", {
                email,
                password,
                username,
                name
            });
            setIsLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Account created.");
            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)("credentials", {
                email,
                password
            });
            registerModal.onClose();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        email,
        password,
        registerModal,
        username,
        name
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                disabled: isLoading,
                placeholder: "Name",
                value: name,
                type: "name",
                onChange: (e)=>setName(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                type: "text",
                disabled: isLoading,
                placeholder: "Username",
                value: username,
                onChange: (e)=>setUsername(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                disabled: isLoading,
                placeholder: "Email",
                value: email,
                type: "email",
                onChange: (e)=>setEmail(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                disabled: isLoading,
                placeholder: "Password",
                type: "password",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            })
        ]
    });
    const footerContent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-neutral-400 text-center mt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "Already have an account?",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    onClick: onToggle,
                    className: " text-white  cursor-pointer  hover:underline ",
                    children: [
                        " ",
                        "Sign in"
                    ]
                })
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Model__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        disabled: isLoading,
        isOpen: registerModal.isOpen,
        title: "Create an account",
        actionLabel: "Register",
        onClose: registerModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent,
        footer: footerContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useEditModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useRegisterModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRegisterModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8698);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_fetcher__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__]);
([_libs_fetcher__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUsers = ()=>{
    const { data, error, isLoading, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/users", _libs_fetcher__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2391);
/* harmony import */ var _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3122);
/* harmony import */ var _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5087);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals_EditModals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2207);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_2__, _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_modals_EditModals__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_2__, _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _components_modals_EditModals__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_6__.SessionProvider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_EditModals__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,812,675,702], () => (__webpack_exec__(9942)));
module.exports = __webpack_exports__;

})();