document.addEventListener("DOMContentLoaded", function() {
    const fadeInSection = document.querySelectorAll('.fade-in-section');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1,
    });

    fadeInSection.forEach(section => {
        sectionObserver.observe(section);
    });
});
