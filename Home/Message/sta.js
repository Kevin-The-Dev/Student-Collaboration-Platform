document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('message-container');
    const messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message');
  
    // Start the conversation when the DOM content is loaded
    startConversation();
  
    // Enable Enter key to send messages
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    // Send message when the send button is clicked
    sendMessageButton.addEventListener('click', sendMessage);
  
    // Automatically start conversation
    function startConversation() {
      // Simulate student's message
      const studentMessage = "I'm interested in AI and ML. Can you help me understand the basics?";
      displayMessage('Student', studentMessage);
  
      // Simulate alumni's reply
      setTimeout(() => {
        simulateAlumniReply(studentMessage);
      }, 1000);
    }
  
    // Simulate alumni's reply with multiple responses
    function simulateAlumniReply(studentMessage) {
      // Simulate multiple replies to create an interactive conversation
      const replies = [
        'Hey there! Thanks for reaching out about AI and ML. What specifically would you like to know?',
        'Sure, I can help explain AI and ML to you. Are you interested in the basics or more advanced concepts?',
        'Hello! AI and ML are fascinating topics. Let\'s start with the basics. What questions do you have?',
        'Of course! AI and ML are transforming industries worldwide. What aspects of AI and ML are you curious about?'
      ];
  
      for (let i = 0; i < replies.length; i++) {
        setTimeout(() => {
          displayMessage('Alumni', replies[i]);
        }, i * 2000);
      }
  
      // Simulate detailed explanation based on student's question
      setTimeout(() => {
        const detailedExplanation = generateExplanation(studentMessage);
        displayMessage('Alumni', detailedExplanation);
      }, replies.length * 2000);
    }
  
    // Generate detailed explanation based on student's question
    function generateExplanation(question) {
      const explanations = {
        'What is AI?': 'AI, or Artificial Intelligence, refers to the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, problem-solving, perception, and decision-making.',
        'How does ML work?': 'ML, or Machine Learning, is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It uses algorithms to analyze data, learn from it, and make predictions or decisions based on the learned patterns.',
        'What are some applications of AI and ML?': 'AI and ML have numerous applications across various industries, including healthcare (diagnosis and treatment prediction), finance (fraud detection and risk assessment), marketing (personalized recommendations), autonomous vehicles, virtual assistants, and more.'
      };
  
      // Search for matching question in explanations object
      for (const key in explanations) {
        if (question.includes(key)) {
          return explanations[key];
        }
      }
  
      // Return a generic response if no match is found
      return 'AI and ML are vast fields with many aspects to explore. Feel free to ask more specific questions, and I\'ll do my best to provide detailed explanations!';
    }
  
    // Function to send a message
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        displayMessage('Student', message);
        simulateAlumniReply(message);
        messageInput.value = ''; // Clear input after sending message
      }
    }
  
    // Function to display a message in the message container
    function displayMessage(user, message) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const messageDiv = createMessageDiv(user, message, currentTime);
      messageContainer.appendChild(messageDiv);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  
    // Function to create a message div
    function createMessageDiv(user, message, time) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.innerHTML = `
        <p><span class="user">${user}:</span> ${message}</p>
        <span class="time">${time}</span>
      `;
      return div;
    }
  });
  