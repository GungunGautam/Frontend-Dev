
        $(document).ready(function() {
            // 1. Toggle answer visibility
            $('.question').click(function() {
                $(this).next('.answer').slideToggle();
            });
            
            // 2. Hover color change
            $('.question').hover(
                function() { $(this).css('color', 'blue'); },
                function() { $(this).css('color', 'black'); }
            );
            
            // 3. Double-click to collapse all
            $('.question').dblclick(function() {
                $('.answer').slideUp();
            });
            
            // 4. Focus on input highlights question
            $('.answer-input').focus(function() {
                $(this).closest('.faq-item').find('.question').addClass('highlight');
            });
            
            // 5. Blur resets background
            $('.answer-input').blur(function() {
                $(this).closest('.faq-item').find('.question').removeClass('highlight');
            });
        });
    