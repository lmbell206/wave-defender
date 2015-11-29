//POWER UP LIBRARY
//store objects in items{} array

function heart_obj(x,y) {
	this.x = x;
	this.y = y;
	
	this.move = function() {
		this.y = this.y + 3;
	};
	
	this.draw = function() {	
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect(this.x, this.y, 35, 15);
		ctx.fillRect(this.x+5, this.y, 25, 30);
		ctx.fillRect(this.x + 5, this.y-5, 10, 5);
		ctx.fillRect(this.x + 20, this.y - 5, 10, 5);
		ctx.fillRect(this.x + 30, this.y, 5, 15);
		ctx.fillRect(this.x + 15, this.y + 35, 5, 5);
		ctx.fillRect(this.x + 10, this.y + 30, 15, 5);
		ctx.stroke();
	};

};

function newItems() {
	var x = randomNumber(20,1000);
	items[items.length] = new heart_obj(x,0);

};