let variable = "Hello";
variable = 1;

let age = 24;
age = "eigthrren";

let testString: string;

testString = "harsh";
testString = 123;

let testNumber: number;
testNumber = 123;
testNumber = "123";

let testStringOrNumber: string | number;
testStringOrNumber = 123;
testStringOrNumber = "harsh";
testStringOrNumber = [];

// //TODO Arrays

let names = ["harsh", "adsh"];
// names.push(23);
names.push("New Name");

let testStringArray: string[];
testStringArray = ["one", "two", "three"];
testStringArray = [1, 2, 3];

let testNumberArray: number[];
testNumberArray = [false, "Hey", 23];
testNumberArray = [5, 6, 7];

let NumberNStingArraya: (string | number)[];
NumberNStingArraya = [1, "Hey", 2];

// //TODO Objects
let user = {
  username: "Harsh",
  age: 24,
  isAdmin: false,
};

user.username = 123;
user.isAdmin = true;
user.phone = "123asd5466465";

let userObj: { username: string; age: number; isAdmin: boolean };

userObj = {
  username: "Harsh",
  age: 24,
  isAdmin: true,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "Harsh",
  age: 24,
  isAdmin: true,
  phone: "+123654897",
};

//  //TODO Any

let testAny;
testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [];
testAny = {};

let testAnyArray: any[];
testAnyArray = [1, "two", false, [], {}];

//  //Todo Functions

let sayHi = () => {
  console.log("Hi, Welcome to TS!");
};

// sayHi = "hi";

const funcReturnString = (): string => {
  console.log("Hello");
  return "Harsh";
};
funcReturnString();

const multipleFunc = (num: number) => {
  return num * 2;
};

const multipleFunc2 = (num: number): number => {
  return num * 2;
};

const multipleFunc3 = (num: number): void => {
  console.log(num * 2);
};

const sum = (n1: number, n2: number, extraNum?: number) => {
  return n1 + n2;
};
sum(2, 3);

const func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// //TODO Type Alliances
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

const betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

const writeFunc: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "harsh",
  age: 24,
  theme: "dark",
};

//  //TODO Interfaces

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmp extends IUser {
  empId: string;
}

const emp: IEmp = {
  username: "John",
  email: "John@example.com",
  age: 24,
  empId: "empId5489",
};

const client: IUser = {
  username: "tom",
  email: "tom@example.com",
  age: 26,
};

//  //TODO Generics

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "Post title",
  desc: "post desc",
  extra: ["1", "2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<{ id: number; username: string }> = {
  id: 1,
  title: "Post title",
  desc: "post desc",
  extra: [{ id: 1, username: "harsh" }],
};

const testMe2: IPostBetter<ICategory> = {
  id: 1,
  title: "Post title",
  desc: "post desc",
  extra: [{ id: 1, title: "harsh" }],
};
