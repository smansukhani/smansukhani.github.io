// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
 

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var j = 0; j < image.length; j++) {
    for (var i = 0; i < image[j].length; i++) {
      var rgbString = image[j][i];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[j][i] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let backgroundPixel = getPixel(0, 0);
  
  for (let i = 0; i < imgWidth; i++) {
    for (let j = 0; j < imgHeight; j++) {
      let currentPixel = getPixel(i, j);
      
      if (currentPixel[RED] !== backgroundPixel[RED] || currentPixel[GREEN] !== backgroundPixel[GREEN] || currentPixel[BLUE] !== backgroundPixel[BLUE]) {
        filterFunction(currentPixel);
        setPixel(i, j, currentPixel);
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  return Math.max(0, Math.min(255, num));
}

// TODO 3: Create reddify function
function reddify(arr) {
  arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  arr[BLUE] -= 50;
  arr[BLUE] = keepInBounds(arr[BLUE]);
}

function increaseGreenByBlue(array) {
  var greenIndex = GREEN;
  var blueIndex = BLUE;
  var greenValue = array[greenIndex];
  var blueValue = array[blueIndex];
  
  var newValue = keepInBounds(greenValue + blueValue);
  array[greenIndex] = newValue;
}

// CHALLENGE code goes below here
