/**
 * 		고양이 객체 생성 및 기능 구현
 */

var cat1 = new Cat();
cat1.setKind('러시안블루');
cat1.setFursize('단모');
cat1.setFurcolor('회색');
cat1.setEyecolor('에메랄드');
cat1.setHungry(80);
cat1.setAge(10);
cat1.setSex('여아');
cat1.setHealth(60);
cat1.setName('설향');
cat1.setCharacter('까칠');

console.log(cat1.info());
console.log(cat1.getName() + cat1.play());
console.log(cat1.getName() + cat1.dump());
console.log(cat1.getName() + cat1.eat());
console.log(cat1.getName() + cat1.talk());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.getName() + cat1.sleep());
console.log(cat1.info());

var ddol = new Parrot('GreenChiconewer','Green','Good','middle','DDol','normal', 'Gray');
ddol.cry();
console.log(ddol.toString());