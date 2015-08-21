// fix sidebar navigation transition problem
$(document).ready(function(){
    $('body').removeClass('notransition');
});

// Toggle group button checkbox Glyphicons
$(document).ready(function(){
  $("[type='checkbox']").on('change', function(){
      if($(this).prop('checked')) {
          $(this).prev()
                 .removeClass('glyphicon-unchecked')
                 .addClass('glyphicon-ok-circle');
      }else {
          $(this).prev()
              .removeClass('glyphicon-ok-circle')
              .addClass('glyphicon-unchecked');
      }
  });

    $('input:checked').prev()
        .removeClass('glyphicon-unchecked')
        .addClass('glyphicon-ok-circle');
    $('input:checked').parent()
        .addClass('active');
});


