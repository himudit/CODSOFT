// scripts.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust based on the height of your nav
            behavior: 'smooth'
        });
    });
});


const navButtons = document.querySelectorAll('.nav-button');
const contentContainers = document.querySelectorAll('.content-container');

navButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        // Hide all content sections
        contentContainers.forEach(container => container.classList.add('hidden'));

        // Show the content section corresponding to the clicked button
        const contentId = this.dataset.content;
        document.getElementById(contentId).classList.remove('hidden');
    });
});


