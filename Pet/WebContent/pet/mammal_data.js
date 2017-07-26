/**
 * 		포유류 객체
 */

// 포유류 생성자 생성
function Mammal( kind, furcolor, hungry, eyecolor, age, sex, health, name, character ) {
	
	this.kind = kind;
	this.furcolor = furcolor;
	this.hungry = hungry;
	this.eyecolor = eyecolor;
	this.age = age;
	this.sex = sex;
	this.health = health;
	this.name = name;
	this.character = character;
}

Mammal.prototype.setKind = function(kind) { this.kind = kind; };
Mammal.prototype.getKind = function() { return this.kind; };

Mammal.prototype.setFurcolor = function(furcolor) { this.furcolor = furcolor; };
Mammal.prototype.getFurcolor = function () { return this.furcolor; };

Mammal.prototype.setHungry = function(hungry) { this.hungry = hungry; };
Mammal.prototype.getHungry = function() { return this.hungry; };

Mammal.prototype.setEyecolor = function(eyecolor) { this.eyecolor = eyecolor; };
Mammal.prototype.getEyecolor = function() { return this.eyecolor; };

Mammal.prototype.setAge = function(age) { this.age = age; };
Mammal.prototype.getAge = function() { return this.age; };

Mammal.prototype.setSex = function(sex) { this.sex = sex; };
Mammal.prototype.getSex = function() { return this.sex; };

Mammal.prototype.setHealth = function(health) { this.health = health; };
Mammal.prototype.getHealth = function() { return this.health; };

Mammal.prototype.setName = function(name) { this.name = name; };
Mammal.prototype.getName = function () { return this.name; };

Mammal.prototype.setCharacter = function(character) { this.character = character; };
Mammal.prototype.getCharacter = function() { return this.character; };

Mammal.prototype.sleep = function() {
	this.health += 10;
	this.hungry -= 5;
	return ' 잠을 잡니다.';
}
Mammal.prototype.eat = function() {
	this.hungry -= 10;
	return ' 밥을 먹습니다.';
}
Mammal.prototype.dump = function() {
	this.hungry += 10;
	return ' 볼일을 봅니다.';
}
Mammal.prototype.play = function() {
	this.hungry -= 10;
	this.health += 10;
	return ' 놉니다.'
}
Mammal.prototype.talk = function() {
	this.hungry += 10;
	this.health -= 10;
	return ' 말을 합니다.';
}
Mammal.prototype.toString = function() {
	return	'이름 : ' + this.getName() + 
			', 품종 : ' + this.getKind() + 
			', 털색: ' + this.getFurcolor() + 
			', 배고픔: ' + this.getHungry() +
			', 눈색 : ' + this.getEyecolor() +
			', 나이 : ' + this.getAge() +
			', 성별 : ' + this.getSex() +
			', 건강 : ' + this.getHealth() +
			', 성격 : ' + this.getCharacter()
};