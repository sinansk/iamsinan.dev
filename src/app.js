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
const asideNav = document.querySelector(".hamburger-menu");
const asideLinks = asideNav.querySelectorAll("a");
const hamburgerInput = document.querySelector(".menu-btn");

function closeAside() {
  hamburgerInput.checked = false;
}

asideLinks.forEach(link => link.addEventListener("click", closeAside))

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



