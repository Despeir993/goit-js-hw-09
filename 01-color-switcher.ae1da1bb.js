!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function a(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}t.addEventListener("click",(function(d){d.preventDefault(),t.disabled=!0,e.disabled=!1,n=setInterval(a,1e3)})),e.addEventListener("click",(function(a){a.preventDefault(),clearInterval(n),t.disabled=!1,e.disabled=!0}));var n=null}();
//# sourceMappingURL=01-color-switcher.ae1da1bb.js.map