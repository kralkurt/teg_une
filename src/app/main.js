var gui = require('nw.gui')

var win = gui.Window.get()

$(document).ready(function(){

  $('#goto-main').click(function(){
    window.location = './front.html'
  })
  $('#goto-howto').click(function(){
    window.location = './howto.html'
  })
  $('#top10-btn').click(function(){
    window.location = './top10.html'
  })
  $('#close-btn').click(function(){
    win.close()
  })

})
