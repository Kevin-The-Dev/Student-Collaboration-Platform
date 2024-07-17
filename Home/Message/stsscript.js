document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('message-container');
    const messageInput = document.getElementById('message-input');
    const fileInput = document.getElementById('file-input');
    const sendMessageButton = document.getElementById('send-message');
  
    sendMessageButton.addEventListener('click', function () {
      const message = messageInput.value.trim();
      if (message !== '') {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const messageDiv = createMessageDiv('You', message, currentTime);
        messageContainer.appendChild(messageDiv);
        messageInput.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    });
  
    fileInput.addEventListener('change', function () {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const image = e.target.result;
          const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const messageDiv = createImageMessageDiv('You', image, currentTime);
          messageContainer.appendChild(messageDiv);
          messageContainer.scrollTop = messageContainer.scrollHeight;
        };
        reader.readAsDataURL(file);
      }
    });
  
    function createMessageDiv(user, message, time) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.innerHTML = `
        <p><span class="user">${user}:</span> ${message}</p>
        <span class="time">${time}</span>
      `;
      return div;
    }
  
    function createImageMessageDiv(user, imageSrc, time) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.innerHTML = `
        <p><span class="user">${user}:</span></p>
        <img src="${imageSrc}" alt="Image" style="max-width: 100%;">
        <span class="time">${time}</span>
      `;
      return div;
    }
  });
  