var barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
  preload: function(){
    
  },
  create: function(){
    game.stage.backgroundColor = "#99aaff";
    addChangeStateEventListeners();
  },
  update: function(){
    
  }
};
