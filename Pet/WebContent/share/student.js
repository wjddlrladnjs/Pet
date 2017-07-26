/**
 * 
 */

function StudentInfo(number, name, age, kor, eng, mat){
	this.number = number;
	this.name = name;
	this.age = age;
	this.kor = kor;
	this.eng = eng;
	this.mat = mat;
	this.sum = this.kor + this.eng + this.mat;
	this.avg = Math.floor(this.sum/3);
	this.rate = StudentRate(Math.floor(this.avg/10));
	//console.log(this.number, this.name, this.age, this.kor, this.eng, this.mat, this.sum, this.avg, this.rate);
	this.result = ' Number: '+this.number +' Name: '+ this.name +' Age: '+ this.age + ' Kor: '+this.kor + ' Eng: '+this.eng + ' Mat: '+this.mat + ' Sum: '+this.sum + ' Avg: '+this.avg + ' Rate: '+this.rate;
}
//StudentInfo.prototype.sum = function(){
//	this.sum = this.kor + this.eng + this.mat;
//}
//
//StudentInfo.prototype.avg = function(){
//	this.avg = Math.floor(this.sum/3);
//}
//
//StudentInfo.prototype.rate = function(){
//	StudentRate(Math.floor(this.avg/10));
//}

function StudentRate(avg){
	switch(avg){
	case 10: case 9: 
		return 'A';
	case 8: 
		return 'B';
	case 7: 
		return 'C';
	case 6: 
		return 'D';
	default: 
		return 'E';
	}
	
}
var ann = StudentInfo();
var biki = StudentInfo();
var cony = StudentInfo();
var dalring = StudentInfo();
var ebra = StudentInfo();
var students = [ann, biki, cony, dalring, ebra];
students[0] = new StudentInfo('0001','Ann',18,90,80,90);
//students[0].sum();
//students[0].avg();
//students[0].rate();
students[1] = new StudentInfo('0002','biki',19,100,90,90);
students[2] = new StudentInfo('0003','cony',18,70,70,80);
students[3] = new StudentInfo('0004','dalring',20,80,90,80);
students[4] = new StudentInfo('0005','ebra',18,85,95,85);

students.sort(function(left, right){return right.sum-left.sum});

for(var i=0; i<students.length; i++){
	console.dir(students[i].result);
}
