/**
 * 		고양이 객체
 */
// 생성자 생성
function Cat(kind, fursize, furcolor, hungry, eyecolor, age, sex, health, name, character ) {
	Mammal.call(this, kind, furcolor, hungry, eyecolor, age, sex, health, name, character )
	this.fursize = fursize;
};

Cat.prototype = new Mammal();

Cat.prototype.setFursize = function(fursize) { this.fursize = fursize; };
Cat.prototype.getFursize = function() { return this.fursize; };

Cat.prototype.talk = function() {
	this.hungry += 10;
	return ' 고양 고양 말을 합니다.';
};
Cat.prototype.eat = function() {
	this.hungry -= 10;
	this.health += 5;
	return ' 참치를 먹습니다.';
};
Cat.prototype.sleep = function() {
	this.hungry += 5;
	this.health += 5;
	return ' 침대에서 잡니다.';
};
Cat.prototype.play = function() {
	this.hungry += 10;
	this.health += 5;
	return ' 우다다다를 합니다.';
};
Cat.prototype.dump = function() {
	this.hungry += 10;
	return ' 화장실에서 볼일을 봅니다.';
};
Cat.prototype.scratch = function() {
	this.hungry += 5;
	return ' 스크래칭을 합니다.';
};

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
};