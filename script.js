//complete this code
class Person {
	constructor(name,age){
		this.name = name,
	this.age = age
	}
	get name(){
	return this.name
}
get age(){
	return this.age
}
set age(newAge){
	this.age = newAge
}
}

const person = new Person("Abhiskek", 23)
console.log(person.name);
person.age =30;
console.log(person.age);

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	
	study(){console.log(`${this.name} is studying`);
		   }
}
const student = new Student("Musharraf",23)
student.study()

class Teacher extends Person {
constructor(name,age){
super(name,age)
}
	teach(){console.log(`${this.name}` is teaching)}
}
const teacher = new Teacher("Bob",40);
teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
