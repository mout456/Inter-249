// statistic counter
let counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {
    let target = Number(counter.dataset.target);
    let count = 0;

    let interval = setInterval(function() {
        count++;
        counter.innerHTML = count + "+";

        if (count == target) {
            clearInterval(interval);
        }
    }, 15);
});
// testimonials slideshow

let cards = document.querySelectorAll(".testimonial-card");
let index = 0;
function showTestimonials() {

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active");
    }

    cards[index].classList.add("active");

    index++;
    if (index == cards.length) {
        index = 0;
    }
}
showTestimonials();
setInterval(showTestimonials, 3000);

// hamburger response
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
 
    if (hamburger && navContainer) {
        hamburger.addEventListener("click", function () {
            navContainer.classList.toggle("nav-open");
            hamburger.classList.toggle("active");
        });
         document.querySelectorAll(".nav-container a").forEach(function (link) {
            link.addEventListener("click", function () {
                navContainer.classList.remove("nav-open");
                hamburger.classList.remove("active");
            });
        });
    }

// theme
const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀";
    }else{
        themeBtn.innerHTML="🌙";
    }

};
//contact form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        const email = document.getElementById("email-address").value;
        if (!email.includes("@")) {
            alert("Enter a valid email");
            e.preventDefault();
        }
    });
}

//progress 
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";
});