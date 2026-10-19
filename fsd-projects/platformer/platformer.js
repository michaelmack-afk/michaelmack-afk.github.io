$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 650, 100, 700, "periwinkle");
createPlatform(198, 0, 20, 500, "purple")
createPlatform(290, 600, 80, 600, "periwinkle")
createPlatform(368, 510, 88, 355, "purple")
createPlatform(457, 550, 199, 500, "periwinkle")
createPlatform(1300, 500, 99, 550, "purple")  
createPlatform(755, 500, 99, 550, "periwinkle")
createPlatform(855, 540, 90, 500, "purple")
createPlatform(945, 590, 90, 500, "periwinkle")
createPlatform(1036, 610, 90, 500, "purple")
createPlatform(1200, 595, 100, 500, "periwinkle")
    // TODO 3 - Create Collectables
createCollectable("database", 1350, 450, 0.2, 0.5)
createCollectable("steve", 400, 470, 0.2, 0.5)
createCollectable("kennedi", 1000, 550, 0.2, 0.5)
    
    // TODO 4 - Create Cannons
createCannon("bottom", 655, 520)
createCannon("top", 400, 890)
createCannon("bottom",1120,590 )


    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
