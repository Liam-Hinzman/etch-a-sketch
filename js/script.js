$(document).ready(function(){

  var gridSize = 800;
  var gridHeight = 16;
  var gridWidth = 16;
  var borderThickness = 1;
  var color = 'black';
  randomColorTF = false;

  var clearButton = document.getElementById('clearButton');
  var changeGridSizeButton = document.getElementById('changeGridSizeButton');
  var randomColorsButton = document.getElementById('randomColorsButton');
  var blackButton = document.getElementById('blackButton');



  function createGrid(){
    for(col = 1; col <= gridHeight; col++){
      $('#grid').append("<div class = 'container' id = 'col" + col + "'></div>");
      for(row = 1; row <= gridWidth; row++){
        $('#col' + col).append("<div></div>");
      }
    }
  }

  function destroyGrid(){
    for(col = 1; col <= gridHeight; col++){
      $('.container').remove();
    }
  }

  function clear(){
    $('div > div > div').css('background-color', 'white');
  }

  function sizeChange(){
    var answer = prompt('Pick a new grid size', 'i.e 30x40');
    gridHeight = answer.substr(0, answer.indexOf('x'));
    gridWidth = answer.substr((answer.indexOf('x')+1), answer.length);
    destroyGrid();
    createGrid();
    applyCss();
  }

  function applyCss(){
    $('style').remove();
    var style = $("<style> \
                     .container > div{ \
                       display: inline-block; \
                       height: " + (+gridSize / +gridHeight) + "px; \
                       width: " + (+gridSize / +gridWidth) + "px; \
                       border: " + borderThickness + "px solid black; \
                     } \
                     #grid{ \
                       display: block; \
                       margin: 25px auto; \
                       height: " + (+gridSize + (+borderThickness * 2)) + "px; \
                       width: " + (+gridSize + (+borderThickness * 2)) + "px; } \
                     .container{ \
                       display: block; margin: 0px auto; \
                       height: " + (+gridSize / +gridHeight) + "px; \
                       width: " + (+gridSize + (gridWidth * borderThickness * 2)) + "px;\
                     } \
                    </style>");
    $('html > head').append(style);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  }


  $(clearButton).click(function(){
    clear();
  })

  $(changeGridSizeButton).click(function(){
    sizeChange();
  })

  $(randomColorsButton).click(function(){
    randomColorTF = true;
  })

  $(blackButton).click(function(){
    randomColorTF = false
  })

  createGrid();

  applyCss();

  $(document).on('mouseenter','.container > div', function(){
    console.log(randomColorTF);
    if(randomColorTF === true){
      getRandomColor();
      $(this).css('background-color', color);
    }else{
      $(this).css('background-color', 'black');
    }

  })
  
  $(document).on('vmouseover','.container > div', function(){
    console.log(randomColorTF);
    if(randomColorTF === true){
      getRandomColor();
      $(this).css('background-color', color);
    }else{
      $(this).css('background-color', 'black');
    }

  })

})
