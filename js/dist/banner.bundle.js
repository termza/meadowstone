!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(()=>(({55072:function(){var e=this;document.querySelectorAll(".bb-section-aspect-ratio").forEach((function(t){var o=function(t){var o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];clearTimeout(o),o=setTimeout((function(){t.apply(e,c)}),n)}}((function(){if(!t.classList.contains("expanded")){var e=t.querySelector(".aspect-ratio-inner"),o=t.querySelector(".overflow-content");e&&o&&(o.clientHeight>e.clientHeight?t.classList.add("collapsed"):t.classList.remove("collapsed"))}}),500);o(),window.addEventListener("resize",o);var n=t.querySelector(".expand-btn");n&&n.addEventListener("click",(function(){t.classList.add("expanded"),t.classList.remove("collapsed"),window.removeEventListener("resize",o)}))})),window.testSwitch=function(e){switch(e){case 1:console.log("1");case 2:console.log("2");default:console.log("default")}}}}[55072](),{}))));