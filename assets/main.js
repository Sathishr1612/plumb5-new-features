const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('on'), i * 70);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .rl, .rr').forEach(el => obs.observe(el));

    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.bf').forEach(b => { b.style.width = b.dataset.w + '%'; });
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.cc').forEach(s => barObs.observe(s));

    setTimeout(() => document.getElementById('exitPopup').classList.add('show'), 20000);
    document.getElementById('exitPopup').addEventListener('click', function (e) {
      if (e.target === this) this.classList.remove('show');
    });



// PREMIUM PARALLAX WITH SMOOTH INTERPOLATION
const heroImg = document.querySelector('.hero-img');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

// Smooth follow settings
const ease = 0.08;
const movementRange = 25;

function animate() {
  // Smooth interpolation
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;
  
  // Apply transform with subtle rotation based on movement
  const rotateX = currentY * 0.05;
  const rotateY = currentX * 0.05;
  
  heroImg.style.transform = `
    translate(${currentX}px, ${currentY}px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
  
  requestAnimationFrame(animate);
}



const openBtn = document.getElementById("openModal");
const modal = document.getElementById("demoModal");
const closeBtn = document.getElementById("closeModal");

// open
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// close (X)
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});