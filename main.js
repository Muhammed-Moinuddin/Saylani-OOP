class PersonAccount {
    constructor( income, incomeDescription) {
      this.income = income;
      this.incomeDescription = incomeDescription;
    //   this.totalIncome(income);
    //   this.totalExpense(expense);
    //   this.addIncome(income);
    //   this.addExpense(expense);
    //   this.accountBalance(income,expense);
    }

  }
  class Incomes {
        constructor(){
          this.incomes = []
        }
        // create a new player and save it in the collection
        newIncome(income, incomeDescription){
          let p = new Incomes(income, incomeDescription)
          this.incomes.push(p)
          return p
        }
        get allIncomes(){
                return this.incomes;
         }
}
let check = new Incomes();
check.newIncome("1000","1 Description");
console.log(check.allIncomes)
// class Incomes {
//     constructor(){
//       this.incomes = []
//     }
//     // create a new player and save it in the collection
//     newIncome(income){
//       let i = new PersonAccount(income)
//       this.income.push(i)
//       return i
//     }
//     get allIncomes(){
//         return this.incomes
//       }
// }
// let person1 = new Incomes();
// person1.newIncome(1000);
// console.log(league.allIncomes)



//   let personOne = new PersonAccount("Moin", "Uddin", [{"income":"3000","description":"This is 1 description"},{"income":"2000","description":"This is 2 description"}], [{"expenses":"1000","description":"This is 1 description"},{"expenses":"1200","description":"This is 2 description"}]);
//   document.getElementById("answer").innerHTML =
//   "My account is " + personOne.firstName +  personOne.expenses[0];

// class PersonAccount{
//     firstName = "Moin";
//     lastName = "uddin";
//     incomes = [{income: 100, description: "This is 1 Income"}, {income: 200, description: "This is 2 Income"}];
//     expenses = [{expense: 100, description: "This is 1 Income"}, {expense: 200, description: "This is 2 Income"}];
// }
// document.getElementById("answer").innerHTML = PersonAccount.incomes;

//Question 2
class Automobile {
    constructor (name, model, type) {
        this.name = name;
        this.model = model;
        this.type = type;
        this.start(name);
        this.opendoor();
    }
    start (name) {
        console.log(name + " is ready for drive");
    }
    opendoor () {
        console.log("Door is open");
    }
}
class Car extends Automobile {
    constructor (name, model, type, color) {
        super(name, model, type)
        this.color  = color;
    }
}
class Truck extends Automobile {
    constructor (name, model, type, maxspeed) {
        super(name, model, type)
        this.maxspeed = maxspeed;
    }
}
class Bus extends Automobile {
    constructor (name, model, type, usedfor) {
        super(name, model, type)
        this.usedfor = usedfor;
    }
}

const car1 = new Car("Swift", 2015, " manual type", "red");
document.getElementById("car").innerHTML = "My Car description is " + car1.name + " of " + car1.model + car1.type + " having beautiful " + car1.color + " color." ;

const truck1 = new Truck("Volvo", 2013, " automatic type", "200km/hr");
document.getElementById("truck").innerHTML = "My Truck description is " + truck1.name + " of " + truck1.model + truck1.type + " having Maxspeed of " + truck1.maxspeed ;

const bus1 = new Bus("Tata", 2011, " manual type", "School");
document.getElementById("bus").innerHTML = "My Bus description is " + bus1.name + " of " + bus1.model + bus1.type + " used for " + bus1.usedfor + " purposes." ;
