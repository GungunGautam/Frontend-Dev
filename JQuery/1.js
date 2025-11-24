 $(document).ready(function() {
            // 1. Dynamic greeting based on time of day
            function setGreeting() {
                const hour = new Date().getHours();
                let greetingText = '';
                
                if (hour >= 5 && hour < 12) {
                    greetingText = 'Good Morning! ☀️';
                } else if (hour >= 12 && hour < 17) {
                    greetingText = 'Good Afternoon! 🌤️';
                } else {
                    greetingText = 'Good Evening! 🌙';
                }
                
                $('#greeting').text(greetingText);
            }
            
            // Set initial greeting on page load
            setGreeting();
            
            // 2. Change greeting to motivational quote
            const quotes = [
                'Believe you can and you\'re halfway there! 💪',
                'Success is not final, failure is not fatal! 🚀',
                'The only way to do great work is to love what you do! ❤️',
                'Dream big, work hard, stay focused! 🎯',
                'Every accomplishment starts with the decision to try! ✨'
            ];
            
            $('#changeGreeting').click(function() {
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                $('#greeting').text(randomQuote);
            });
            
            // 3. Toggle visibility of welcome message
            $('#toggleMessage').click(function() {
                $('#welcomeMessage').toggle();
            });
            
            // 4. Show alert when greeting is clicked
            $('#greeting').click(function() {
                alert('You clicked the greeting! Have a wonderful day! 😊');
            });
        });