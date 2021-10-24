(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/readme/fireball_25.png');
        game.load.image('platform', './asset/readme/green_2_15.png');
        game.load.image('db', './asset/collectable/question-block_5.png');
        game.load.image('steve', './asset/collectable/CoinMK8_1_25.png');
        game.load.image('grace', './asset/collectable/CoinMK8_1_25.png');
        game.load.image('kennedi', './asset/collectable/mushroom_2_5.png');
        game.load.image('max', './asset/collectable/fire_flower_5.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
