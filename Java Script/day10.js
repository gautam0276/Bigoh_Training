// class classname{
//     constructor (param1, param2 ){

//         this.param1=param1;
//         this.param2=param2;
//     }

//     displayInfo(){
//         console.log(`${this.param} and ${this.param2}`)
//     }

// }

// console.log("ENCAPSULATION")

// class student{

//     constructor(studentName, studentMarks){
//      var studentName 
//      var studentMarks
//     }

//     setName(studentName){
//         this.studentName=studentName
//     }
//     setmarks(studentMarks){
//         this.studentMarks=studentName
//     }
//     getName(){
//         return this.studentNarks
//     }
//     getMarks(){
//         return this.studentMarks
//     }

// }
// const s1=new student(console.log(s1))
// studentconsole.log(s1)



// class Person{
//       #name
//       #age
//     constructor(name , age){
//         this.#name=name
//         this.#age=age
//     }

//     get name(){
//         return this.#name
//     }

//     set name(newName){
//         return #name=newName
//     }

//     get age(){
//         return this.#age
//     }

//     set age(newAge){
//         if(newAge>=0){
//             this.#age=newAge
//         }
//         else{
//             console.log("age can't be negative")
//         }
//     }

// }

// let person =new Person("Ritesh",30)

// console.log(person.name)
// person.name="Gautam"
// console.log(person.name)

// console.log(person.age)
// person.age=-5
// console.log(person.age)


// class Animal{
//     constructor(name,colour){
//     this.name=name
//     this.colour=colour
//     }

//     run(){
//         console.log(this.name + " is running ")
//     }
//     shout(){
//         console.log(this.name + " is shouting ")
//     }
// }

//     class Monkey extends Animal{
//         eatbanana(){
//         console.log(this.name +" eat banana")
//     }
//     }
//     let ani=new Animal("chimpu","Brown")
//     let m=new Monkey("jaggu","Blue")

//     ani.run()
//     m.eatbanana()
//     ani.shout()

// over riding 

class A{
    // let c 
    // let b

    funAdd(a,b){
        return a+b
    }
}
class B{
    funAdd(a,b){
        return a-b
    }
}
const objA=new A()
console.log(objA.funAdd(5,3))
const objB=new B()
console.log(objB.funAdd(5,2))


















// class animal{

//     login(){
//         console.log("login the app")
//     }
//     logout(){
//         console.log("")
//     }

    
// }


