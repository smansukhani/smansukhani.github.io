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
            name: "Robot Romp",
            number: 1, 
            speed: -3,
           gameItems: [
               { 'type': 'enemy', 'x': 500, 'y': groundY - 75},
              {'type': 'enemy', 'x': 700, 'y': 300},
              { 'type': 'sawBlade', 'x': 1300, 'y': 400},

             ]
        };
    
        for (var i = 0; i < levelData.gameItems.length; i++) { 
            createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y);
            createBat(levelData.gameItems[i].x, levelData.gameItems[i].y);
            createSnake(levelData.gameItems[i].x, levelData.gameItems[i].y);
            createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);

        };

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
        function createBat(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var batHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            batHitZone.x = x;
            batHitZone.y = y;
            game.addGameItem(batHitZone);
            var obstacleImage2 = draw.bitmap('img/bat2 (1)(1).png');
            batHitZone.addChild(obstacleImage2);
            obstacleImage2.x = -85;
            obstacleImage2.y= -85;
        }
        function createSnake(x,y) {
            var hitZoneSize = -20;
            var damageFromObstacle = 10;
            var snakeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            snakeHitZone.x = x;
            snakeHitZone.y = y;
            game.addGameItem(snakeHitZone);
            var obstacleImage3 = draw.bitmap('img/snakefinal (1).png');
            snakeHitZone.addChild(obstacleImage3);
            obstacleImage3.x = -110;
            obstacleImage3.y = groundY - 250;
        }

        function createEnemy(x,y) {
            var enemy = game.createGameItem('enemy', 25);
            var zombie = draw.bitmap('img/zombie(1) (1) (1).png');
            zombie.x = -50;
            zombie.y = -50;
            enemy.addChild(zombie);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -0.5;
            enemy.rotationVelocity = 0.01;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-50);
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy');
                game.increaseScore(2000);
                enemy.flyTo(1000, 1000);
            };
            game.addGameItem(enemy);
        }
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
            reward.velocityX = -3;
        
            reward.onPlayerCollision = function(){
            console.log('The lifeItem has touched Halle');
            game.changeIntegrity(+25);
            reward.fadeOut();
            for (var i = 0; i < levelData.gameItems.length; i++) { 
    
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y);

            }
     
        
            };
                reward.onProjectileCollision = function (){
                    console.log('Halle has touched the lifeItem');
                    game.increaseScore(1000);
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
