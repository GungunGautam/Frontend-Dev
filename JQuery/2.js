
        $(document).ready(function() {
            // 1. Click to highlight
            $('.product').click(function() {
                $(this).toggleClass('highlighted');
            });
            
            // 2. Hover to show details
            $('.product').hover(
                function() { $(this).find('.details').show(); },
                function() { $(this).find('.details').hide(); }
            );
            
            // 3. Favorite toggle
            $('.favorite').click(function(e) {
                e.stopPropagation();
                $(this).closest('.product').toggleClass('selected');
                $(this).text($(this).text() === '♡' ? '♥' : '♡');
            });
            
            // 4. Style products with discount using attribute selector
            $('[data-discount="true"]').css('font-weight', 'bold');
            
            // 5. Alert if out of stock
            $('.product').click(function() {
                if ($(this).attr('data-stock') === 'out') {
                    alert('This product is out of stock!');
                }
            });
        });
    