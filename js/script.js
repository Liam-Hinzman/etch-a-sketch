$(document).ready(function(){
  length = 25;
  gridHeight = 16;
  gridWidth = 16;
  borderThickness = 1;
  for(col = 1; col <= gridHeight; col++){
    $('#grid').append("<div class = 'container' id = 'col" + col + "'></div>");
    for(row = 1; row <= gridWidth; row++){
      $('#col' + col).append("<div></div>");
    };
  };
  var style = $("<style> .container > div{ display: inline-block; height: " + length + "px; width: " + length + "px; border: " + borderThickness + "px solid black; } .grid{ display: block; margin: 100px auto; height: 100%; width: 100%; } .container{ display: block; margin: 0px auto; height: " + length + "px; width: " + ((length + (borderThickness * 2)) * gridWidth) + "px; } </style>");
  $('html > head').append(style);
});

//.append("<div class = 'col"+ col +" row"+row +"'></div>");
