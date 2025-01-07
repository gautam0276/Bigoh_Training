/*
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
    );
    if (hoursWorked)
      return (project = {
        project_id: project.project_id,
        name: project.name,
        hours_worked: hoursWorked.hours_worked,
        rating: project.rating,
      });
  });

  const completeData = employeeProjects.filter((data) => data != undefined);

//   console.log(completeData);

  return {
    ...employee,
    totalWorkingHours: totalHours,
    averageRating:
      totalRating / totalRatingArray.filter((data) => data != undefined).length,

    employeeData: completeData,
    
  };
});
// console.log(array)

*/

// ques TABLE DATA

data = {
  company: {
    departments: [
      {
        name: "Engineering",

        employees: [
          { id: 1, name: "Alice", role: "Engineer" },

          { id: 2, name: "Bob", role: "Senior Engineer" },
        ],
      },

      {
        name: "HR",

        employees: [
          { id: 3, name: "Carol", role: "HR Manager" },
          { id: 5, name: "Carol", role: "HR Manager" },
        ],
      },
    ],
  },
};

function manageCompany(object, operation, key, info) {
  let details = { ...object };

  if (operation === "add") {
    details.company.departments.forEach((department) => {
      if (department.name === key) {
        department.employees.push(info);
      }
    });
    return details;
  } else if (operation === "remove") {
    details.company.departments.forEach((department) => {
      if (department.name === key)
        department.employees = department.employees.filter(
          (employee) => employee.id !== info.id
        );
    });
  } else if (operation === "update") {
    const d = manageCompany(data, "remove", key, info);
    return manageCompany(d, "add", key, info);
  } else if (operation === "findAllEmployee") {
    let a;
    details.company.departments.forEach((department) => {
      if (department.name === key) {
        a = department.employees;
      }
    });
    return a;
  } else if (operation === "findEmployee") {
    let a;
    details.company.departments.forEach((department) => {
      if (department.name === key) {
        a = department.employees.find((employee) => employee.id === info.id);
      }
    });
    return a;
  }
}
console.log(
  manageCompany(data, "findEmployee", "Engineering", { id: 2 }),
  manageCompany()
);

//   details = data.company.departments.map((department) => {
//     department.employees.push({ id: 3, name: "Rajat", role: "Tech Lead" });
//     department.employees.shift()
//     return department;
//   });
//   return details;

// let arr={"id":3,"name":"Rajat","role":"Tech Lead"}

// arr.push(details)
// company.departments.employees={"id":3,"name":"Rajat","role":"Tech Lead"}

// const employeeProjects = projects.map((project) => {
//     const hoursWorked = project.hours.find(
//       (record) => record.employee_id === employee.employee_id
//     );
//     if (hoursWorked)
//       return (project = {
//         project_id: project.project_id,
//         name: project.name,
//         hours_worked: hoursWorked.hours_worked,
//         rating: project.rating,
//       });
//   });
