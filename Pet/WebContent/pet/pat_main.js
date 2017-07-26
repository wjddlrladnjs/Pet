/**
 * 		고양이 객체 생성 및 기능 구현
 */

var cat1 = new Cat();
cat1.setKind('러시안블루');
cat1.setFursize('단모');
cat1.setFurcolor('회색');
cat1.setEyecolor('에메랄드');
cat1.setHungry(20);
cat1.setAge(10);
cat1.setSex('여아');
cat1.setHealth(60);
cat1.setName('설향');
cat1.setCharacter('까칠');

var cat2 = new Cat();
cat2.setKind('코숏');
cat2.setFursize('단모');
cat2.setFurcolor('얼룩');
cat2.setEyecolor('갈색');
cat2.setHungry(10);
cat2.setAge(4);
cat2.setSex('여아');
cat2.setHealth(100);
cat2.setName('초롱');
cat2.setCharacter('활발');

var cat3 = new Cat();
cat3.setKind('페르시안');
cat3.setFursize('장모');
cat3.setFurcolor('흰색');
cat3.setEyecolor('파랑');
cat3.setHungry(50);
cat3.setAge(6);
cat3.setSex('남아');
cat3.setHealth(90);
cat3.setName('고양2');
cat3.setCharacter('도도');

var cats = [];
cats.push(cat1);
cats.push(cat2);
cats.push(cat3);
cats.sort(function(a, b) {return a.age - b.age})

console.log('=====고양이====================================================================');
console.log('=====속  성====================================================================');
cats.forEach(function(element, index, array) {
	console.log(index + '번 째 고양이 -> ' + element);
});
console.log('=====기  능====================================================================');
console.log(cat1.getName() + ' => '  + cat1.dump() + cat1.talk() + cat1.sleep());
console.log(cat2.getName() + ' => '  + cat2.eat() + cat2.sleep() + cat2.dump());
console.log(cat3.getName() + ' => '  + cat3.scratch() + cat3.play() + cat3.talk());
console.log('==============================================================================');

var dog1 = new Dog('말티즈', '소형', '회색', 60, '검정', 2, '남아', 20, '마티즈', '활발');
var dog2 = new Dog('비글', '중형', '갈색', 10, '갈색', 12, '남아', 90, '대천사', '착함');
var dog3 = new Dog('진돗개', '대형', '갈색', 100, '갈색', 7, '여아', 60, '김진도', '충성');

var dogs = [];
dogs.push(dog1);
dogs.push(dog2);
dogs.push(dog3);
dogs.sort(function(a, b) {return b.health - a.health})

console.log('=====강아지====================================================================');
console.log('=====속  성====================================================================');
dogs.forEach(function(element, index, array) {
	console.log(index + '번 째 강아지 -> ' + element);
});
console.log('=====기  능====================================================================');
console.log(dog1.getName() + ' => ' +  dog1.dump() + dog1.talk() + dog1.sleep());
console.log(dog2.getName() + ' => '  + dog2.eat() + dog2.sleep() + dog2.dump());
console.log(dog3.getName() + ' => '  + dog3.hunt() + dog3.play() + dog3.talk());
console.log('===============================================================================');































/**
 * 		상진씨 조류 독감
 */

console.log('=====앵무새====================================================================');
console.log('=====속  성====================================================================');
////////////////////////////////////////////앵무새
var ddol = new Parrot();
ddol.setKind('GreenChiconewer');
ddol.setBodycolor('Green');
ddol.setHealth('Good');
ddol.setSize('middle');
ddol.setName('DDol');
ddol.setLanguage('normal');
ddol.setBeakcolor('Gray');
ddol.setHungryState(100);

var pary = new Parrot();
pary.setKind('HyacinthMacaw');
pary.setBodycolor('Blue');
pary.setHealth('Normal');
pary.setSize('middle');
pary.setName('BB');
pary.setLanguage('Low');
pary.setBeakcolor('Blueblack');
pary.setHungryState(100);

var pool = new Parrot();
pool.setKind('Ara Macao');
pool.setBodycolor('Rainbow');
pool.setHealth('Great');
pool.setSize('middle');
pool.setName('Rainbow');
pool.setLanguage('Low');
pool.setBeakcolor('Beige');
pool.setHungryState(100);

var parrots = [ddol, pary, pool];

for(i=0; i<parrots.length; i++){
	console.log(parrots[i].toString());
}
console.log('=====닭========================================================================');
console.log('=====속  성====================================================================');
///////////////////////////////////////////Cock
var dal = new Cock();
dal.setKind('KoreanCock');
dal.setBodycolor('GoldenRed');
dal.setHealth('Great');
dal.setSize('middle');
dal.setName('Dal');
dal.setAggression('Aggressive');
dal.setSex('Cock');
dal.setHungryState(100);

var dol = new Cock();
dol.setKind('WhiteCochin');
dol.setBodycolor('White');
dol.setHealth('Normal');
dol.setSize('Big');
dol.setName('Dol');
dol.setAggression('Normal');
dol.setSex('hen');
dol.setHungryState(100);

var dul = new Cock();
dul.setKind('BlueRoseComb');
dul.setBodycolor('GrayBlue');
dul.setHealth('Good');
dul.setSize('small');
dul.setName('Dul');
dul.setAggression('Not Aggressive');
dul.setSex('Cock');
dul.setHungryState(100);

var cocks = [dal, dol, dul];

for(i=0; i<parrots.length; i++){
	console.log(cocks[i].toString());
}

console.log('=====메서드====================================================================');

dal.jump();
dol.breed();
dul.eat();

cocks.sort(function(left, right){return right.hungryState - left.hungryState})

for(i=0; i<parrots.length; i++){
	console.log(cocks[i].toString());
}
console.log('===============================================================================');