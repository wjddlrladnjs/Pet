/**
 * 		고양이 객체 js
 */

// 생성자 생성
function Cat(kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {
	
	this.kind = kind;
	this.fursize = fursize;
	this.furcolor = furcolor;
	this.hungry = hungry;
	this.eyecolor = eyecolor;
	this.age = age;
	this.sex = sex;
	this.health = health;
	this.name = name;
	this.character = character;
	
}

Cat.prototype.setKind = function(kind) { this.kind = kind; };
Cat.prototype.getKind = function() { return this.kind; };

Cat.prototype.setFursize = function(fursize) { this.fursize = fursize; };
Cat.prototype.getFursize = function() { return this.fursize; };

Cat.prototype.setFurcolor = function(furcolor) { this.furcolor = furcolor; };
Cat.prototype.getFurcolor = function () { return this.furcolor; };

Cat.prototype.setHungry = function(hungry) { this.hungry = hungry; };
Cat.prototype.getHungry = function() { return this.hungry; };

Cat.prototype.setEyecolor = function(eyecolor) { this.eyecolor = eyecolor; };
Cat.prototype.getEyecolor = function() { return this.eyecolor; };

Cat.prototype.setAge = function(age) { this.age = age; };
Cat.prototype.getAge = function() { return this.age; };

Cat.prototype.setSex = function(sex) { this.sex = sex; };
Cat.prototype.getSex = function() { return this.sex; };

Cat.prototype.setHealth = function(health) { this.health = health; };
Cat.prototype.getHealth = function() { return this.health; };

Cat.prototype.setName = function(name) { this.name = name; };
Cat.prototype.getName = function () { return this.name; };

Cat.prototype.setCharacter = function(character) { this.character = character; };
Cat.prototype.getCharacter = function() { return this.character; };


Cat.prototype.sleep = function() {
	this.health += 10;
	this.hungry -= 5;
	return ' 잠을 잡니다.';
}
Cat.prototype.eat = function() {
	this.hungry -= 10;
	return ' 밥을 먹습니다.';
}
Cat.prototype.dump = function() {
	this.hungry += 10;
	return ' 볼일을 봅니다.';
}
Cat.prototype.play = function() {
	this.hungry -= 10;
	this.health += 10;
	return ' 놉니다.'
}
Cat.prototype.talk = function() {
	this.hungry += 10;
	this.health -= 10;
	return ' 말을 합니다.';
}
Cat.prototype.info = function() {
	return	'이름 : ' + this.getName() + 
			', 품종 : ' + this.getKind() + 
			', 털길이 : ' + this.getFursize() +
			', 털색: ' + this.getFurcolor() + 
			', 배고픔: ' + this.getHungry() +
			', 눈색 : ' + this.getEyecolor() +
			', 나이 : ' + this.getAge() +
			', 성별 : ' + this.getSex() +
			', 건강 : ' + this.getHealth() +
			', 성격 : ' + this.getCharacter()
}