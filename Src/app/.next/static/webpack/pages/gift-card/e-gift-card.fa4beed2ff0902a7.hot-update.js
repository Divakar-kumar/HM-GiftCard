"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gift-card/e-gift-card",{

/***/ "./component/EmailForm/EmailForm.js":
/*!******************************************!*\
  !*** ./component/EmailForm/EmailForm.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailForm.module.css */ \"./component/EmailForm/EmailForm.module.css\");\n/* harmony import */ var _EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appState */ \"./appState.js\");\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar EmailForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        recipientName: \"\",\n        recipientEmail: \"\",\n        senderName: \"\",\n        deliveryDate: \"\"\n    }), emailData = ref[0], setEmailData = ref[1];\n    var value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_appState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var handleInputChange = function(event) {\n        var data = _objectSpread({}, emailData);\n        data[event.target.name] = event.target.value;\n        setEmailData(data);\n    // setEmailFormData(emailData);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailLabel),\n                                children: \"Recipient name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailInputWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"recipientName\",\n                                    value: emailData.recipientName,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailLabel),\n                                children: \"Recipient email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailInputWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"recipientEmail\",\n                                    value: emailData.recipientEmail,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailLabel),\n                                children: \"Sender name (optional)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailInputWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"senderName\",\n                                    value: emailData.senderName,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailLabel),\n                                children: \"Delivery date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().emailInputWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"deliveryDate\",\n                                    value: emailData.deliveryDate,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"The eGift card(s) will be delivered to the recipient's inbox.\"\n            }, void 0, false, {\n                fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aparv/hackathon/HM-GiftCard/Src/app/component/EmailForm/EmailForm.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this));\n};\n_s(EmailForm, \"RDaHOsQBrx08khJWPNy8jkD+WY4=\");\n_c = EmailForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailForm);\nvar _c;\n$RefreshReg$(_c, \"EmailForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7S0FBVEEsU0FBUztBQXdFZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9FbWFpbEZvcm0vRW1haWxGb3JtLmpzPzI0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VtYWlsRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRm9ybUNvbnRleHQgZnJvbSBcIi4uLy4uL2FwcFN0YXRlXCI7XG5cbmNvbnN0IEVtYWlsRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsRGF0YSwgc2V0RW1haWxEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByZWNpcGllbnROYW1lOiBcIlwiLFxuICAgIHJlY2lwaWVudEVtYWlsOiBcIlwiLFxuICAgIHNlbmRlck5hbWU6IFwiXCIsXG4gICAgZGVsaXZlcnlEYXRlOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLmVtYWlsRGF0YSB9O1xuICAgIGRhdGFbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHNldEVtYWlsRGF0YShkYXRhKTtcbiAgICAvLyBzZXRFbWFpbEZvcm1EYXRhKGVtYWlsRGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbFdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxMYWJlbH0+UmVjaXBpZW50IG5hbWU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsSW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZWNpcGllbnROYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsRGF0YS5yZWNpcGllbnROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbFdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxMYWJlbH0+UmVjaXBpZW50IGVtYWlsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbElucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVjaXBpZW50RW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxEYXRhLnJlY2lwaWVudEVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbFdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxMYWJlbH0+U2VuZGVyIG5hbWUgKG9wdGlvbmFsKTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxJbnB1dFdyYXBwZXJ9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNlbmRlck5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxEYXRhLnNlbmRlck5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsV3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbExhYmVsfT5EZWxpdmVyeSBkYXRlPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbElucHV0V3JhcHBlcn0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVsaXZlcnlEYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsRGF0YS5kZWxpdmVyeURhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+VGhlIGVHaWZ0IGNhcmQocykgd2lsbCBiZSBkZWxpdmVyZWQgdG8gdGhlIHJlY2lwaWVudCdzIGluYm94LjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInN0eWxlcyIsIkZvcm1Db250ZXh0IiwiRW1haWxGb3JtIiwicmVjaXBpZW50TmFtZSIsInJlY2lwaWVudEVtYWlsIiwic2VuZGVyTmFtZSIsImRlbGl2ZXJ5RGF0ZSIsImVtYWlsRGF0YSIsInNldEVtYWlsRGF0YSIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsImRhdGEiLCJ0YXJnZXQiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW1haWxXcmFwcGVyIiwiZW1haWxMYWJlbCIsImVtYWlsSW5wdXRXcmFwcGVyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/EmailForm/EmailForm.js\n");

/***/ })

});