// Function to handle the scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove if you only want it to animate once
            entry.target.classList.remove('show');
        }
    });
});

// Select all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Mouse movement effect on the Hero title
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('h1');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    title.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
