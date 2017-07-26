/**
 * 
 */

function Parrot(kind, bodycolor, health, size, name, language, beakcolor){
	this.kind = kind;
	this.bodycolor = bodycolor;
	this.health = health;
	this.size = size;
	this.name = name;
	this.language = language;
	this.beakcolor = beakcolor;	
//	function toString(){
//		var result = 'asdf';
//		result = 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' beakcolor: '+this.beakcolor+' size: '+this.size+' language skill: '+this.language+' health state: '+this.health;
//		return result;
//	}
}
Parrot.prototype.toString = function(){
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' beakcolor: '+this.beakcolor+' size: '+this.size+' language skill: '+this.language+' health state: '+this.health;
}

Parrot.prototype.breed = function(){
	this.egg = 'spawn egg';
};

Parrot.prototype.eat = function(){
	this.feed = 'eat something';
};

Parrot.prototype.fly = function(){
	this.flying = 'fly away';
};

Parrot.prototype.say = function(){
	this.speak = 'say something';
};

Parrot.prototype.cry = function(){
	this.crying = 'barking.';
};

//var ddol = new Parrot('GreenChiconewer','Green','Good','middle','DDol','normal', 'Gray');
//ddol.cry();
//console.dir(ddol);
//console.log(ddol.toString());
//console.log('end');