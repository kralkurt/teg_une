var gui = require('nw.gui')

var win = gui.Window.get()

$(document).ready(function(){

  $('#goto-main').click(function(){
    window.location = './front.html'
  })
  $('#goto-options').click(function(){
    window.location = './howto.html'
  })
  $('#credits-btn').click(function(){
    alert('Hecho por Alejandro Rodriguez')
  })
  $('#close-btn').click(function(){
    win.close()
  })
})
