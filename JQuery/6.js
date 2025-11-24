 $(document).ready(function() {
            // 1. Subscribe - enable notifications
            $('#subscribe').click(function() {
                $('.topic').addClass('subscribed');
                $('#message').text('✓ Subscribed to all topics!').show();
            });
            
            // 2. Unsubscribe - disable notifications
            $('#unsubscribe').click(function() {
                $('.topic').removeClass('subscribed');
                $('#message').text('✗ Unsubscribed from all topics!').show();
            });
            
            // 3. Dynamically add new topic with .on() click events
            var topicCount = 3;
            $('#addTopic').click(function() {
                var newTopic = $('<div class="topic">New Topic ' + topicCount + '</div>');
                $('#topics').append(newTopic);
                topicCount++;
            });
            
            // Use event delegation for dynamically added topics
            $('#topics').on('click', '.topic', function() {
                $(this).toggleClass('subscribed');
                $('#message').text('✓ Subscription toggled!').show();
            });
            
            // 4. Remove specific subscription using .off()
            $('#removeTopic').click(function() {
                $('.topic').last().off('click').remove();
                $('#message').text('Topic removed!').show();
            });
            
            // 5. Success message dynamically inserted
            setTimeout(function() {
                $('#message').fadeOut();
            }, 3000);
        });