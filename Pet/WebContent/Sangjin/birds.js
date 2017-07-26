/**
 * 
 */

function Bird(kind, bodycolor, health, size, name, hungryState){
	this.kind = kind;
	this.bodycolor = bodycolor;
	this.health = health;
	this.size = size;
	this.name = name;
	this.hungryState = hungryState;
}
Bird.prototype.setKind = function(kind){	this.kind = kind;	}
Bird.prototype.setBodycolor = function(bodycolor){	this.bodycolor = bodycolor;	}
Bird.prototype.setHealth = function(health){	this.health = health;	}
Bird.prototype.setSize = function(size){	this.size = size;	}
Bird.prototype.setName = function(name){	this.name = name;	}
Bird.prototype.setHungryState = function(hungryState) { this.hungryState = hungryState; }
Bird.prototype.getKind = function(){	return this.kind;	}
Bird.prototype.getBodycolor = function(){	return this.bodycolor;	}
Bird.prototype.getHealth = function(){	return this.health;	}
Bird.prototype.getSize = function(){	return this.size;	}
Bird.prototype.getName = function(){	return this.name;	}
Bird.prototype.getHungryState = function() { return this.hungryState; }

Bird.prototype.toString = function(){
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' size: '+this.size+' health state: '+this.health;
}

Bird.prototype.breed = function(){
	this.hungryState -= 50;
	this.checkHealth();
	this.egg = 'spawn egg';
};

Bird.prototype.eat = function(){
	this.hungryState += 100;
	this.checkHealth();
	this.feed = 'eat something';
};


Bird.prototype.cry = function(){
	this.hungryState -= 10;
	this.checkHealth();
	this.crying = 'barking.';
};

Bird.prototype.checkHealth = function(){
	if(this.getHungryState() > 80){
		this.setHealth('Great');
	}else if(this.getHungryState() > 50){
		this.setHealth('Good');
	}else if(this.getHungryState() > 20){
		this.setHealth('Normal');
	}else{
		this.setHealth('Bad');
	}
}
