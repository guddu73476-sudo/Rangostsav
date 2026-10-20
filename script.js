
/* =========================================
   RANGOTSAV - DUSSEHRA MELA
   Interactive JavaScript
========================================= */

// 1. FESTIVAL SETTINGS
// Change this date and time to match your actual event.
// Format: YYYY-MM-DDTHH:MM:SS+05:30 (Indian Standard Time).

const FESTIVAL_DATE = "2026-10-20T18:00:00+05:30";

const eventDate = new Date(FESTIVAL_DATE);
const countdownNote = document.getElementById("countdownNote");

const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

// 2. LIVE COUNTDOWN

function updateCountdown() {
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (Number.isNaN(eventDate.getTime())) {
    countdownNote.textContent = "Please set a valid festival date.";
    return;
  }

  if (difference <= 0) {
    Object.values(countdownElements).forEach(element => {
      element.textContent = "00";
    });

    countdownNote.textContent =
      "The countdown has ended! Happy Dussehra ✨";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  countdownElements.days.textContent = String(days).padStart(2, "0");
  countdownElements.hours.textContent = String(hours).padStart(2, "0");
  countdownElements.minutes.textContent = String(minutes).padStart(2, "0");
  countdownElements.seconds.textContent = String(seconds).padStart(2, "0");

  countdownNote.textContent = "The celebration is calling ✨";
}

updateCountdown();
setInterval(updateCountdown, 1000);


// 3. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }
});


// 4. EVENT CATEGORY FILTERS

const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    // Update the active button.
    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    // Show matching cards.
    eventCards.forEach(card => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;

      if (matches) {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
      }
    });
  });
});


// 5. IMAGE GALLERY LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryItems = document.querySelectorAll(".gallery-item");

let previousFocus = null;

function openLightbox(imageUrl, altText) {
  previousFocus = document.activeElement;

  lightboxImage.src = imageUrl;
  lightboxImage.alt = altText || "Festival gallery image";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";

  lightboxClose.focus();
}

function closeLightbox() {
  if (lightbox.hidden) return;

  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";

  if (previousFocus) {
    previousFocus.focus();
  }
}

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const imageUrl = item.dataset.image;
    const altText = item.querySelector("img").alt;

    openLightbox(imageUrl, altText);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});


// 6. VISIT PLANNER FORM
// This is a local demo, not a real booking system.

const visitForm = document.getElementById("visitForm");
const formMessage = document.getElementById("formMessage");
const visitorDate = document.getElementById("visitorDate");

const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

visitorDate.min = localToday;

visitForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!visitForm.reportValidity()) {
    return;
  }

  const name = document.getElementById("visitorName").value.trim();
  const dateValue = visitorDate.value;
  const group = document.getElementById("visitorGroup").value;

  if (!name || !dateValue || !group) {
    formMessage.textContent = "Please complete all required fields.";
    return;
  }

  const selectedDate = new Date(dateValue + "T12:00:00");

  const formattedDate = selectedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  formMessage.textContent =
    `Your visit plan is ready, ${name}! ` +
    `You selected ${formattedDate} with ${group.toLowerCase()}. ` +
    `This is a demo plan, not a booking confirmation.`;

  formMessage.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});


// 7. BACK-TO-TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// 8. CURRENT YEAR IN FOOTER

document.getElementById("year").textContent =
  new Date().getFullYear();


// 9. ACTIVE NAVIGATION LINK

const pageSections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      navigationLinks.forEach(link => {
        const isActive =
          link.getAttribute("href") === "#" + entry.target.id;

        link.classList.toggle("active", isActive);
      });
    });
  }, {
    rootMargin: "-25% 0px -60% 0px"
  });

  pageSections.forEach(section => {
    sectionObserver.observe(section);
  });
}
