/**
 * 		고양이 객체 js
 */

// 생성자 생성
function Cat(kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {
	
	this.setKind = function(kind) { this.kind = kind; };
	this.getKind = function() { return this.kind; };
	
	this.setFursize = function(fursize) { this.fursize = fursize; };
	this.getFursize = function() { return this.fursize; };
	
	this.setFurcolor = function(furcolor) { this.furcolor = furcolor; };
	this.getFurcolor = function () { return this.furcolor; };
	
	this.setHungry = function(hungry) { this.hungry = hungry; };
	this.getHungry = function() { return this.hungry; };

	this.setEyecolor = function(eyecolor) { this.eyecolor = eyecolor; };
	this.getEyecolor = function() { return this.eyecolor; };
	
	this.setAge = function(age) { this.age = age; };
	this.getAge = function() { return this.age; };
	
	this.setSex = function(sex) { this.sex = sex; };
	this.getSex = function() { return this.sex; };
	
	this.setHealth = function(health) { this.health = health; };
	this.getHealth = function() { return this.health; };
	
	this.setName = function(name) { this.name = name; };
	this.getName = function () { return this.name; };
	
	this.setCharacter = function(character) { this.character = character; };
	this.getCharacter = function() { return this.character; };
	
}

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
	return		'이름 : ' + this.getName() + 
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