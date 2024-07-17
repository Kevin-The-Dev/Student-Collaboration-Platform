// script.js
document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder');
  
    folders.forEach(folder => {
      folder.addEventListener('click', function () {
        folder.classList.toggle('open');
      });
    });
  });
  