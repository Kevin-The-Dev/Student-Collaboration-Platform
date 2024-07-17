document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('message-container');
  
    // Start the interactive conversation when the DOM content is loaded
    startConversation();
  
    function startConversation() {
      // Messages between student and teacher
      const conversation = [
        { user: 'Student', message: 'Hi teacher ! I have a question about inheritance in Java.', delay: 1000 },
        { user: 'Ami', message: 'Sure, go ahead! What specifically would you like to know about inheritance in Java?' },
        { user: 'Student', message: 'How does inheritance work in Java, and what are its benefits?' },
        { user: 'Ami', message: 'In Java, inheritance allows a class to inherit properties and behaviors from another class. It promotes code reusability and allows for the creation of hierarchical relationships between classes.' },
        { user: 'Student', message: 'That makes sense! Can you give me an example of inheritance in Java?' },
        { user: 'Ami', message: 'Of course! Let\'s consider a scenario where we have a superclass called "Vehicle" with properties like "color" and "speed." We can then have subclasses like "Car" and "Motorcycle" that inherit from the "Vehicle" class and add their own unique properties and behaviors.' },
        { user: 'Student', message: 'Ah, I see! So, if a "Car" class inherits from the "Vehicle" class, it will automatically have access to the "color" and "speed" properties?' },
        { user: 'Ami', message: 'Exactly! In addition to inheriting properties, subclasses can also override methods from the superclass to provide their own implementation.' },
        { user: 'Student', message: 'That\'s really helpful! Can you explain the concept of method overriding with an example?' },
        { user: 'Ami', message: 'Certainly! Let\'s say the "Vehicle" class has a method called "startEngine()." We can override this method in the "Car" class to provide specific behavior for starting a car\'s engine.' },
        { user: 'Student', message: 'Got it! So, if I create a new instance of the "Car" class and call the "startEngine()" method, it will execute the overridden method from the "Car" class?' },
        { user: 'Ami', message: 'Precisely! Inheritance and method overriding are powerful features of Java that allow for flexible and modular code design.' },
        { user: 'Student', message: 'Thank you so much for clarifying that, Ami! I feel much more confident about using inheritance in Java now.' },
        { user: 'Ami', message: 'You\'re welcome! Don\'t hesitate to reach out if you have any more questions or need further clarification on any topic.' },
      ];
  
      // Display each message in the conversation with delay
      conversation.forEach((msg, index) => {
        setTimeout(() => {
          displayMessage(msg.user, msg.message);
        }, msg.delay || index * 2000);
      });
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
  