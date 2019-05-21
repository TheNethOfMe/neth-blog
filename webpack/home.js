const $grid = $("#grid");

let counter = [0, 0];
let allShapes = [];

const gridRows = 5;
const gridCols = 8;

const defaultPics = [
  [
    "assets/img/skills/html",
    "assets/img/skills/css",
    "assets/img/skills/javascript",
    "assets/img/skills/csharp"
  ],
  [
    "assets/img/projects/honpron",
    "assets/img/projects/rainyday",
    "assets/img/projects/90snotebook",
    "assets/img/projects/jag"
  ],
  [
    "assets/img/skills/mongo",
    "assets/img/skills/express",
    "assets/img/skills/react",
    "assets/img/skills/node"
  ],
  [
    "assets/img/projects/calculator",
    "assets/img/projects/charttest",
    "assets/img/projects/pogs",
    "assets/img/projects/flyingtoaster"
  ],
  [
    "assets/img/skills/rubyrails",
    "assets/img/skills/wordpress",
    "assets/img/skills/bootstrap",
    "assets/img/skills/gimp"
  ],
  [
    "assets/img/projects/rambling",
    "assets/img/projects/tictactoe",
    "assets/img/projects/tomato",
    "assets/img/projects/vgquote"
  ],
  [
    "assets/img/skills/github",
    "assets/img/skills/webpack",
    "assets/img/skills/vue",
    "assets/img/skills/jqeury"
  ]
];

const shapes = [
  {
    name: "O-0",
    xAxis: [0, 0, 1, 1],
    yAxis: [0, 1, 0, 1]
  },
  {
    name: "L-1",
    xAxis: [0, 0, 0, 1],
    yAxis: [0, 1, 2, 0]
  },
  {
    name: "L-2",
    xAxis: [0, 1, 2, 2],
    yAxis: [0, 0, 0, 1]
  },
  {
    name: "L-3",
    xAxis: [0, 1, 2, 2],
    yAxis: [1, 1, 0, 1]
  },
  {
    name: "L-4",
    xAxis: [0, 0, 1, 2],
    yAxis: [0, 1, 1, 1]
  },
  {
    name: "L-5",
    xAxis: [0, 1, 1, 1],
    yAxis: [2, 0, 1, 2]
  },
  {
    name: "L-6",
    xAxis: [0, 1, 1, 1],
    yAxis: [0, 0, 1, 2]
  },
  {
    name: "L-7",
    xAxis: [0, 0, 0, 1],
    yAxis: [0, 1, 2, 2]
  },
  {
    name: "L-8",
    xAxis: [0, 0, 1, 2],
    yAxis: [0, 1, 0, 0]
  },
  {
    name: "I-9",
    xAxis: [0, 1, 2, 3],
    yAxis: [0, 0, 0, 0]
  },
  {
    name: "I-10",
    xAxis: [0, 0, 0, 0],
    yAxis: [0, 1, 2, 3]
  },
  {
    name: "T-11",
    xAxis: [0, 0, 0, 1],
    yAxis: [0, 1, 2, 1]
  },
  {
    name: "T-12",
    xAxis: [0, 1, 1, 1],
    yAxis: [1, 0, 1, 2]
  },
  {
    name: "T-13",
    xAxis: [0, 1, 1, 2],
    yAxis: [1, 0, 1, 1]
  },
  {
    name: "T-14",
    xAxis: [0, 1, 1, 2],
    yAxis: [0, 0, 1, 0]
  },
  {
    name: "Z-15",
    xAxis: [0, 0, 1, 1],
    yAxis: [0, 1, 1, 2]
  },
  {
    name: "Z-16",
    xAxis: [0, 0, 1, 1],
    yAxis: [1, 2, 0, 1]
  },
  {
    name: "Z-17",
    xAxis: [0, 1, 1, 2],
    yAxis: [1, 0, 1, 0]
  },
  {
    name: "Z-18",
    xAxis: [0, 1, 1, 2],
    yAxis: [0, 0, 1, 1]
  }
];

