/**
 * 		고양이 객체 생성 및 기능 구현
 */

var cat1 = new Cat();
cat1.setKind('러시안블루');
cat1.setFursize('단모');
cat1.setFurcolor('회색');
cat1.setEyecolor('에메랄드');
cat1.setHungry(50);
cat1.setAge(10);
cat1.setSex('여아');
cat1.setHealth(60);
cat1.setName('설향');
cat1.setCharacter('까칠');

console.log(cat1.toString());
console.log('=========================================================================');
console.log(cat1.getName() + cat1.play());
console.log(cat1.getName() + cat1.dump());
console.log(cat1.getName() + cat1.eat());
console.log(cat1.getName() + cat1.talk());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log('=========================================================================');
console.log(cat1.toString());

console.log('=========================================================================');
console.log('=========================================================================');

var dog1 = new Dog('말티즈', '중모', '회색', 60, '검정', 2, '남아', 80, '마티즈', '활발');
//dog1.setKind('러시안블루');
//dog1.setFursize('단모');
//dog1.setFurcolor('회색');
//dog1.setEyecolor('에메랄드');
//dog1.setHungry(50);
//dog1.setAge(10);
//dog1.setSex('여아');
//dog1.setHealth(60);
//dog1.setName('설향');
//dog1.setCharacter('까칠');

console.log(dog1.toString());
console.log('=========================================================================');
console.log(dog1.getName() + dog1.play());
console.log(dog1.getName() + dog1.dump());
console.log(dog1.getName() + dog1.eat());
console.log(dog1.getName() + dog1.talk());
console.log(dog1.getName() + dog1.sleep());
console.log(dog1.getName() + dog1.sleep());
console.log(dog1.getName() + dog1.sleep());
console.log(dog1.getName() + dog1.sleep());
console.log('=========================================================================');
console.log(dog1.toString());































/**
 * 		상진씨 조류 독감
 */


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

dal.jump();
dol.breed();
dul.eat();

cocks.sort(function(left, right){return right.hungryState - left.hungryState})

for(i=0; i<parrots.length; i++){
	console.log(cocks[i].toString());
}







