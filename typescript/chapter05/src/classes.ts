//pulbic 외부에서도 사용가능
//private 내부에서만 사용가능 >> 싱글턴 패턴 (특정 클래스의 인스턴스를 정확히 하나만 갖도록 하는것)
//protected 기존에 내부에서만 사용가능하지만 설정을 통해 외부에서도 사용 가능

//추상화 클래스는 자체적으로 인스턴스화 불가능
abstract class Department {
  static fiscalYear = 2020;
  //private id:string;
  //private name: string; // public이 생략되어 있음

  //private 내부 객체 안에서만 활용 가능
  protected employees: string[] = [];

  //readonly 추후에 타입이 바뀌지 않도록 고정해두는 옵션 const와 비슷한 개념

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }
  //정적 메서드
  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department - ID : " + this.id);
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  //setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  //싱글톤 패턴
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department = ID: " + this.id);
  }
  addEmployee(name: string) {
    if (name == "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

//private 내부 객체 안에서만 활용 가능
// accounting.employees[2] = "Anna";

it.describe();
it.name = "new name";
it.printEmployeeImformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year End Report";

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeImformation();
accounting.describe();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
