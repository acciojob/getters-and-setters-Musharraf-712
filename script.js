//complete this code
class Person {
	constructor(name,age){
		this._name = name,
	this._age = age
	}
	get name(){
	return this._name
}
get age(){
	return this._age
}
set age(newAge){
	this.age = newAge
}
}



class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	
	study(){console.log(`${this.name} is studying`);
		   }
}
const student = new Student("John",30)
student.study()

class Teacher extends Person {
constructor(name,age){
super(name,age)
}
	teach(){console.log(`${this.name} is teaching`)}
}
const teacher = new Teacher("Jon",30);
teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
