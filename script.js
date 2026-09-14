// ===============================
// ZAKS PASTRIES — SCRIPT
// ===============================

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });

  // Close menu when a navigation link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.classList.remove("active");
    });
  });
}


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


// ===============================
// WhatsApp Quick Order
// ===============================

const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
      document.getElementById("customerName")?.value.trim() || "";

    const orderType =
      document.getElementById("orderType")?.value.trim() || "";

    const orderNote =
      document.getElementById("orderNote")?.value.trim() || "";

    if (!customerName || !orderType) {
      alert("Please enter your name and select what you would like to order.");
      return;
    }

    const message =
      `Hello Zaks Pastries 👋\n\n` +
      `My name is ${customerName}.\n` +
      `I would like to make an enquiry about: ${orderType}.\n\n` +
      `${orderNote ? `Additional details: ${orderNote}\n\n` : ""}` +
      `Please let me know the available options and prices. Thank you.`;

    const whatsappNumber = "2348105459910";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
    }
