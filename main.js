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



class PersonAccountForIncome {
  constructor(income, incomeDescription) {
      this.income = income,
      this.incomeDescription = incomeDescription
  }
}
class PersonAccountForExpense {
  constructor(expense, expenseDescription) {
      this.expense = expense,
      this.expenseDescription = expenseDescription
  }
}


//Question1
//Main Account Class
class PersonAccount {
  constructor(firstName, lastName, totalIncomes, totalExpenses, accountBalance){
    this.firstName = firstName,
    this.lastName = lastName,  
    this.allIncomes = [],
    this.allExpenses = [],
    this.totalIncomes = totalIncomes,
    this.totalExpenses = totalExpenses,
    this.accountBalance = accountBalance
  }
  AddIncome(income, incomeDescription){
      let a = new PersonAccountForIncome(income, incomeDescription)
      this.allIncomes.push(a)
      return a
  }
  AddExpense(expenses, expenseDescription){
      let b = new PersonAccountForExpense(expenses, expenseDescription)
      this.allExpenses.push(b)
      return b
  }
  totalIncome(){
      let totalIncomes = 0;
      this.allIncomes.forEach(element => {
          totalIncomes += element["income"]                 
      });
      this.totalIncomes = totalIncomes;
  }
  totalExpense(){
      let totalExpenses = 0;
      this.allExpenses.forEach(element => {
          totalExpenses += element["expense"]                 
      });
      this.totalExpenses = totalExpenses;
  }
  accountBalances(){
      this.accountBalance = this.totalIncomes - this.totalExpenses;
  }
}
//Income Account Class
class PersonAccountForIncome {
  constructor(income, incomeDescription) {
      this.income = income,
      this.incomeDescription = incomeDescription
  }
}
//Expense Account Class
class PersonAccountForExpense {
  constructor(expense, expenseDescription) {
      this.expense = expense,
      this.expenseDescription = expenseDescription
  }
}
let newAccount = new PersonAccount("Moin","Uddin");
newAccount.AddIncome(50000, "This is fifty Thousand Income");
newAccount.AddIncome(55000, "This is fifty five Thousand Income");
newAccount.AddExpense(40000, "This is forty Thousand Expense");   
newAccount.AddExpense(35000, "This is thirty five Thousand Expense");  
newAccount.totalIncome();
newAccount.totalExpense();
newAccount.accountBalances();     
console.log(newAccount)