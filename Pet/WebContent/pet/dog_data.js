/**
 * 		 강아지 객체 
 */
// 생성자 생성
function Dog(kind, bodysize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {
	Mammal.call(this, kind, furcolor, hungry, eyecolor, age, sex, health, name, character )
	this.bodysize = bodysize;
}

Dog.prototype = new Mammal();

Dog.prototype.setBodysize = function(bodysize) { this.bodysize = bodysize; };
Dog.prototype.getBodysize = function() { return this.bodysize; };

Dog.prototype.talk = function() {
	this.hungry += 10;
	return ' 멍뭉 멍뭉 말을 합니다.';
}
Dog.prototype.eat = function() {
	this.hungry -= 10;
	this.health += 5;
	return ' 고오급 사료를 먹습니다.';
}
Dog.prototype.sleep = function() {
	this.hungry += 5;
	this.health += 5;
	return ' 쇼파에서 잡니다.';
}
Dog.prototype.play = function() {
	this.hungry += 10;
	this.health += 5;
	return ' 마당에서 뛰어 놉니다.';
}
Dog.prototype.dump = function() {
	this.hungry -= 10;
	this.health += 5;
	return ' 패드에 볼일을 봅니다.';
}
Dog.prototype.hunt = function() {
	this.hungry -= 20;
	this.health += 10;
	return ' 사냥을 합니다.';
}

Dog.prototype.toString = function() {
	return	'이름 : ' + this.name + 
			', 품종 : ' + this.kind + 
			', 크기 : ' + this.bodysize +
			', 털색: ' + this.furcolor + 
			', 배고픔: ' + this.hungry +
			', 눈색 : ' + this.eyecolor +
			', 나이 : ' + this.age +
			', 성별 : ' + this.sex +
			', 건강 : ' + this.health +
			', 성격 : ' + this.character
}