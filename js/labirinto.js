var labirinto = {
    createLab: function(){

        game.add.sprite(0,0,'bg');

        this.maze = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,3,0,0,0,0,0,0,0,0,0,0,0,3,1],
			[1,0,1,1,0,1,0,1,1,1,0,1,1,0,1],
			[1,0,1,3,0,1,3,0,0,1,0,3,1,0,1],
			[1,0,0,0,1,1,1,1,0,1,0,1,1,0,1],
			[1,0,0,0,0,1,0,2,0,0,0,0,0,0,1],
			[1,0,1,3,0,0,0,0,1,0,0,3,1,0,1],
			[1,0,1,1,1,1,0,1,1,0,1,1,1,0,1],
			[1,3,0,0,0,0,0,3,1,0,0,0,0,3,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];

        this.blocks = game.add.group();
        this.blocks.enableBody = true;
        this.coinPositions = [];

        for(var row in this.maze){
            for(var col in this.maze[row]){
                
                var tile = this.maze[row][col];
                var x = col * 50;
                var y = row * 50;

                if(tile === 1){
                    var block = this.blocks.create(x,y,'block');
                    block.body.immovable = true;

                }
                else if(tile === 2){
                    this.player = game.add.sprite(x + 25, y + 25, 'player');
                    this.player.anchor.set(.5);
                    game.physics.arcade.enable(this.player);
                    this.player.animations.add('goDown',[0,1,2,3,4,5,6,7],12,true);
                    this.player.animations.add('goUp',[8,9,10,11,12,13,14,15],12,true);
                    this.player.animations.add('goLeft',[16,17,18,19,20,21,22,23],12,true);
                    this.player.animations.add('goRight',[24,25,26,27,28,29,30,31],12,true);
                }
                else if(tile === 3){                 
                    var position = {
                        x: x + 25,
                        y: y + 25
                    };
                    this.coinPositions.push(position);
                }

            }
        }
    }
   
}