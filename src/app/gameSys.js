var clue = document.getElementById('clue')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db/content.db')

  var createTable = function(callback){
    db.run('CREATE TABLE IF NOT EXISTS  Lorem (id integer primary key autoincrement,ipsum text)')
    callback()
  }

  var insertInto = function(callback){
    var stmt = db.prepare('INSERT INTO Lorem (ipsum) VALUES (?)')
      stmt.run(questions[3])
    stmt.finalize()
    callback()
  }

  var selectAll = function(callback){
    db.all('SELECT * FROM Lorem',function(err,rows){
      callback(rows)
    })
  }

var username = 'Alejandro', score = 100, lvl = 3

$(document).ready(function(){
  clue.src = '../res/clues/carabobo.jpg'
  $('#question').text('A que evento pertenece la presente pintura?')

  $('#userbar-user').text('Usuario: '+ username)
  $('#userbar-score').text('Puntaje: '+ score)
  $('#userbar-lvl').text('Nivel: '+ lvl)

  $('#goback').click(function(){
      window.location = './main.html'
  })

  selectAll(function(rows){
    var i = 0
    rows.forEach(function(row){
      if(i == 0){
        $('#q-1').text(row.ipsum)
      }
      if(i == 1){
        $('#q-2').text(row.ipsum)
      }
      if(i == 2){
        $('#q-3').text(row.ipsum)
      }
      if(i == 3){
        $('#q-4').text(row.ipsum)
      }
      i++
    })
    db.close()
  })

})
