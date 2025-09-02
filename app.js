// Demo section interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get demo buttons
    const viewBothBtn = document.getElementById('viewBothBtn');
    const humanOnlyBtn = document.getElementById('humanOnlyBtn');
    const dogOnlyBtn = document.getElementById('dogOnlyBtn');
    
    // Get all demo elements
    const humanVisionElements = document.querySelectorAll('.human-vision');
    const dogVisionElements = document.querySelectorAll('.dog-vision');
    
    // Set initial state
    let currentView = 'both';
    
    // Button click handlers
    viewBothBtn.addEventListener('click', function() {
        currentView = 'both';
        updateView();
        updateButtons();
    });
    
    humanOnlyBtn.addEventListener('click', function() {
        currentView = 'human';
        updateView();
        updateButtons();
    });
    
    dogOnlyBtn.addEventListener('click', function() {
        currentView = 'dog';
        updateView();
        updateButtons();
    });
    
    // Update view function
    function updateView() {
        switch(currentView) {
            case 'both':
                humanVisionElements.forEach(el => {
                    el.style.display = 'block';
                    el.style.opacity = '1';
                });
                dogVisionElements.forEach(el => {
                    el.style.display = 'block';
                    el.style.opacity = '1';
                });
                break;
            case 'human':
                humanVisionElements.forEach(el => {
                    el.style.display = 'block';
                    el.style.opacity = '1';
                });
                dogVisionElements.forEach(el => {
                    el.style.display = 'none';
                    el.style.opacity = '0';
                });
                break;
            case 'dog':
                humanVisionElements.forEach(el => {
                    el.style.display = 'none';
                    el.style.opacity = '0';
                });
                dogVisionElements.forEach(el => {
                    el.style.display = 'block';
                    el.style.opacity = '1';
                });
                break;
        }
    }
    
    // Update buttons appearance
    function updateButtons() {
        // Reset all buttons
        [viewBothBtn, humanOnlyBtn, dogOnlyBtn].forEach(btn => {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-600');
        });
        
        // Highlight active button
        switch(currentView) {
            case 'both':
                viewBothBtn.classList.remove('bg-gray-100', 'text-gray-600');
                viewBothBtn.classList.add('bg-blue-500', 'text-white');
                break;
            case 'human':
                humanOnlyBtn.classList.remove('bg-gray-100', 'text-gray-600');
                humanOnlyBtn.classList.add('bg-green-500', 'text-white');
                break;
            case 'dog':
                dogOnlyBtn.classList.remove('bg-gray-100', 'text-gray-600');
                dogOnlyBtn.classList.add('bg-blue-500', 'text-white');
                break;
        }
    }
    
    // Add smooth transitions
    [...humanVisionElements, ...dogVisionElements].forEach(el => {
        el.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect for header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.8)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });
    }
});

// Enhanced animation for demo cards
document.addEventListener('DOMContentLoaded', function() {
    const demoCards = document.querySelectorAll('.human-vision, .dog-vision');
    
    // Add hover effects
    demoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
        });
        
        // Add transition
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Add fade-in animation for demo section when it comes into view
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const demoExamples = document.querySelectorAll('.demo-example');
    demoExamples.forEach(example => {
        example.style.opacity = '0';
        example.style.transform = 'translateY(30px)';
        example.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(example);
    });
});