document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === "light") {
        document.body.classList.add('light-mode');
    }

    const isLightMode = document.body.classList.contains('light-mode');
    document.getElementById('theme-toggle').innerHTML = isLightMode ? '<a><i class="fa-solid fa-moon"></i></a>' : '<a><i class="fa-solid fa-sun"></i></a>';
});
  
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    const isLightMode = document.body.classList.contains('light-mode');
    document.getElementById('theme-toggle').innerHTML = isLightMode ? '<a><i class="fa-solid fa-moon"></i></a>' : '<a><i class="fa-solid fa-sun"></i></a>';

    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});
  