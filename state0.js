var demo = {};

demo.state0 = function(){};
demo.state0.prototype = {
  preload: function(){
    
  },
  create: function(){
      game.stage.backgroundColor = "#ff0099";
      
      addChangeStateEventListeners();
  },    
  update: function(){
    
  }
};

function changeState(i, stateId){
    game.state.start("state" + stateId);
}

function addChangeStateEventListeners(){
    game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
    game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
    game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);
    game.input.keyboard.addKey(Phaser.Keyboard.THREE).onDown.add(changeState, null, null, 3);
    game.input.keyboard.addKey(Phaser.Keyboard.FOUR).onDown.add(changeState, null, null, 4);
    game.input.keyboard.addKey(Phaser.Keyboard.FIVE).onDown.add(changeState, null, null, 5);
    game.input.keyboard.addKey(Phaser.Keyboard.SIX).onDown.add(changeState, null, null, 6);
    game.input.keyboard.addKey(Phaser.Keyboard.SEVEN).onDown.add(changeState, null, null, 7);
    game.input.keyboard.addKey(Phaser.Keyboard.EIGHT).onDown.add(changeState, null, null, 8);
    game.input.keyboard.addKey(Phaser.Keyboard.NINE).onDown.add(changeState, null, null, 9);
}