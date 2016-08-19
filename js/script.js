$(document).ready(function(){

  var gridSize = 800;
  var gridHeight = 16;
  var gridWidth = 16;
  var borderThickness = 1;

  var clearButton = document.getElementById('clearButton');
  var changeGridSize = document.getElementById('changeGridSize');



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
    var style = $("<style> .container > div{ display: inline-block; height: " + (gridSize / (gridHeight + (borderThickness * 2))) + "px; width: " + (gridSize / (gridWidth + (borderThickness * 2))) + "px; border: " + borderThickness + "px solid black; } #grid{ display: block; margin: 50px auto; height: " + (gridSize + (borderThickness * 2)) + "px; width: " + (gridSize + (borderThickness * 2)) + "px; } .container{ display: block; margin: 0px auto; height: " + (gridSize / (gridHeight + (borderThickness * 2))) + "px; width: " + (gridSize + (borderThickness * 2)) + "px; } </style>");
    $('html > head').append(style);
  }


  $(clearButton).click(function(){
    clear();
  })

  $(changeGridSize).click(function(){
    sizeChange();
  })



  createGrid();

  applyCss();

  $('.container > div').mouseenter(function(){
    $(this).css('background-color', 'black');
  })

})