const defaultColors = [
  "115, 106, 248",
  "222, 61, 31",
  "64, 229, 44",
  "156, 44, 229",
  "229, 220, 44",
  "250, 165, 83",
  "115, 106, 248",
  "222, 61, 31",
  "64, 229, 44",
  "156, 44, 229",
  "229, 220, 44",
  "250, 165, 83"
];

// Shuffle function to randomize colors and pictures
const shuffle = arr => {
  let currentIndex = arr.length;
  let tempVal;
  let randIndex;

  while (currentIndex !== 0) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempVal = arr[currentIndex];
    arr[currentIndex] = arr[randIndex];
    arr[randIndex] = tempVal;
  }

  return arr;
};
const randomColors = shuffle(defaultColors);
const shapePics = shuffle(defaultPics);

// Create Grid
const createGrid = () => {
  for (let i = 0; i < gridRows; i++) {
    let $newRow = $("<tr></tr>");
    for (let j = 0; j < gridCols; j++) {
      let $newCell = $("<td></td>").addClass("empty");
      $newRow.append($newCell);
    }
    $grid.append($newRow);
  }
};

// Fill Individual Cell
const fillCell = (x, y, color, text) => {
  let background = `linear-gradient(
    rgba(${color}, 0.5), rgba(${color}, 0.5)
  ), url("./${text}.jpg")`;
  $grid
    .children()
    .eq(x)
    .children()
    .eq(y)
    .removeClass("empty")
    .css("background", background)
    .css("backgroundSize", "cover");
};

// Check Individual Cell
const checkCell = (x, y) => {
  return $grid
    .children()
    .eq(x)
    .children()
    .eq(y)
    .hasClass("empty");
};

// Fill in an entire shape
const makeShape = (shape, color, text) => {
  for (let i = 0; i < 4; i++) {
    const blockText = text[i];
    fillCell(
      shape.xAxis[i] + counter[0],
      shape.yAxis[i] + counter[1],
      color,
      blockText
    );
  }
};

// Check that an entire shape will fit
const canPlaceShape = shape => {
  let result = true;
  for (let i = 0; i < 4; i++) {
    if (!checkCell(shape.xAxis[i] + counter[0], shape.yAxis[i] + counter[1]))
      result = false;
  }
  return result;
};

// Reset Grid
const resetGrid = () => {
  $grid.empty();
  createGrid();
  counter = [0, 0];
};

// Put Indexes for All Shapes Into Array for Tracking
const replenishShapes = () => {
  shapes.forEach((shape, idx) => {
    allShapes.push(idx);
  });
};

// Returns a Random Shape from Array
const getRandomShape = () => {
  if (!allShapes.length) replenishShapes();
  let rando = Math.floor(Math.random() * allShapes.length);
  let randomShapeIdx = allShapes[rando];
  allShapes.splice(rando, 1);
  return shapes[randomShapeIdx];
};

// Increments the Counter Array
const incrementCounter = () => {
  counter[1]++;
  if (
    counter[1] ===
    $grid
      .children()
      .eq(0)
      .children().length
  ) {
    counter[1] = 0;
    counter[0]++;
  }
};

// Places the Shape on the Grid
const placeShape = (text, colorIndex) => {
  let currentColor = randomColors[colorIndex];
  let shapeTracker = 0;
  let currentShape = "";
  do {
    currentShape = getRandomShape();
    shapeTracker++;
  } while (shapeTracker < 20 && !canPlaceShape(currentShape));
  if (shapeTracker === 20) {
    cannotPlaceShape(text, colorIndex);
  } else {
    makeShape(currentShape, currentColor, text);
    incrementCounter();
  }
};

// If no Shape Can Be Placed
const cannotPlaceShape = (text, colorIndex) => {
  incrementCounter();
  placeShape(text, colorIndex);
};

// Creates the board
const generateFinalBoard = () => {
  resetGrid();
  shapePics.forEach((text, index) => {
    let delay = index * 500;
    setTimeout(() => {
      placeShape(text, index);
    }, delay);
  });
};

export default generateFinalBoard;
