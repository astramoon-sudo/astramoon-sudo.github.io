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
createPlatform(650, 655, 55, 60, "purple");
createPlatform(700, 600, 50, 60, "purple");
createPlatform(750, 600, 450, 50, "purple");
createPlatform(850, 550, 450, 60, "purple");
createPlatform(100, 550, 450, 60, "purple");

    // TODO 3 - Create Collectables
createCollectable("steve", 100, 700);
;createCollectable("diamond", 1000, 200, 0.5, 0.7)
createCollectable("diamond", 200, 170, 0.5, 0.7)

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1500);
createCannon("right", 300, 2000);
createCannon("top", 300, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
