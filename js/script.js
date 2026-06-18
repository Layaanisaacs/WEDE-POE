/* ================================
   MOBILE MENU TOGGLE
================================ */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ================================
   SMOOTH SCROLL FOR NAV LINKS
================================ */
const links = document.querySelectorAll("nav ul li a");

if (links) {
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.hash !== "" && document.querySelector(link.hash)) {
                e.preventDefault();
                const section = document.querySelector(link.hash);
                section.scrollIntoView({ behavior: "smooth" });

                if (navLinks) {
                    navLinks.classList.remove("active");
                }
            }
        });
    });
}

/* ================================
   CONTACT FORM VALIDATION
================================ */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let errors = [];

        if (email.value.trim() === "") {
            errors.push("Please enter your email.");
        } else if (!email.value.includes("@") || !email.value.includes(".")) {
            errors.push("Please enter a valid email address.");
        }

        if (message.value.trim() === "") {
            errors.push("Please enter a message.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Your message has been sent!");
        }
    });
}

/* ================================
   LIGHTBOX GALLERY
================================ */
const images = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (images && lightbox && lightboxImg && closeBtn) {
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

/* ================================
   ACCORDION
================================ */
const acc = document.querySelectorAll(".accordion-header");

if (acc) {
    acc.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            btn.nextElementSibling.classList.toggle("show");
        });
    });
}

/* ================================
   DYNAMIC SERVICES + SEARCH
================================ */
const services = [
    { name: "Facial Treatment", price: "R250" },
    { name: "Nail Art", price: "R180" },
    { name: "Hair Styling", price: "R300" }
];

function loadServices(filter = "") {
    const list = document.getElementById("service-list");
    if (!list) return;

    list.innerHTML = "";

    services
        .filter(s => s.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(s => {
            list.innerHTML += `<p><strong>${s.name}</strong> - ${s.price}</p>`;
        });
}

const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.addEventListener("input", e => {
        loadServices(e.target.value);
    });

    loadServices();
}

/* ================================
   ENQUIRY FORM (NEW PAGE)
================================ */
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        let price = "";
        if(service === "Facial") price = "R250";
        if(service === "Nails") price = "R180";
        if(service === "Hair") price = "R300";

        document.getElementById("response").innerText =
            `Thank you, ${name}! The ${service} service is available on ${date}. Estimated cost: ${price}.`;
    });
}

// ENQUIRY FORM HANDLER
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enquiryForm");
    const response = document.getElementById("response");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            response.innerHTML = "Thank you! Your enquiry has been submitted. 💗";
            response.style.color = "#cc0066";

            form.reset();
        });
    }
});
