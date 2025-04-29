document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerHTML = isDarkMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});
  
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerHTML = isDarkMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
  