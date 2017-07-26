/**
 * 
 */


function Parrot(kind, bodycolor, health, size, name, language, beakcolor){
	Bird.call(this, kind, bodycolor, health, size, name);
	this.language = language;
	this.beakcolor = beakcolor;		
}

Parrot.prototype = new Bird();

Parrot.prototype.setLanguage = function(language){	this.language = language;	}
Parrot.prototype.setBeakcolor = function(beakcolor){	this.beakcolor = beakcolor;	}
Parrot.prototype.getLanguage = function(){	return this.language;	}
Parrot.prototype.getBeakcolor = function(){	return this.beakcolor;	}

Parrot.prototype.toString = function(){
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' beakcolor: '+this.beakcolor+' size: '+this.size+' language skill: '+this.language+' health state: '+this.health+' hungryState: '+this.hungryState;
}


Parrot.prototype.fly = function(){
	this.hungryState -= 20;
	checkHealth();
	this.flying = 'fly away';
};

Parrot.prototype.say = function(){
	this.hungryState -= 10;
	checkHealth();
	this.speak = 'say something';
};


