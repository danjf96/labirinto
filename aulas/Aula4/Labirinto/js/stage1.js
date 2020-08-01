var stage1State = {
	create: function(){
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
		
		for(var row in this.maze){
			for(var col in this.maze[row]){
				var tile = this.maze[row][col];
				
				var x = col * 50;
				var y = row * 50;
				
				if(tile === 1){
					var block = this.blocks.create(x,y,'block');
				}
			}
		}
	}
};
