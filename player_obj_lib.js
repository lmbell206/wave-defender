
//this object has location variables
//  it also has drawing and movement functions


function player_obj(x,y) {
	this.x = x;
	this.y = y;
	this.maxshots = 0;
	this.speed = 4;
	this.moveLeft = function() {
		this.x = this.x -this.speed;
	};
	this.moveRight = function() {
		this.x = this.x +this.speed;
	};
	this.shoot = function() {
		laser.shoot(this.x, this.y);
	};
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect( this.x ,this.y , 40 ,10 );
		ctx.fillRect( this.x ,this.y - 5 , 5 ,5 );
		ctx.fillRect( this.x + 15 ,this.y - 15 , 10 ,15 );
		ctx.fillRect( this.x + 35 ,this.y - 5 , 5 ,5 );
		ctx.stroke();

	};
}

// this object is placed in the shots{} array
//  it has its own movement and drawing functions
//  it also has its own location variables


function laser_obj(x,y) {
	this.x = x;
	this.y = y;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect( this.x ,this.y ,5 ,15 );
		ctx.stroke();
	};
	this.move = function(){
		this.y = this.y - 12;
	};
}

// this function creates a new shot
//  requires laser_obj and a created player_obj named player

function newShot() {

	if (shots.length <= player.maxshots) {
		shot_sound();
		shots[shots.length] = new laser_obj(player.x + 20,player.y);  
	};
}
	
