 $(document).ready(function() {
            var postCount = 4;
            
            // 1. Add new post using .append()
            $('#addPost').click(function() {
                var newPost = $('<div class="post">New Blog Post ' + postCount + '</div>');
                $('#posts').append(newPost);
                postCount++;
            });
            
            // 2. Prepend featured post using .prepend()
            $('#prependPost').click(function() {
                var featuredPost = $('<div class="post" style="border-color: gold;">⭐ Featured Post ' + postCount + '</div>');
                $('#posts').prepend(featuredPost);
                postCount++;
            });
            
            // 3. Remove last post using .remove()
            $('#removePost').click(function() {
                $('.post').last().remove();
            });
            
            // 4. Add tags using .before() and .after()
            $('.post').each(function() {
                $(this).before('<span class="tag">Tag</span>');
                $(this).after('<span class="tag">New</span>');
            });
            
            // 5. Highlight posts with specific keywords
            $('#highlightKeyword').click(function() {
                $('.post').each(function() {
                    if ($(this).text().toLowerCase().indexOf('jquery') !== -1) {
                        $(this).addClass('highlight');
                    }
                });
            });
        });