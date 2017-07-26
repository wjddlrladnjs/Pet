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
	return 'name: '+this.name +' kind: '+this.kind+' bodycolor: '+this.bodycolor+' Aggression: '+this.aggression+' size: '+this.size+' Sex: '+this.sex+' health state: '+this.health;
}

Cock.prototype.jump = function(){
	this.jumping = 'not fly away, just jump.';
};

var dal = new Cock();
dal.setKind('KoreanCock');
dal.setBodycolor('GoldenRed');
dal.setHealth('Great');
dal.setSize('middle');
dal.setName('Dal');
dal.setAggression('Aggressive');
dal.setSex('Cock');

var dol = new Cock();
dol.setKind('WhiteCochin');
dol.setBodycolor('White');
dol.setHealth('Normal');
dol.setSize('Big');
dol.setName('Dol');
dol.setAggression('Normal');
dol.setSex('hen');

var dul = new Cock();
dul.setKind('BlueRoseComb');
dul.setBodycolor('GrayBlue');
dul.setHealth('Good');
dul.setSize('small');
dul.setName('Dul');
dul.setAggression('Not Aggressive');
dul.setSex('Cock');

var cocks = [dal, dol, dul];

console.log(cocks[0].toString());
console.log(cocks[1].toString());
console.log(cocks[2].toString());