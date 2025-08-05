const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');

// Translations object
const translations = {
    en: {
        'title': 'Shady Awad - MERN Stack Developer',
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-about': 'About',
        'nav-connect': 'Connect',
        'nav-pricing': 'Pricing',
        'nav-technical': 'Technical Details',
        'lang-toggle': 'العربية',
        'hero-title': 'Shady Awad',
        'hero-description': 'MERN Stack Developer crafting modern, scalable web applications with a passion for clean code and user-centric design.',
        'hero-cta': 'Get in Touch',
        'projects-title': 'Projects',
        'project-title': 'Project Name',
        'project-description': 'Project description goes here. Describe the technologies used, challenges overcome, and key features.',
        'project-cta': 'View Project',
        'about-title': 'About Me',
        'about-description-1': 'Hi, I\'m Shady Awad, a MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js. I specialize in building full-stack web applications that are both performant and visually appealing. My focus is on delivering seamless user experiences through clean, maintainable code.',
        'about-description-2': 'I enjoy tackling complex problems, optimizing performance, and staying updated with the latest web technologies. Let\'s build something amazing together!',
        'connect-title': 'Connect With Me',
        'connect-linkedin': 'LinkedIn',
        'connect-twitter': 'Twitter/X',
        'connect-github': 'GitHub',
        'pricing-title': 'Pricing Calculator',
        'pricing-complexity': 'Project Complexity (1 = Simple, 10 = Complex)',
        'pricing-landing': 'Include Landing Page?',
        'yes': 'Yes',
        'no': 'No',
        'pricing-features': 'Additional Features',
        'pricing-hosting': 'Hosting ($500/year)',
        'pricing-maintenance': 'Maintenance ($1,000/year)',
        'pricing-seo': 'SEO Optimization ($2,000)',
        'pricing-result': 'Estimated Cost',
        'technical-title': 'Technical Details',
        'technical-description-1': 'This portfolio website is built with vanilla JavaScript, CSS, and HTML for optimal performance. It detects the user\'s system color scheme via prefers-color-scheme on first load and includes a manual theme toggle that persists via localStorage.',
        'technical-description-2': 'The responsive, mobile-first design incorporates a green theme, subtle animations (fade-ins and scale effects) via Intersection Observer, an extensible project section (duplicate the project-card div), a connect section for social profiles (LinkedIn, Twitter/X, GitHub), a pricing calculator with a smooth slider and styled form and result boxes, and a language selector for English and Arabic with RTL support. No external frameworks ensure a lightweight, fast-loading site.',
        'footer': '© 2025 Shady Awad. All rights reserved.'
    },
    ar: {
        'title': 'شادي عوض - مطور ميرن ستاك',
        'nav-home': 'الرئيسية',
        'nav-projects': 'المشاريع',
        'nav-about': 'عني',
        'nav-connect': 'تواصل معي',
        'nav-pricing': 'التسعير',
        'nav-technical': 'التفاصيل التقنية',
        'lang-toggle': 'English',
        'hero-title': 'شادي عوض',
        'hero-description': 'مطور ميرن ستاك أصنع تطبيقات ويب حديثة وقابلة للتوسع مع شغف بالكود النظيف والتصميم المركز على المستخدم.',
        'hero-cta': 'تواصل معي',
        'projects-title': 'المشاريع',
        'project-title': 'اسم المشروع',
        'project-description': 'وصف المشروع يوضع هنا. صف التقنيات المستخدمة، التحديات التي تم التغلب عليها، والميزات الرئيسية.',
        'project-cta': 'عرض المشروع',
        'about-title': 'عني',
        'about-description-1': 'مرحبًا، أنا شادي عوض، مطور ميرن ستاك بخبرة في MongoDB وExpress.js وReact وNode.js. أتخصص في بناء تطبيقات ويب كاملة المكدس تكون عالية الأداء وجذابة بصريًا. تركيزي هو تقديم تجارب مستخدم سلسة من خلال كود نظيف وقابل للصيانة.',
        'about-description-2': 'أستمتع بحل المشكلات المعقدة، تحسين الأداء، والبقاء محدثًا بأحدث تقنيات الويب. دعنا نبني شيئًا مذهلاً معًا!',
        'connect-title': 'تواصل معي',
        'connect-linkedin': 'لينكدإن',
        'connect-twitter': 'تويتر/إكس',
        'connect-github': 'جيت هب',
        'pricing-title': 'حاسبة التسعير',
        'pricing-complexity': 'تعقيد المشروع (1 = بسيط، 10 = معقد)',
        'pricing-landing': 'هل تريد تضمين صفحة هبوط؟',
        'yes': 'نعم',
        'no': 'لا',
        'pricing-features': 'ميزات إضافية',
        'pricing-hosting': 'الاستضافة (500 دولار/سنة)',
        'pricing-maintenance': 'الصيانة (1000 دولار/سنة)',
        'pricing-seo': 'تحسين محركات البحث (2000 دولار)',
        'pricing-result': 'التكلفة المقدرة',
        'technical-title': 'التفاصيل التقنية',
        'technical-description-1': 'تم بناء موقع الأعمال هذا باستخدام جافاسكربت وCSS وHTML الأصلية لتحقيق الأداء الأمثل. يكتشف تفضيلات الألوان للنظام عبر prefers-color-scheme عند التحميل الأول ويتضمن زر تبديل الثيم يتم الاحتفاظ به عبر localStorage.',
        'technical-description-2': 'يتميز التصميم المتجاوب الموجّه للأجهزة المحمولة بثيم أخضر، وحركات خفيفة (تأثيرات الظهور والتكبير) عبر Intersection Observer، وقسم مشاريع قابل للتوسع (كرر div الخاص ببطاقة المشروع)، وقسم تواصل للملفات الاجتماعية (لينكدإن، تويتر/إكس، جيت هب)، وحاسبة تسعير مع شريط تمرير سلس وصندوق ونتائج مزخرفة، ومُحدد لغة للإنجليزية والعربية مع دعم RTL. عدم استخدام أطر عمل خارجية يضمن موقعًا خفيفًا وسريع التحميل.',
        'footer': '© 2025 شادي عوض. جميع الحقوق محفوظة.'
    }
};

// Initialize theme and language
const savedTheme = localStorage.getItem('theme');
const savedLanguage = localStorage.getItem('language') || 'en';
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    languageToggle.textContent = translations[lang]['lang-toggle'];
    localStorage.setItem('language', lang);
    // Force repaint to ensure RTL styles apply
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
}

if (savedTheme) {
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else {
    document.body.classList.toggle('dark', prefersDarkScheme);
    themeToggle.textContent = prefersDarkScheme ? '☀️' : '🌙';
    localStorage.setItem('theme', prefersDarkScheme ? 'dark' : 'light');
}

setLanguage(savedLanguage);

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Language toggle
languageToggle.addEventListener('click', () => {
    const newLang = document.documentElement.getAttribute('lang') === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
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