$(document).ready(function(){

  $('.editMe').on('click', function(event) {
    $(event.target).addClass('hidden')
    var theInp = $(event.target).siblings()[0]
    $(theInp).val($(event.target).text())
    $(theInp).removeClass('hidden')
    $(theInp).trigger('focus')
  })

  $('.editMe').on('blur', function(event) {
    $(event.target).addClass('hidden')
    var theP = $(event.target).siblings()[0]
    $(theP).text($(event.target).val())
    $(theP).removeClass('hidden')
  })

})
