/**
 * 
 */

function Bird(kind, bodycolor, health, size, name){
	this.kind = kind;
	this.bodycolor = bodycolor;
	this.health = health;
	this.size = size;
	this.name = name;
}
Bird.prototype.setKind = function(kind){	this.kind = kind;	}
Bird.prototype.setBodycolor = function(bodycolor){	this.bodycolor = bodycolor;	}
Bird.prototype.setHealth = function(health){	this.health = health;	}
Bird.prototype.setSize = function(size){	this.size = size;	}
Bird.prototype.setName = function(name){	this.name = name;	}
Bird.prototype.getKind = function(){	return this.kind;	}
Bird.prototype.getBodycolor = function(){	return this.bodycolor;	}
Bird.prototype.getHealth = function(){	return this.health;	}
Bird.prototype.getSize = function(){	return this.size;	}
Bird.prototype.getName = function(){	return this.name;	}

Bird.prototype.toString = function(){
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' size: '+this.size+' health state: '+this.health;
}

Bird.prototype.breed = function(){
	this.egg = 'spawn egg';
};

Bird.prototype.eat = function(){
	this.feed = 'eat something';
};


Bird.prototype.cry = function(){
	this.crying = 'barking.';
};
