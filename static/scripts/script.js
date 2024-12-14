// Open menu
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("menuButton");
    var menu = document.getElementById("menu");

    // Toggle menu on button click
    button.addEventListener("click", function(event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();

        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            setTimeout(() => {
                menu.style.display = "none";
            }, 150);
        } else {
            menu.style.display = "block";
            setTimeout(() => {
                menu.classList.add("show");
            }, 10);
        }
    });

    // Hide menu when clicking outside of the menu and button
    document.addEventListener("click", function(event) {
        // Check if the click is outside the menu and button
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
                setTimeout(() => {
                    menu.style.display = "none";
                }, 150);
            }
        }
    });
});

// Slide Animation to the Left and to the Right

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('#swipe-to-left, #swipe-to-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once the animation starts
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});




// Make it so that the anchor hyperlinks place you at the top
document.addEventListener("DOMContentLoaded", function() {
    const offset = 60; // Adjust this value according to your needs

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// Mkae a shadow appeae to the header

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.classList.add('header-shadow');
    } else {
        header.classList.remove('header-shadow');
    }
});

