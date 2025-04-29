document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerHTML = isDarkMode ? '<a><i class="fa-solid fa-moon"></i></a>' : '<a><i class="fa-solid fa-sun"></i></a>';
});
  
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerHTML = isDarkMode ? '<a><i class="fa-solid fa-moon"></i></a>' : '<a><i class="fa-solid fa-sun"></i></a>';

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
  