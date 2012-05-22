(function() {

  jQuery(function() {
    $('.heaven .row:not(:last) .bead, .earth .row:not(:first) .bead').addClass('active');
    $('.total').text(0);
    return $(".bead").bind('click', function(e) {
      var col, parent, total;
      col = $(this).data('col');
      parent = $(this).parents('div');
      parent.find(".bead[data-col=" + col + "]").addClass('active');
      $(this).removeClass('active');
      total = 0;
      col = 0;
      while (col <= $('.row .bead').length) {
        $(".earth .bead[data-col=" + col + "]").each(function() {
          if ($(this).hasClass('active')) {
            return total += Math.pow(10, col);
          } else {
            return false;
          }
        });
        $($(".heaven .bead[data-col=" + col + "]").get().reverse()).each(function() {
          if ($(this).hasClass('active')) {
            return total += Math.pow(10, col) * 5;
          } else {
            return false;
          }
        });
        col++;
      }
      return $('.total').text(String(total).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
  });

}).call(this);
