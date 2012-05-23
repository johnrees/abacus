moveBead = (e) ->
  $('.bead').unbind 'click', moveBead
  col = $(this).data('col')
  parent = $(this).parents('div')

  parent.find(".bead[data-col=#{col}]").addClass('active')
  $(".bead").bind 'click', moveBead
  $(this).removeClass('active')
  $(this).unbind 'click', moveBead

  total = 0
  col = 0

  while col <= $('.row .bead').length
    $(".earth .bead[data-col=#{col}]").each ->
      if $(this).hasClass('active')
        total+= Math.pow(10,col)
      else return false
    $($(".heaven .bead[data-col=#{col}]").get().reverse()).each ->
      if $(this).hasClass('active')
        total+= Math.pow(10,col) * 5
      else return false
    col++

  $('.total').text String(total).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

jQuery ->

  $('.heaven .row:not(:last) .bead, .earth .row:not(:first) .bead')
  .addClass('active')

  $('.total').text(0)

  $(".bead").bind 'click', moveBead
