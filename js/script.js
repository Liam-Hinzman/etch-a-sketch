$(document).ready(function(){

  var gridSize = 800;
  var gridHeight = 16;
  var gridWidth = 16;
  var borderThickness = 1;

  var clearButton = document.getElementById('clearButton');
  console.log(clearButton)
  for(col = 1; col <= gridHeight; col++){
    $('#grid').append("<div class = 'container' id = 'col" + col + "'></div>");
    for(row = 1; row <= gridWidth; row++){
      $('#col' + col).append("<div></div>");
    };
  };

  var style = $("<style> .container > div{ display: inline-block; height: " + (gridSize / (gridHeight + (borderThickness * 2))) + "px; width: " + (gridSize / (gridWidth + (borderThickness * 2))) + "px; border: " + borderThickness + "px solid black; } #grid{ display: block; margin: 50px auto; height: " + (gridSize + (borderThickness * 2)) + "px; width: " + (gridSize + (borderThickness * 2)) + "px; } .container{ display: block; margin: 0px auto; height: " + (gridSize / (gridHeight + (borderThickness * 2))) + "px; width: " + (gridSize + (borderThickness * 2)) + "px; } </style>");
  $('html > head').append(style);

  $('div > div > div').mouseenter(function(){
    $(this).css('background-color', 'black');
  });

  function clear(){
    $('div > div > div').css('background-color', 'white');
  };

  $(clearButton).click(function(){
    $('div > div > div').css('background-color', 'white');
  });

});

//.append("<div class = 'col"+ col +" row"+row +"'></div>");
