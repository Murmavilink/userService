/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUser */ \"./src/modules/editUser.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService;\r\n\r\nuserService.getUsers().then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n});\r\n\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUser__WEBPACK_IMPORTED_MODULE_5__.editUser)();\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUsers\": () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n    const form = document.querySelector('form');\r\n    const nameInput = document.getElementById('form-name');\r\n    const emailInput = document.getElementById('form-email');\r\n    const childrenlInput = document.getElementById('form-children');\r\n\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        if(!form.dataset.method) {\r\n            const user = {\r\n                name: nameInput.value,\r\n                email: emailInput.value,\r\n                children: childrenlInput.checked,\r\n                permissions: false\r\n            };\r\n    \r\n            userService.addUSer(user).then(() => {\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n                    form.reset();\r\n                });\r\n            });\r\n        }\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePermissions\": () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\nconst changePermissions = () => {\r\n    const tbody = document.getElementById('table-body');\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('input[type=checkbox]')) {\r\n            const tr = e.target.closest('tr');\r\n            const input = tr.querySelector('input[type=checkbox]');\r\n            const id = tr.dataset.key;\r\n            \r\n\r\n            userService.chengeUser(id, {permissions: input.checked}).then(res => {\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n                });\r\n            });\r\n        }\r\n\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUser.js":
/*!*********************************!*\
  !*** ./src/modules/editUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editUser\": () => (/* binding */ editUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst editUser = () => {\r\n    const tbody = document.getElementById('table-body');\r\n    const form = document.querySelector('form');\r\n    const nameInput = form.querySelector('#form-name');\r\n    const emailInput = form.querySelector('#form-email');\r\n    const childrenlInput = form.querySelector('#form-children');\r\n\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.btn-edit')) {\r\n            const tr = e.target.closest('tr');\r\n            const id = tr.dataset.key;\r\n\r\n            userService.getUser(id).then(user => {\r\n                nameInput.value = user.name;\r\n                emailInput.value = user.email;\r\n                childrenlInput.checked = user.children;\r\n\r\n                form.dataset.method = id;\r\n            });\r\n        }\r\n\r\n    });\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        if(form.dataset.method) {\r\n            const id = form.dataset.method;\r\n            const user = {\r\n                name: nameInput.value,\r\n                email: emailInput.value,\r\n                children: childrenlInput.checked,\r\n                permissions: false\r\n            };\r\n\r\n            userService.editUser(id, user).then(() => {\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n                    form.reset();\r\n                    form.removeAttribute('data-method');\r\n                });\r\n            });\r\n\r\n        }\r\n    });\r\n    \r\n\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUser.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeUsers\": () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\nconst removeUsers = () => {\r\n    const tbody = document.getElementById('table-body');\r\n\r\n    tbody.addEventListener('click', (e) => {\r\n        \r\n        if(e.target.closest('.btn-remove')) {\r\n            const id = e.target.closest('tr').dataset.key;\r\n\r\n            userService.removeUser(id).then(res => {\r\n                console.log(res);\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n                });\r\n            });\r\n        }\r\n\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n    \r\n    const tableBody = document.getElementById('table-body');\r\n    tableBody.innerHTML = '';\r\n\r\n    users.forEach(user => {    \r\n        tableBody.insertAdjacentHTML('beforeend',  `\r\n        <tr data-key=\"${user.id}\">\r\n            <th scope=\"row\">${user.id}</th>\r\n            <td>${user.name}</td>\r\n            <td>${user.email}</td>\r\n            <td>${user.children ? 'Есть': 'Нет'}</td>\r\n            <td>\r\n                <div class=\"form-check form-switch\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"form-children\" ${user.permissions ? 'checked': ''}>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                        <i class=\"bi-pencil-square\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                        <i class=\"bi-person-x\"></i>\r\n                    </button>\r\n                </div>\r\n            </td>\r\n        </tr> \r\n        `);\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserService\": () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n    // _users = [\r\n    //     {\r\n    //         id: 0,\r\n    //         name: 'Mark',\r\n    //         email: 'otto@gmail.com',\r\n    //         children: true,\r\n    //         permissions: false,\r\n    //     },\r\n    //     {\r\n    //         id: 1,\r\n    //         name: 'Jacob',\r\n    //         email: 'thornton@gmail.com',\r\n    //         children: false,\r\n    //         permissions: true,\r\n    //     },\r\n    // ]\r\n\r\n    // get users() {\r\n    //     return this._users;\r\n    // }\r\n\r\n    // set users(users) {\r\n    //     this._users = users;\r\n    // }\r\n\r\n\r\n    // logger() {\r\n    //     console.log(this.users);\r\n    // }\r\n    \r\n\r\n    getUsers() {\r\n        return fetch('http://localhost:4545/users').then(res => res.json());\r\n    }\r\n\r\n    addUSer(user) {\r\n        return fetch('http://localhost:4545/users', {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n            body: JSON.stringify(user),\r\n        }).then(res => res.json());\r\n    }\r\n\r\n    removeUser(id) {\r\n        return fetch(`http://localhost:4545/users/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(res => res.json());\r\n    }\r\n\r\n    chengeUser(id, data) {\r\n        return fetch(`http://localhost:4545/users/${id}`, {\r\n            method: 'PATCH',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        }).then(res => res.json());\r\n    }\r\n\r\n    getUser(id) {\r\n        return fetch(`http://localhost:4545/users/${id}`).then(res => res.json());\r\n    }\r\n\r\n    editUser(id, user) {\r\n        return fetch(`http://localhost:4545/users/${id}`, {\r\n            method: 'PUT',\r\n            body: JSON.stringify(user),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        }).then(res => res.json());\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;