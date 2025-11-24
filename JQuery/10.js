  $(document).ready(function() {
            var registeredEmails = ['test@example.com', 'user@example.com'];
            
            $('#registrationForm').submit(function(e) {
                e.preventDefault();
                
                var isValid = true;
                var errorMessages = [];
                
                // Remove previous error styling
                $('input').removeClass('error');
                
                // 1. Check Name field - not empty
                var name = $('#name').val().trim();
                if (name === '') {
                    $('#name').addClass('error');
                    errorMessages.push('Name is required');
                    isValid = false;
                }
                
                // 2. Check Email field - valid format and uniqueness
                var email = $('#email').val().trim();
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (email === '') {
                    $('#email').addClass('error');
                    errorMessages.push('Email is required');
                    isValid = false;
                } else if (!emailRegex.test(email)) {
                    $('#email').addClass('error');
                    errorMessages.push('Invalid email format');
                    isValid = false;
                } else if (registeredEmails.indexOf(email) !== -1) {
                    $('#email').addClass('error');
                    errorMessages.push('Email already registered');
                    isValid = false;
                }
                
                // 3. Check Password - minimum 8 characters
                var password = $('#password').val();
                if (password.length < 8) {
                    $('#password').addClass('error');
                    errorMessages.push('Password must be at least 8 characters');
                    isValid = false;
                }
                
                // 4. Show success message if all valid
                // 5. Highlight invalid fields with red border using .css()
                if (isValid) {
                    $('#message')
                        .removeClass('error-msg')
                        .addClass('success')
                        .text('✓ Registration successful!')
                        .fadeIn();
                    
                    // Add email to registered list
                    registeredEmails.push(email);
                    
                    // Reset form
                    $('#registrationForm')[0].reset();
                } else {
                    $('#message')
                        .removeClass('success')
                        .addClass('error-msg')
                        .html('✗ Validation failed:<br>' + errorMessages.join('<br>'))
                        .fadeIn();
                    
                    // Additional styling for invalid fields
                    $('.error').css({
                        'border-color': 'red',
                        'background-color': '#ffe6e6'
                    });
                }
            });
            
            // Remove error styling on input
            $('input').on('input', function() {
                $(this).removeClass('error').css({
                    'border-color': '#ccc',
                    'background-color': 'white'
                });
            });
        });