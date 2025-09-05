

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Project slider
function moveSlide(listId, direction) {
  const container = document.getElementById(listId);
  const cardWidth = container.querySelector(".project-card").offsetWidth + 16;
  container.scrollLeft += direction * cardWidth;
}

// Modal image viewer
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = img.src;
}
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Testimonials slider
const track = document.querySelector(".testimonial-track");
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".testimonial-btn.prev");
const nextBtn = document.querySelector(".testimonial-btn.next");
let index = 0;

function showTestimonial(n) {
  index = (n + testimonials.length) % testimonials.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showTestimonial(index - 1));
nextBtn.addEventListener("click", () => showTestimonial(index + 1));

// Auto-slide every 5 seconds
setInterval(() => showTestimonial(index + 1), 5000);


function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

