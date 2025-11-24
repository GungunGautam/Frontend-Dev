
        $(document).ready(function() {
            // 1. Click manager to highlight direct reports
            $('.manager').click(function() {
                var managerName = $(this).text().split(' ')[0];
                $('.employee').removeClass('highlight');
                $('.employee[data-manager="' + managerName + '"]').addClass('highlight');
            });
            
            // 2. Hover to show contact info using .next()
            $('.employee').hover(
                function() { $(this).next('.contact').show(); },
                function() { $(this).next('.contact').hide(); }
            );
            
            // 3. Click department to change background using .children()
            $('.department').click(function() {
                $(this).children('.employee').css('background', 'lightgreen');
            });
            
            // 4. Random employee highlights siblings
            $('#randomEmployee').click(function() {
                var employees = $('.employee');
                var randomEmp = $(employees[Math.floor(Math.random() * employees.length)]);
                $('.employee').removeClass('highlight');
                randomEmp.siblings('.employee').addClass('highlight');
            });
            
            // 5. Collapse/expand using .parent() and .find()
            $('#collapseTeam').click(function() {
                $('.department').find('.employee, .contact').toggle();
            });
        });
    