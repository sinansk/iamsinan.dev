/**HEADING ANIMATION***/

const typing = document.querySelector(".typing");
const texts = ['Jr. Frontend Developer', 'Mechanical Engineer', 'lifelong learner'];
let word = 0; 
let letterIndex = 0; 
let currentText = ''; 
let letter = ''; 

(function type() {

  if (word == texts.length) {
    word = 0;
  }
 
  currentText = texts[word];
  letter = currentText.slice(0, ++letterIndex);
  typing.textContent = letter;

  if (letter.length == currentText.length) {
    word++;
    letterIndex = 0;
  }
  
  setTimeout(type, 300);
})();

// CLOSE ASIDE NAV
const asideNav = document.querySelector("#aside-nav");
const asideIcon = document.querySelector(".hamburger-menu");
const hamburgerInput = document.querySelector(".menu-btn");

window.onclick = ({ target }) => {
  if (
    !(target === asideNav || target === asideIcon || target === hamburgerInput)
  ) hamburgerInput.checked = false;
};


/**SHOW SCROLL BUTTON**/
const scrollBtn = document.querySelector(".scroll-btn");

function showScroll() {
    
    if (document.documentElement.scrollTop > 150) {
        console.log(document.body.scrollTop);
        console.log(document.documentElement.scrollTop);
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
/**SCROLL TO TOP**/

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

scrollBtn.addEventListener("click", backToTop);
window.onscroll = function() {showScroll()};

/*DARK MODE */

let lightMode = localStorage.getItem("light-mode")
const darkBtn = document.querySelector(".darkbtn");
const body = document.getElementById("body");
const modeCheckBox = document.getElementById("mode-checkbox");

const enableLightMode = () => {
  body.classList.add("light")
  localStorage.setItem("light-mode", "enabled");
};

const disableLightMode = () => {
  body.classList.remove("light")
  localStorage.setItem("light-mode", "disabled");
};

if (lightMode === "enabled") {
  enableLightMode();
  modeCheckBox.checked = true;
  console.log(modeCheckBox);
};

darkBtn.addEventListener("input", (e)=> {
  let lightMode = localStorage.getItem("light-mode");
  console.log(e.target);
  if (lightMode !== "enabled" && e.target.checked === true) {
      enableLightMode();
  } else {
      disableLightMode();
  }
});

//////////////////////
//HIDING HALF LENGHT BORDERS AROUND PROJECTS, ON SAFARI. BC IT'S DISPLAYING LIKE SQARE//////////
const borders = document.querySelectorAll(".project-container");

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  borders.forEach(border => border.style.setProperty("--hide", "none"));
}