
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1E90FF',
                        secondary: '#121212'
                    },
                    borderRadius: {
                        'none': '0px',
                        'sm': '4px',
                        DEFAULT: '8px',
                        'md': '12px',
                        'lg': '16px',
                        'xl': '20px',
                        '2xl': '24px',
                        '3xl': '32px',
                        'full': '9999px',
                        'button': '8px'
                    }
                }
            }
        }
 // Get references to the hamburger and nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.getElementById('navbar'); // Get the navbar itself

// Add an event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on both the hamburger and the nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Optional: Add/remove a class to the body to prevent scrolling when nav is open
    // document.body.classList.toggle('no-scroll');

    // Optional: Adjust navbar background or styling when active
    // If you want the navbar background to change when the menu is open,
    // you might add/remove a class here
    // navBar.classList.toggle('menu-open');
});

// Optional: Close the navbar when a link is clicked (useful for single-page apps)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        // document.body.classList.remove('no-scroll'); // Remove no-scroll if applied
        // navBar.classList.remove('menu-open'); // Remove menu-open if applied
    });
});