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
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' beakcolor: '+this.beakcolor+' size: '+this.size+' language skill: '+this.language+' health state: '+this.health;
}


Parrot.prototype.fly = function(){
	this.flying = 'fly away';
};

Parrot.prototype.say = function(){
	this.speak = 'say something';
};


//var ddol = new Parrot('GreenChiconewer','Green','Good','middle','DDol','normal', 'Gray');
//ddol.cry();
//console.dir(ddol);
var ddol = new Parrot();
ddol.setKind('GreenChiconewer');
ddol.setBodycolor('Green');
ddol.setHealth('Good');
ddol.setSize('middle');
ddol.setName('DDol');
ddol.setLanguage('normal');
ddol.setBeakcolor('Gray');

var pary = new Parrot();
pary.setKind('HyacinthMacaw');
pary.setBodycolor('Blue');
pary.setHealth('Normal');
pary.setSize('middle');
pary.setName('BB');
pary.setLanguage('Low');
pary.setBeakcolor('Blueblack');

var pool = new Parrot();
pool.setKind('Ara Macao');
pool.setBodycolor('Rainbow');
pool.setHealth('Great');
pool.setSize('middle');
pool.setName('Rainbow');
pool.setLanguage('Low');
pool.setBeakcolor('Beige');

var parrots = [ddol, pary, pool];

console.log(parrots[0].toString());
console.log(parrots[1].toString());
console.log(parrots[2].toString());