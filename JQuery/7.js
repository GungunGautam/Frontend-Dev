 $(document).ready(function() {
            // 1. Real-time filter using .keyup()
            $('#searchInput').keyup(function() {
                var searchText = $(this).val().toLowerCase();
                var matchCount = 0;
                
                $('.course').each(function() {
                    var courseText = $(this).text().toLowerCase();
                    
                    if (courseText.indexOf(searchText) !== -1) {
                        $(this).show();
                        
                        // 2. Highlight matched text using .css()
                        if (searchText !== '') {
                            $(this).addClass('highlight');
                        } else {
                            $(this).removeClass('highlight');
                        }
                        matchCount++;
                    } else {
                        // 3. Toggle visibility of non-matching courses
                        $(this).hide();
                    }
                });
                
                // 4. Show count of matched courses
                $('#matchCount').text('Found ' + matchCount + ' course(s)');
            });
            
            // 5. Clear search - reset list
            $('#clearSearch').click(function() {
                $('#searchInput').val('');
                $('.course').show().removeClass('highlight');
                $('#matchCount').text('');
            });
        });