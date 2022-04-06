var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 200, "y": 300 },
                { "type": "sawblade", "x": 900, "y": 210 },
                { "type": "sawblade", "x": 700, "y": 265 },
                { "type": "bat", "x": 1200,"y": 210 }, 
                { 'type': 'enemy', 'x': 400, 'y': groundY - 20 },
                { 'type': 'reward', 'x': 1600, 'y': groundY - 50 },
                { 'type': 'bat', 'x': 1050, 'y': 300 },
                { 'type': 'snake', 'x': 1350, 'y':275 },
                { 'type': 'snake', 'x': 1500, 'y': 240 },
                { 'type': 'enemy', 'x': 800, 'y': groundY - 100 },
                { 'type': 'enemy', 'x': 1600, 'y': groundY - 60 },
                { 'type': 'enemy', 'x': 1200, 'y': groundY - 5 }, 
                { 'type': 'enemy', 'x': 2000, 'y': groundY - 150 },
                { 'type': 'enemy', 'x': 2400, 'y': groundY - 30 },
                { 'type': 'enemy', 'x': 2600, 'y': groundY - 60 },
            ]
        };
        for (var i = 0; i < levelData.gameItems.length; i++) { 
            if (levelData.gameItems[i].type === 'enemy') {
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

            else if (levelData.gameItems[i].type === 'reward') {
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

           else if (levelData.gameItems[i].type === 'bat') {
                createBat(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

           else if (levelData.gameItems[i].type === 'sawblade') {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }

           else if (levelData.gameItems[i].type === 'snake') {
                createSnake(levelData.gameItems[i].x, levelData.gameItems[i].y)
            }


        }
    
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
         
        function createSawBlade(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y= -25;
        }
        createSawBlade(200,300);
        createSawBlade(900,210);
        createSawBlade(700,265);

        function createBat(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var batHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            batHitZone.x = x;
            batHitZone.y = y;
            game.addGameItem(batHitZone);
            var obstacleImage2 = draw.bitmap('img/bat2 (1)(1).png');
            batHitZone.addChild(obstacleImage2);
            obstacleImage2.x = -50;
            obstacleImage2.y= -50;
        }
        createBat(1050, 300);
        createBat(1200, 210);

        function createSnake(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var snakeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            snakeHitZone.x = x;
            snakeHitZone.y = y;
            game.addGameItem(snakeHitZone);
            var obstacleImage3 = draw.bitmap('img/snakefinal (1).png');
            snakeHitZone.addChild(obstacleImage3);
            obstacleImage3.x = -30;
            obstacleImage3.y = -30;
        }

        createSnake(1350,275);
        createSnake(1500,240);

        function createEnemy(x,y) {
            var enemy = game.createGameItem('enemy',25);
            var zombie = draw.bitmap('img/zombie(1) (1) (1).png');
            zombie.x = -50;
            zombie.y = -50;
            enemy.addChild(zombie);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -3;
            enemy.rotationVelocity = 10;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
               game.increaseScore(100);
               enemy.fadeOut();
            };
            game.addGameItem(enemy);
        }
        createEnemy(400,groundY-20);
        createEnemy(800,groundY - 100);
        createEnemy(1200,groundY-50);
        createEnemy(1600,groundY-60);
        createEnemy(2000,groundY-150);
        createEnemy(2400, groundY - 30);
        createEnemy(2600,groundY-60);


function createReward(x, y) {
    function reward(x, y){
    var reward = game.createGameItem('reward',25);
    var lollipop = draw.bitmap('img/lollipopfinal.png');
    lollipop.x = -50;
    lollipop.y = -50;
    reward.addChild(lollipop);

   lollipop.scaleX = 0.2;
   lollipop.scaleY = 0.2;

    reward.x = x;
    reward.y = y;

    game.addGameItem(reward);
    reward.velocityX = -2;

    reward.onPlayerCollision = function(){
    console.log('The lifeItem has touched Halle');
    game.changeIntegrity(+25);
    reward.fadeOut();

    };
        reward.onProjectileCollision = function (){
            console.log('Halle has touched the lifeItem');
            game.increaseScore(100);
           reward.fadeOut();
    }
}
reward(1600, groundY -50);

}
createReward();
                    // DO NOT EDIT CODE BELOW HERE
    }
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
