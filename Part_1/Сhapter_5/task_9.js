let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user

//----

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for(let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name
    }
  }
  return maxName;
}