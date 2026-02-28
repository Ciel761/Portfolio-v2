
window.onload = function () {

    console.log("Page is fully loaded!");

    const dotGrid = document.querySelector(".dot-grid");
    const cols = 40;
    const cellSize = 40;
    const gap = 10;
    const padding = 20;
    const availableHeight = dotGrid.clientHeight - padding * 2;
    const rows = Math.max(1, Math.floor((availableHeight + gap) / (cellSize + gap)));
    for (let i = 0; i < cols * rows; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dotGrid.appendChild(dot);
    }

const navi = document.getElementById("navi");
const naviFooter = document.getElementById("naviFooter");
const naviFooterName = document.getElementById("naviFooterName");
const ss2 = document.getElementById("scrollScreen-2");
const naviFooterTitle = document.getElementById("naviFooterTitle");
const res = document.getElementById("research");
const des = document.getElementById("design");
const abt = document.getElementById("about");

const scrollTargets = {
  hme: 0,
  res: 0.5 * window.innerHeight,
  des: 1.0 * window.innerHeight,
  abt: 1.8 * window.innerHeight,
};

const leftNavLinks = document.querySelectorAll("#scrollScreen-2 #list-of-content a");

function setActiveNav(sectionHref) {
  leftNavLinks.forEach(a => {
    if (a.getAttribute("href") === sectionHref) {
      a.classList.add("active-nav");
    } else {
      a.classList.remove("active-nav");
    }
  });
}

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href").slice(1);
    if (id in scrollTargets) {
      e.preventDefault();
      window.scrollTo({ top: scrollTargets[id], behavior: "smooth" });
    }
  });
});


const researchWorks = document.getElementById("researchWorks");
const designs = document.getElementById("designs");
const aboutItems = document.getElementById("aboutItems");
const listOfContent = document.querySelector("#scrollScreen-2 #list-of-content");


function setupOverlapListener(container) {
  const firstItem = container.querySelector("#firstItem");
  container.addEventListener("scroll", () => {
  const navRect = listOfContent.getBoundingClientRect();
  const itemRect = firstItem.getBoundingClientRect();
  const overlapping = itemRect.left < navRect.right;
  listOfContent.style.transform = overlapping ? "translateY(-12vh)" : "translateY(0)";
  listOfContent.classList.toggle("compressed", overlapping);
});
}
setupOverlapListener(researchWorks);
setupOverlapListener(designs);
setupOverlapListener(aboutItems);




window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  if (scrollY < 0.4*screenHeight) {
    navi.style.height = "100vh"; 
    naviFooter.style.height = "10vh";
    ss2.style.bottom="-95vh";// reset to original height
    naviFooterTitle.style.top="0";
    naviFooterName.style.top="1.5em";

  } else if (scrollY >= 0.4*screenHeight) {
    navi.style.height = "3em";
    naviFooter.style.height = "5vh";
    ss2.style.bottom="0vh"; // change to any height you want
    naviFooterTitle.style.top="-17.5em";
    naviFooterName.style.top="2.5em"

  }
  if (scrollY < 1 *screenHeight) {
    res.style.bottom="0vh"
    des.style.bottom="-100vh"
    abt.style.bottom="-100vh"
    dotGrid.style.opacity="1";

  } else if (scrollY >= 1 *screenHeight, scrollY < 1.8*screenHeight) {
    res.style.bottom="100vh"
    des.style.bottom="0vh"
    abt.style.bottom="-100vh"
    naviFooterTitle.style.top="-37.5em";
    dotGrid.style.opacity="1";

  } else {
    res.style.bottom="100vh"
    des.style.bottom="100vh"
    abt.style.bottom="0vh"
    naviFooterTitle.style.top="-57.5em";
    dotGrid.style.opacity=".2";

  }


});
    



};