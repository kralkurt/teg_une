var clue = document.getElementById('clue')
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db/content.db')

var username = 'Alejandro', score = 100, lvl = 3

var options = 0
var options_amount

var option_id = 0

var former_question = 0

var completed_questions = []

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

  var getCount = function(callback){
    db.each('select (select count() from opciones) as count',function(err,row){
      callback(row)
    })
  }

  var selectAll = function(callback){
    db.all('SELECT * FROM Lorem',function(err,rows){
      callback(rows)
    })
  }

  var selectOptions = function(callback){

    var query = 'SELECT * FROM opciones WHERE options_id = ' + options + ';'

    db.all(query, function(err,rows){
      callback(rows)
    })
  }

  var selectIMG = function(callback){
    db.all('SELECT * FROM imagen WHERE img_id = 3',function(err,rows){
      callback(rows)
    })
  }

$(document).ready(function(){

  getCount(function(rows){

    options_amount = rows.count
    options = Math.floor(Math.random() * options_amount) + 1

    selectOptions(function(rows){

      rows.forEach(function(row){
        $('#q-1').text(row.option_1)
        $('#q-2').text(row.option_2)
        $('#q-3').text(row.option_3)
        $('#q-4').text(row.option_4)
      })

    })

  })

  $('#question').text('A que personaje historico pertenece la pintura?')

  $('#userbar-user').text('Usuario: '+ username)
  $('#userbar-score').text('Puntaje: '+ score)
  $('#userbar-lvl').text('Nivel: '+ lvl)

  $('#goback').click(function(){
      window.location = './main.html'
  })

  $('.btn-option').click(function(){
    if($(this).val() == 1){
      alert('Respuesta Correcta!')
      score += 25
      lvl += 1

      completed_questions.push(options)

      $('#userbar-score').text('Puntaje: '+ score)
      $('#userbar-lvl').text('Nivel: '+ lvl)
      $('.btn-option').prop( "disabled", false )

      options = Math.floor(Math.random() * options_amount) + 1

      completed_questions.forEach(function(id){
      })

      selectOptions(function(rows){

        rows.forEach(function(row){
          $('#q-1').text(row.option_1)
          $('#q-2').text(row.option_2)
          $('#q-3').text(row.option_3)
          $('#q-4').text(row.option_4)
        })

      })

    }else{
      score -= 5
      $('#userbar-score').text('Puntaje: '+ score)
      $(this).prop( "disabled", true );
    }
  })

  selectIMG(function(rows){

    rows.forEach(function(row){
      clue.src = row.url;
    })

  })

})
