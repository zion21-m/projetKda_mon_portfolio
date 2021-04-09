$('.ui.dropdown')
   .dropdown();

// $('.ui.labeled.icon.sidebar')
// .sidebar('toggle');

$('.ui.sidebar').sidebar({
   context: $('.bottom.segment')
 })
 .sidebar('attach events', '.menu .item');
// $('.ui.menu .ui.dropdown').dropdown({
//    on: 'hover'
//    });
//    $('.ui.menu a.item').on('click', function() {   
//    $(this)
//       .addClass('active')
//       .siblings()
//       .removeClass('active'); 
//    })