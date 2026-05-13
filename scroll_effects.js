
window.onload = function () {

    console.log("Page is fully loaded!");


const navi = document.getElementById("navi");
const naviFooter = document.getElementById("naviFooter");
const naviFooterName = document.getElementById("naviFooterName");
const ss2 = document.getElementById("scrollScreen-2");
const naviFooterTitle = document.getElementById("naviFooterTitle");
const res  = document.querySelector(".contentSec1");
const des  = document.querySelector(".contentSec2");
const abt  = document.querySelector(".contentSec3");
const sec4 = document.querySelector(".contentSec4");
const sec5 = document.querySelector(".contentSec5");
const sec6 = document.querySelector(".contentSec6");

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
  if (!container) return;
  const firstItem = container.querySelector("#firstItem");
  if (!firstItem) return;
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

function setupCenterActiveCard(container) {
    if (!container) return;
    const wrappers = Array.from(container.querySelectorAll('.researchItemWrapper, .designItemWrapper'));
    function updateActive() {
        const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
        let closest = null, closestDist = Infinity;
        wrappers.forEach(w => {
            const r = w.getBoundingClientRect();
            const dist = Math.abs(r.left + r.width / 2 - containerCenter);
            if (dist < closestDist) { closestDist = dist; closest = w; }
        });
        wrappers.forEach(w => w.classList.toggle('active', w === closest));
    }
    container.addEventListener('scroll', updateActive);
    updateActive();
}
setupCenterActiveCard(researchWorks);
setupCenterActiveCard(designs);

let aboutCardVisible = false;
const aboutItemCard = document.getElementById("aboutItemCard");
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    aboutCardVisible = entry.isIntersecting;
    dotGrid.style.opacity = aboutCardVisible ? "1" : ".2";
  });
}, { threshold: 0.1 });
if (aboutItemCard) cardObserver.observe(aboutItemCard);




const collapseRange = 0.5 * window.innerHeight;
const collapsedPx = 3 * parseFloat(getComputedStyle(document.documentElement).fontSize);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  const progress = Math.max(0, Math.min(1, scrollY / collapseRange));
  navi.style.height = (screenHeight + (collapsedPx - screenHeight) * progress) + "px";

  if (progress >= 1) {
    naviFooter.style.height = "5vh";
    naviFooterTitle.style.top = "-17.5em";
    naviFooterName.style.top = "2em";
    ss2.style.bottom = "0vh";
  } else {
    naviFooter.style.height = "10vh";
    naviFooterTitle.style.top = "0";
    naviFooterName.style.top = "1em";
    ss2.style.bottom = "-95vh";
  }
  if (scrollY < 1*screenHeight) {
    if (res)  res.style.bottom="0vh";
    if (des)  des.style.bottom="-100vh";
    if (abt)  abt.style.bottom="-100vh";
    if (sec4) sec4.style.bottom="-100vh";
    if (sec5) sec5.style.bottom="-100vh";
    if (sec6) sec6.style.bottom="-100vh";
    dotGrid.style.opacity="1";
    setActiveNav("#res");

  } else if (scrollY >= 1*screenHeight && scrollY < 1.8*screenHeight) {
    if (res)  res.style.bottom="100vh";
    if (des)  des.style.bottom="0vh";
    if (abt)  abt.style.bottom="-100vh";
    if (sec4) sec4.style.bottom="-100vh";
    if (sec5) sec5.style.bottom="-100vh";
    if (sec6) sec6.style.bottom="-100vh";
    naviFooterTitle.style.top="-37.5em";
    dotGrid.style.opacity="1";
    setActiveNav("#des");

  } else if (scrollY >= 1.8*screenHeight && scrollY < 2.6*screenHeight) {
    if (res)  res.style.bottom="100vh";
    if (des)  des.style.bottom="100vh";
    if (abt)  abt.style.bottom="0vh";
    if (sec4) sec4.style.bottom="-100vh";
    if (sec5) sec5.style.bottom="-100vh";
    if (sec6) sec6.style.bottom="-100vh";
    naviFooterTitle.style.top="-57.5em";
    dotGrid.style.opacity = aboutCardVisible ? "1" : ".2";
    setActiveNav("#abt");

  } else if (scrollY >= 2.6*screenHeight && scrollY < 3.4*screenHeight) {
    if (res)  res.style.bottom="100vh";
    if (des)  des.style.bottom="100vh";
    if (abt)  abt.style.bottom="100vh";
    if (sec4) sec4.style.bottom="0vh";
    if (sec5) sec5.style.bottom="-100vh";
    if (sec6) sec6.style.bottom="-100vh";
    dotGrid.style.opacity="1";

  } else if (scrollY >= 3.4*screenHeight && scrollY < 4.2*screenHeight) {
    if (res)  res.style.bottom="100vh";
    if (des)  des.style.bottom="100vh";
    if (abt)  abt.style.bottom="100vh";
    if (sec4) sec4.style.bottom="100vh";
    if (sec5) sec5.style.bottom="0vh";
    if (sec6) sec6.style.bottom="-100vh";
    dotGrid.style.opacity="1";

  } else {
    if (res)  res.style.bottom="100vh";
    if (des)  des.style.bottom="100vh";
    if (abt)  abt.style.bottom="100vh";
    if (sec4) sec4.style.bottom="100vh";
    if (sec5) sec5.style.bottom="100vh";
    if (sec6) sec6.style.bottom="0vh";
    dotGrid.style.opacity="1";

  }


});
    



};