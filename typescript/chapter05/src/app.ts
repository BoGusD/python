class Department {
  //private id:string;
  //private name: string; // public이 생략되어 있음

  //private 내부 객체 안에서만 활용 가능
  private employees: string[] = [];

  //readonly 추후에 타입이 바뀌지 않도록 고정해두는 옵션 const와 비슷한 개념

  constructor(private id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department:(${this.id}) + ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeImformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //super를 입력해서 상속 부분을 호출해야지 다음 문장에 this. 키워드 사용가능
    super(id, "IT");
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

//private 내부 객체 안에서만 활용 가능
// accounting.employees[2] = "Anna";

it.describe();
it.name = "new name";
it.printEmployeeImformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.printReports();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
