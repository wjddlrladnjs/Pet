/**
 * 
 */



function Cock(kind, bodycolor, health, size, name, aggression, sex){
	Bird.call(this, kind, bodycolor, health, size, name);
	this.aggression = aggression;
	this.sex = sex;
}

Cock.prototype = new Bird();

Cock.prototype.setAggression = function(aggression){	this.aggression = aggression;	}
Cock.prototype.setSex = function(sex){	this.sex = sex;	}
Cock.prototype.getAggression = function(){	return this.aggression;	}
Cock.prototype.getSex = function(){	return this.sex;	}


Cock.prototype.toString = function(){
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' Aggression: '+this.aggression+' size: '+this.size+' Sex: '+this.sex+' health state: '+this.health+' hungryState: '+this.hungryState;
}

Cock.prototype.jump = function(){
	this.hungryState -= 15;
	this.checkHealth();
	this.jumping = 'not fly away, just jump.';
};

