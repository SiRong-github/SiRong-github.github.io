(()=>{"use strict";document.getElementById("myPic").src="/img/MyPic.jpg",document.querySelectorAll(".tablink").forEach((e=>{e.addEventListener("click",(function(e){!function(e,t){var n,c,s;for(c=document.getElementsByClassName("tabcontent"),n=0;n<c.length;n++)c[n].classList.remove("active");for(s=document.getElementsByClassName("tablink"),n=0;n<s.length;n++)s[n].classList.remove("active");document.getElementById(t).classList.add("active"),e.currentTarget.classList.add("active")}(e,this.getAttribute("href").substring(1))}))})),function e(){document.getElementById("defaultTab").click(),document.addEventListener("DOMContentLoaded",e)}()})();