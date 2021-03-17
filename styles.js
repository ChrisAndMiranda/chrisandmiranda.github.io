(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n* {\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    cursor: default;\r\n}\r\nhtml, body {\r\n    overflow-x: hidden;\r\n    overscroll-behavior-y: contain;\r\n}\r\nimg {\r\n    width: 100%;\r\n}\r\nhtml {\r\n    background: rgb(255,255,255);\r\n    background: -webkit-gradient(linear, left bottom, left top, color-stop(60%, rgba(255,255,255,1)), color-stop(80%, rgba(156,255,237,1)), to(rgba(147,233,190,1)));\r\n    background: linear-gradient(0deg, rgba(255,255,255,1) 60%, rgba(156,255,237,1) 80%, rgba(147,233,190,1) 100%);\r\n    background-repeat: no-repeat;\r\n    scroll-behavior: smooth;\r\n    overflow-x: hidden;\r\n}\r\nnav a {\r\n    text-decoration: none;\r\n    color: #003366;\r\n    cursor: pointer;\r\n    display: block;\r\n    padding: 20px 16px;\r\n}\r\nnav p {\r\n    font-family: 'Permanent Marker', cursive;\r\n    margin-left: 2%;\r\n    font-size: medium;\r\n    color: #003366;\r\n}\r\nnav {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    background-color: #93eac0;\r\n    z-index: 1;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n.nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\nnav ul {\r\n    display: none;\r\n}\r\n.hamburger {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 5%;\r\n    height: 15px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    margin-right: 3%;\r\n    cursor: pointer;\r\n}\r\n.hamburger div {\r\n    display: inherit;\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #036;\r\n    margin: 1%;\r\n}\r\n.hamburger-menu {\r\n    position: fixed;\r\n    right: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    background-color: #93eac0;\r\n    width: 45%;\r\n    text-align: center;\r\n    border: solid 1px;\r\n    border-top: none;\r\n    border-right: none;\r\n    z-index: 1;\r\n}\r\n.hamburger-menu a {\r\n    cursor: pointer;\r\n    border-bottom: dashed navy 1.5px;\r\n    padding: 5%;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n.hamburger-menu a:last-child {\r\n    border: none;\r\n}\r\n.close {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n}\r\nfooter {\r\n    text-align: right;\r\n    margin-right: 1%;\r\n    font-size: xx-small;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n\r\n    nav p {\r\n        font-size: x-large;\r\n    }\r\n\r\n    .hamburger {\r\n        width: 3%;\r\n        height: 25px;\r\n    }\r\n\r\n    .close {\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    footer {\r\n        font-size: x-small;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width: 996px) {\r\n\r\n    nav {\r\n        padding: 0;\r\n    }\r\n\r\n    .hamburger {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger-menu {\r\n        display: none;\r\n    }\r\n\r\n    nav p {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    nav ul {\r\n        -webkit-box-flex: 3;\r\n                flex: 3;\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-pack: end;\r\n                justify-content: flex-end;\r\n        list-style-type: none;\r\n    }\r\n\r\n    ul li {\r\n        float: right;\r\n    }\r\n\r\n    footer {\r\n        font-size: small;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0tBQTZHO0lBQTdHLDZHQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsOEJBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUo7QUFHQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksbUJBQU87Z0JBQVAsT0FBTztRQUNQLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHFCQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBjb250YWluO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDYwJSwgcmdiYSgxNTYsMjU1LDIzNywxKSA4MCUsIHJnYmEoMTQ3LDIzMywxOTAsMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAzMzY2O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XHJcbn1cclxuXHJcbm5hdiBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGNvbG9yOiAjMDAzMzY2O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZWFjMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIgZGl2IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjtcclxuICAgIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItbWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZWFjMDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLW1lbnUgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgbmF2eSAxLjVweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLW1lbnUgYTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgbmF2IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICB3aWR0aDogMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTZweCkge1xyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJnZXItbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXYgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHVsIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\walkez5\wedding\wedding\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map