/**
 * 		고양이 객체 js
 */

// 생성자 생성
function Dog(kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {

	Mammal.call(this, kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character )
}

Dog.prototype = new Mammal();

Dog.prototype.setFursize = function(fursize) { this.fursize = fursize; };
Dog.prototype.getFursize = function() { return this.fursize; };

Dog.prototype.talk = function() {
	this.hungry += 10;
	this.health -= 10;
	return ' 멍뭉 멍뭉 말을 합니다.';
}
Dog.prototype.eat = function() {
	this.hungry -= 10;
	return ' 고오급 사료를 먹습니다.';
}

Dog.prototype.toString = function() {
	return	'이름 : ' + this.name + 
			', 품종 : ' + this.kind + 
			', 털길이 : ' + this.fursize +
			', 털색: ' + this.furcolor + 
			', 배고픔: ' + this.hungry +
			', 눈색 : ' + this.eyecolor +
			', 나이 : ' + this.age +
			', 성별 : ' + this.sex +
			', 건강 : ' + this.health +
			', 성격 : ' + this.character
}