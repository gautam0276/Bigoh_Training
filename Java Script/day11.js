// class student{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// printData(){
//     console.log(`${this.name} is my name and ${this.age} is my age`)
// }
// }
// const student1= new student("raghav",22)
// student1.printData()

// class employee{
//     constructor(name,designation){
//         this.name=name
//         this.designation=designation
//     }

//     printData(){
//         console.log(`${this.name} is my name and ${this.designation} is my designation`)
//     }
// }
// const employee1= new employee("Ritesh","front end Developer")
// employee1.printData()



// class printClass{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }

//     greet(){
//         console.log(`${this.name} is my name and my age is ${age}`)
//     }

//     birthdayCelebration(){
//         this.age++
//         console.log(`happy birthday 2 u  ${this.name} and you are getting one year older ${age}`)
//     }
// }

// const printClass1=new printClass ("raju", 23)
// const printClass2=new printClass ("himanshu",22)

// console.log(printClass1.name)
// console.log(printClass2.age)


// printClass1.greet()
// printClass2.birthdayCelebration()



//   Encapsulation example

// class Data{
//     constructor(name, age){
//         this._name=name
//         this._age=age
//     }
// getName(){
//     return this._name
// }
// getAge(){
//     return this._age
// }

// }
// const data=new Data("himanshu",22)

// console.log(data.getName())
// console.log(data.getAge())


// INHERITANCE 

// class parentClass{
//     constructor(name){
//         this.name=name
//     }
//     greet(){
//         console.log(`hello my name is ${this.name}`)
//     }
// }
// class ChildClass extends parentClass{
//     constructor(name,age){
//         super(name)
//         this.age=age
//     }

//     introduce(){
//         console.log(`i am ${this.age} years old`)
//     }
// }

// const child=new ChildClass("Ravi", 55)
// child.greet()
// child.introduce()


// class Animal{           //isme humne constructor nhi banaia lkin system by default apna constructor generate krta h or usse run krta h
//     speak(){            // isme to humne ek function banaia h
//         console.log(`Animal sound `)  // constructor khud call krwata h or isme humne last m call krwaya h
//     }
// }
// class Dog extends Animal{
//     barks(){
//         console.log((`dog barks`))
//     }
// }
// class Cat extends Dog{
//     speak(){
//         console.log(`meaw meaw`)
//     }
// }
// const cat=new Cat()

// cat.speak()
// cat.barks()
// cat.speak()



// Multipe Inheritance

// let travel={
//     fun(){
//         console.log(`i am travelling Delhi to Mumbai`)
//     }
// }

// let food={
//     enjoy(){
//         console.log(`lets enjoys the food`)
//     }
// }

// class data{
//     constructor(name){
//         this.name=name
//     }
// }
 
// Object.assign(data.prototype,food,travel)

// const Data=new data("rahul")
// Data.enjoy()
// Data.fun()


// class Vehicle{
//     horn(){
//         console.log(`vehicle horn sound`)
//     }
// }
// class Car{
//     horn(){
//         console.log(`car horn sound`)
//     }
// }
// class Bike{
//     horn(){
//         console.log(`bike horn sound`)
//     }
// }
// class Scooty{
//     horn(){
//         console.log(`scooty horn sound`)
//     }
// }

// const scooty=new Scooty()
// const bike=new Bike()
// const car=new Car()


// scooty.horn()
// bike.horn()
// car.horn()



// class Vehicle{
//     horn(){
//         console.log(`vehicle horn sound`)
//     }
// }
// class Car extends Vehicle{
//     constructor(name){
//     super()
//         this.name=name
//     }

//     horn(){
//         console.log(`${this.name} car horn sound`)
//     }
// }
// class Bike extends Vehicle{
//     horn(){
//         console.log(`bike horn sound`)
//     }
// }
// class Scooty extends Vehicle{
//     horn(){
//         console.log(`scooty horn sound`)
//     }
// }

// const scooty=new Scooty()
// const bike=new Bike()
// const car=new Car("Honda City")


// scooty.horn()
// bike.horn()
// car.horn()


// class A{
//     // let a
//     function funAdd(a,b){
//         return a+b
//     }
// }
// class B{
//     function fundAdd(a,b){
//         return a-b
//     }
// }


// const obj1={
//     name:"gautam",
//     company:"BigOh",
//     number:123456
// }

// obj1.name="ritesh"

// console.log(obj1.entries)

// const Target={
//     name:"gautam",
//     company:"BigOh",
//     number:123456
// }
// const Source={
//     company:"BigOh",
//     number:123456,
//     "Address":"Dwarka"
// }

// Object.assign(Source,Target)
// console.log(Source)



// const user={
//     name:"gautam",
//     company:"BigOh",
//     number:123456
// }
// const obj2={
//     company:"BigOh",
//     number:123456,
//     "Address":"Dwarka"
// }

// const entries=Object.entries(user)
// console.log(entries)

// const entriess=Object.fromEntries(entries)
// console.log(entriess)


