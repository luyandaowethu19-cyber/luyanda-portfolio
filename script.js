// Portfolio JavaScript

console.log("Luyanda Shozi's portfolio is running! 💜");


// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        if (section) {

            section.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Scroll reveal animation

const animatedElements = document.querySelectorAll(
    '.skill-category, .project-card, .about-card, .education-card'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});