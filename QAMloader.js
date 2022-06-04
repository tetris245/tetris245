// ==UserScript==
// @name         Quick-AccessMenu2.1
// @namespace    http://tampermonkey.net/
// @version      1.4.1
// @description  Everything you'll ever need for BC
// @author       Nemesea
// @match        https://bondageprojects.elementfx.com/*
// @match        https://www.bondageprojects.elementfx.com/*
// @match        https://bondage-europe.com/*
// @match        https://www.bondage-europe.com/*
// @match        http://localhost:*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
setTimeout(
	function () {
			let n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://github.com/tetris245/tetris245/blob/master/Quick-AccessMenu2.1/script.js?_=" + Date.now());
			n.onload = () => n.remove();
			document.head.appendChild(n);
		}
);