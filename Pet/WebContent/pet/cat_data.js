/**
 * 		고양이 객체 js
 */

// 생성자 생성
function Cat(kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {

	Mammal.call(this, kind, furcolor, hungry, eyecolor, age, sex, health, name, character )
}

Cat.prototype = new Mammal();

Cat.prototype.setFursize = function(fursize) { this.fursize = fursize; };
Cat.prototype.getFursize = function() { return this.fursize; };

Cat.prototype.talk = function() {
	this.hungry += 10;
	this.health -= 10;
	return ' 고양 고양 말을 합니다.';
}
Cat.prototype.eat = function() {
	this.hungry -= 10;
	return ' 참치를 먹습니다.';
}

Cat.prototype.toString = function() {
	return	'이름 : ' + this.name + 
			', 품종 : ' + this.kind + 
			', 털길이: ' + this.fursize +
			', 털색: ' + this.furcolor + 
			', 배고픔: ' + this.hungry +
			', 눈색 : ' + this.eyecolor +
			', 나이 : ' + this.age +
			', 성별 : ' + this.sex +
			', 건강 : ' + this.health +
			', 성격 : ' + this.character
}