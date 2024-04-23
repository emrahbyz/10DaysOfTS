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
//                        --Union type--
let code: string | number = 123;
console.log(code);

//                        --Any--
//Tip any olduğu zaman  tip farketmeksızın her bir değeri kabul ediyorum.
//Anlamına gelir ve bir hata almaz önerilmesede hayat kurtarıcı olabilir.
let someThing: any = "hello";

someThing = 45;
console.log(someThing);

let arrs: any[] = ["john", 212, true];
console.log(arrs);

//                        --Void--
//Bir fonks'da fonk geriye  değer döndürmüyorsa bunu void ile belirtebiliyoruz.
function sayHello(): void {}
//                        --Never--
///Bir fonks'da sadece hata dönecekse never atanır

//never ile void arasındaki fark voide null ve undefined atanabilir ama nevere atanamaz
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
throwError("hata");
