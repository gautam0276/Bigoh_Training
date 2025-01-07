// // Ques 7

// let obj = {
//   keyOne: "value One",
//   keyTwo: "value Two",
//   keyThree: "value Three",
//   keyFour: {
//     keyA: true,
//     keyB: false,
//     keyC: {
//       keyCOne: "key C one value",
//       keyCTwo: "key C two value",
//       keyCThree: 1234,
//     },
//   },
// };

// function mergeObject(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(`${key}:${obj[key]}`);
//       return `${key}:${obj[key]}`
//     } else {
//       console.log(`${key}:${obj[key]}`);
//     }
//     if(typeof obj[key]=== "object")
//         return mergeObject(obj.key.)
//   }
//   // for (let nestedKey in obj[key]) {
//   //   if (typeof obj[key] === "object") {
//   //     console.log(`${obj[key]}.${obj[nestedKey][key]}`);
//   //   }
//   // }

// }

// console.log(mergeObject(obj));

let employees = [
  {
    employee_id: "E001",
    name: "John Doe",
    role: "Developer",
  },
  {
    employee_id: "E002",
    name: "Jane Smith",
    role: "Designer",
  },
  {
    employee_id: "E003",
    name: "Emily Davis",
    role: "Project Manager",
  },
];

let projects = [
  {
    project_id: "P001",
    name: "Project Alpha",
    hours: [
      { employee_id: "E001", hours_worked: 120 },
      { employee_id: "E002", hours_worked: 80 },
    ],
    rating: 4.5,
  },
  {
    project_id: "P002",
    name: "Project Beta",
    hours: [
      { employee_id: "E001", hours_worked: 150 },
      { employee_id: "E003", hours_worked: 200 },
    ],
    rating: 4.7,
  },
  {
    project_id: "P003",
    name: "Project Gamma",
    hours: [
      { employee_id: "E002", hours_worked: 50 },
      { employee_id: "E003", hours_worked: 60 },
    ],
    rating: 4.0,
  },
];

const array = employees.map((employee) => {
  const totalWorkingHours = projects.map(
    (project) =>
      project.hours.filter(
        (record) => record.employee_id === employee.employee_id
      )[0]?.hours_worked
  );
  const totalHours = totalWorkingHours
    .filter((data) => data != undefined)
    .reduce((acc, item) => acc + item, 0);



  const totalRatingArray = projects.map((project) => {
    const isMyProject = project.hours.find(
      (record) => record.employee_id === employee.employee_id
    );
    if (isMyProject) return project.rating;
  });


  const totalRating = totalRatingArray
    .filter((data) => data != undefined)
    .reduce((acc, item) => acc + item, 0);


  const employeeProjects = projects.map((project) => {
    const hoursWorked = project.hours.find(
      (record) => record.employee_id === employee.employee_id
    )
    if(hoursWorked) return (project = {
      project_id: project.project_id,
      name: project.name,
      hours_worked: hoursWorked.hours_worked,
      rating: project.rating
    });
  });

  const completeData=employeeProjects
  .filter((data)=>data!=undefined)

console.log(completeData);

  return {
    ...employee,
    totalWorkingHours: totalHours,
    averageRating:
      totalRating / totalRatingArray.filter((data) => data != undefined).length,

    employeeData:
      completeData
    // project_id: projects.project_id,
    //   name: projects.name,
    //   hours_worked: hoursWorked,
    //   rating: projects.rating,
  };
});

// const mergeObject=projects.map(project)=>{
//   const
// }

// const ratings=projects.map(
//   (project)=>
//     project.hours.filter(
//       (record)=>record.employee_id === employee.employee_id
//     )[0]
//   )
//   const totalRating = ratings.filter((data)=> data!= undefined)
// console.log(totalRating,employee.employee_id)

// console.log(totalHours, "for", employee.employee_id);
// employees.forEach((item)=>{

// array.push(item)
// })

console.log(array);

// const ids=new Map()

// const obj=employees.map((item)=>{
// return item;
// }) .filter(projects=>{
// return projects.hours.employee_id
// })

// console.log(obj)

// projects.forEach((item)=>{
//     array.push(item)
// })

// const merge=Object.fromEntries(
//     projects.map(item=>[item.employee_id,item])
// )

// console.log(array)

// array.reduce((acc,item)=>{
//     acc+projects.hours.employee_id(item),0
// })

// const array=[]
// arr.foreach((element)=>{
//     const {projects,employee}=element
//     // const obj={}
//     if(obj[projects]){
//         obj[array].push(employee)
//     }
//     else{
//         obj[array]=[employee]
//     }
//     array.push(obj)
// })

// console.log([array])

// const arr=[
//   {
//     project_id: "P001",
//     name: "Project Alpha",
//     hours: [
//       { employee_id: "E001", hours_worked: 120 },
//       { employee_id: "E002", hours_worked: 80 },
//     ],
//     rating: 4.5,
//   }
// ]
// console.log(arr.find((item) => item.hours[1].employee_id === "E002"));
