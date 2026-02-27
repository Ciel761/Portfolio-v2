
window.onload = function () {

    console.log("Page is fully loaded!");

const navi = document.getElementById("navi");
const naviFooter = document.getElementById("naviFooter");
const ss2 = document.getElementById("scrollScreen-2");
const naviFooterTitle = document.getElementById("naviFooterTitle");
const res = document.getElementById("research");
const des = document.getElementById("design");
const abt = document.getElementById("about");
const dotg = document.getElementsByClassName("dot-grid");
let hasResized = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  if (scrollY < 0.4*screenHeight) {
    navi.style.height = "100vh"; 
    naviFooter.style.height = "10vh";
    ss2.style.bottom="-95vh";// reset to original height
    naviFooterTitle.style.top="0";
    hasResized = false;
  } else if (scrollY >= 0.4*screenHeight) {
    navi.style.height = "3em";
    naviFooter.style.height = "5vh";
    ss2.style.bottom="0vh"; // change to any height you want
    naviFooterTitle.style.top="-17.5em";
    hasResized = true;
  }
  if (scrollY < 1 *screenHeight) {
    res.style.bottom="0vh" // change to any height you want
    des.style.bottom="-100vh"
    abt.style.bottom="-100vh"
    hasResized = true;
  } else if (scrollY >= 1 *screenHeight, scrollY < 1.8*screenHeight) {
    res.style.bottom="100vh" // change to any height you want
    des.style.bottom="0vh"
    abt.style.bottom="-100vh"
    naviFooterTitle.style.top="-37.5em";
    hasResized = false;
  } else {
    res.style.bottom="100vh" // change to any height you want
    des.style.bottom="100vh"
    abt.style.bottom="0vh"
    naviFooterTitle.style.top="-57.5em";
    hasResized = false;
  }


});
    



};