const themeToggle = document.querySelector('.theme-toggle');

// Initialize theme based on localStorage or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    // Apply saved theme from localStorage
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else {
    // Apply system preference if no saved theme
    document.body.classList.toggle('dark', prefersDarkScheme);
    themeToggle.textContent = prefersDarkScheme ? '☀️' : '🌙';
    localStorage.setItem('theme', prefersDarkScheme ? 'dark' : 'light');
}

// Theme toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .about p, .connect .social-link, .pricing-form, .technical-details p').forEach(el => {
    observer.observe(el);
});

// Pricing calculator logic
const complexitySlider = document.getElementById('complexity');
const complexityValue = document.getElementById('complexity-value');
const landingRadios = document.querySelectorAll('input[name="landing"]');
const hostingCheckbox = document.getElementById('hosting');
const maintenanceCheckbox = document.getElementById('maintenance');
const seoCheckbox = document.getElementById('seo');
const totalCost = document.getElementById('total-cost');

function calculateCost() {
    const baseCost = 1000;
    const complexity = parseInt(complexitySlider.value);
    const complexityMultiplier = 1 + (complexity - 1) * 0.222; // Scales from 1x to 3x
    let cost = baseCost * complexityMultiplier;

    // Add landing page cost
    if (document.querySelector('input[name="landing"]:checked').value === 'yes') {
        cost += 1500;
    }

    // Add feature costs
    if (hostingCheckbox.checked) cost += 500;
    if (maintenanceCheckbox.checked) cost += 1000;
    if (seoCheckbox.checked) cost += 2000;

    // Update displayed cost
    totalCost.textContent = `$${cost.toLocaleString()}`;
}

// Update complexity value display
complexitySlider.addEventListener('input', () => {
    complexityValue.textContent = complexitySlider.value;
    calculateCost();
});

// Update cost on input changes
landingRadios.forEach(radio => radio.addEventListener('change', calculateCost));
hostingCheckbox.addEventListener('change', calculateCost);
maintenanceCheckbox.addEventListener('change', calculateCost);
seoCheckbox.addEventListener('change', calculateCost);

// Initial cost calculation
calculateCost();