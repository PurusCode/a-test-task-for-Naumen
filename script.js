// Анимация плавного скролла для навигации
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 120,
            behavior: 'smooth'
        });
    });
});

// Кнопка "Наверх"
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Инициализация Mermaid для диаграмм
mermaid.initialize({ 
    startOnLoad: true, 
    theme: 'default',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
    },
    themeVariables: {
        fontSize: '14px',
        primaryColor: '#fff',
        primaryBorderColor: '#4361ee',
        primaryTextColor: '#333',
        lineColor: '#4361ee',
    }
});
