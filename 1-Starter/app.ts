//                   Data Type --Number-String-Boolean--

let first: number = 123;
// console.log(first);

let firstName: string = "emrah";
let lastName: string = "beyazıt";

let fullName: string = `${firstName} amazing its work (: ${lastName} yes true :D `;
// console.log(fullName);

let isPresent: boolean = true;
// console.log(isPresent);

//                        --Array--
let firstNames: string[] = ["emrah", "beyazıt", "3", "4"];
let arr = [2, "test", true];
let values: (string | number)[] = ["test", 2];
console.log(firstNames.length);
console.log(arr);
console.log(values);
console.log(values[1]);

// for (let index = 0; index < firstNames.length; index++) {
//   console.log(firstNames[index]);
// }
// firstNames.map((item) => {
//   return console.log(item);
// });

//                        --Tuple--

let instructor: [number, string] = [1, "emrah"];
console.log(instructor);
let user: [number, string, boolean];
user = [1, "test", true];
console.log(user);
let arrTest: [number, string][];
arrTest = [
  [1, "emrah"],
  [2, "beyazıt"],
];
console.log(arrTest);

//                        --Object--

let person: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

person = {
  firstName: "emrah",
  lastName: "beyazıt",
  age: 25,
  jobTitle: "Software Developer",
};

console.log(person.age);

//                        --Enum--
//number enum

enum Media {
  NewsPaper = 3,
  Magazine,
  Book,
}
console.log(Media.Magazine);

//String enum

enum PrintMedia {
  NewsPaper = "newpaper",
  Magazine = "newsletter",
  Book = "book",
}
console.log(PrintMedia.Magazine);