// const user={
//     name:"gautam",
//     company:"BigOh",
//     number:123456
// }

// const keys=Object.keys(user)
// console.log(keys)


// const user={

//     name:"gautam",
//     company:"BigOh",
//     city:"New Delhi"
// }
// const values=Object.values(user)
// console.log(values)



// const data={
//     employee1:{
//         name:"Jhon",
//         age:22
//     },
//     employee2:{
//         name:"Gautam",
//         age:23
//     },
//     employee3:{
//         name:"Ritesh",
//         age:24
//     }

// }
// const bundle=Object.groupBy(data (items) => age)






    const students = [
      {
        "id": "S001",
        "name": "John Doe",
        "age": 20,
        "gender": "Male",
        "class": "12A",

        "grades": {
          "math": 85,
          "science": 92,
          "english": 88,
          "history": 76
        },
        "attendance": {
          "total_classes": 200,
          "classes_attended": 180
        },
        "guardian": {
          "name": "Jane Doe",
          "contact": "123-456-7890"
        }
      },
      {
        "id": "S002",
        "name": "Mary Smith",
        "age": 19,
        "gender": "Female",
        "class": "12B",
        "grades": {
          "math": 90,
          "science": 87,
          "english": 91,
          "history": 80
        },
        "attendance": {
          "total_classes": 200,
          "classes_attended": 190
        },
        "guardian": {
          "name": "Robert Smith",
          "contact": "987-654-3210"
        }
      },
      {
        "id": "S003",
        "name": "Alex Johnson",
        "age": 18,
        "gender": "Non-Binary",
        "class": "11C",
        "grades": {
          "math": 78,
          "science": 85,
          "english": 84,
          "history": 89
        },
        "attendance": {
          "total_classes": 180,
          "classes_attended": 160
        },
        "guardian": {
          "name": "Emily Johnson",
          "contact": "555-123-4567"
        }
      },
      {
        "id": "S004",
        "name": "Liam Brown",
        "age": 21,
        "gender": "Male",
        "class": "12A",
        "grades": {
          "math": 88,
          "science": 79,
          "english": 93,
          "history": 82
        },
        "attendance": {
          "total_classes": 210,
          "classes_attended": 190
        },
        "guardian": {
          "name": "Olivia Brown",
          "contact": "444-555-6666"
        }
      },
      {
        "id": "S005",
        "name": "Sophia Wilson",
        "age": 19,
        "gender": "Female",
        "class": "12B",
        "grades": {
          "math": 92,
          "science": 91,
          "english": 89,
          "history": 84
        },
        "attendance": {
          "total_classes": 200,
          "classes_attended": 198
        },
        "guardian": {
          "name": "Daniel Wilson",
          "contact": "123-321-1234"
        }
      },
      {
        "id": "S006",
        "name": "Mason Martinez",
        "age": 18,
        "gender": "Male",
        "class": "11D",
        "grades": {
          "math": 77,
          "science": 72,
          "english": 75,
          "history": 78
        },
        "attendance": {
          "total_classes": 180,
          "classes_attended": 150
        },
        "guardian": {
          "name": "Laura Martinez",
          "contact": "111-222-3333"
        }
      },
      {
        "id": "S007",
        "name": "Emma Davis",
        "age": 17,
        "gender": "Female",
        "class": "11A",
        "grades": {
          "math": 95,
          "science": 98,
          "english": 94,
          "history": 90
        },
        "attendance": {
          "total_classes": 170,
          "classes_attended": 165
        },
        "guardian": {
          "name": "James Davis",
          "contact": "555-444-1234"
        }
      },
      {
        "id": "S008",
        "name": "Lucas Anderson",
        "age": 18,
        "gender": "Male",
        "class": "11B",
        "grades": {
          "math": 83,
          "science": 80,
          "english": 85,
          "history": 81
        },
        "attendance": {
          "total_classes": 185,
          "classes_attended": 175
        },
        "guardian": {
          "name": "Karen Anderson",
          "contact": "999-888-7777"
        }
      },
      {
        "id": "S009",
        "name": "Ava Thompson",
        "age": 20,
        "gender": "Female",
        "class": "12C",
        "grades": {
          "math": 86,
          "science": 88,
          "english": 87,
          "history": 83
        },
        "attendance": {
          "total_classes": 190,
          "classes_attended": 180
        },
        "guardian": {
          "name": "David Thompson",
          "contact": "333-222-1111"
        }
      },
      {
        "id": "S010",
        "name": "Ethan White",
        "age": 19,
        "gender": "Male",
        "class": "12D",
        "grades": {
          "math": 79,
          "science": 75,
          "english": 82,
          "history": 77
        },
        "attendance": {
          "total_classes": 200,
          "classes_attended": 170
        },
        "guardian": {
          "name": "Sarah White",
          "contact": "666-777-8888"
        }
      }
    ]
  
   

const grouped=Object.groupBy(students,(item)=>students.age)

console.log(grouped)


