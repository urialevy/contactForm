(self["webpackChunkwebapp_template"] =
  self["webpackChunkwebapp_template"] || []).push([
  ["main"],
  {
    /***/ "./src/app.js":
      /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
      /***/ () => {
        const head = document.head;
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "dist/output.css";
        head.appendChild(styleLink);
        const h1Node = document.createElement("h1");
        h1Node.classList.add("text-3xl", "font-bold", "underline");
        h1Node.innerHTML = "Hello world!";
        document.body.appendChild(h1Node);

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/app.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhcHAtdGVtcGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkO1xyXG5jb25zdCBzdHlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuc3R5bGVMaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5zdHlsZUxpbmsuaHJlZiA9IFwiZGlzdC9vdXRwdXQuY3NzXCI7XHJcbmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVMaW5rKTtcclxuY29uc3QgaDFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5oMU5vZGUuY2xhc3NMaXN0LmFkZChcInRleHQtM3hsXCIsIFwiZm9udC1ib2xkXCIsIFwidW5kZXJsaW5lXCIpO1xyXG5oMU5vZGUuaW5uZXJIVE1MID0gXCJIZWxsbyB3b3JsZCFcIjtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMU5vZGUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
