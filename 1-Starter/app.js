//                   Data Type --Number-String-Boolean--
var first = 123;
// console.log(first);
var firstName = "emrah";
var lastName = "beyazıt";
var fullName = ""
  .concat(firstName, " amazing its work (: ")
  .concat(lastName, " yes true :D ");
// console.log(fullName);
var isPresent = true;
// console.log(isPresent);
//                        --Array--
var firstNames = ["emrah", "beyazıt", "3", "4"];
var arr = [2, "test", true];
var values = ["test", 2];
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
var instructor = [1, "emrah"];
console.log(instructor);
var user;
user = [1, "test", true];
console.log(user);
var arrTest;
arrTest = [
  [1, "emrah"],
  [2, "beyazıt"],
];
console.log(arrTest);
//                        --Object--
var person;
person = {
  firstName: "emrah",
  lastName: "beyazıt",
  age: 25,
  jobTitle: "Software Developer",
};
console.log(person.age);
//                        --Enum--
//number
var Media;
(function (Media) {
  Media[(Media["NewsPaper"] = 3)] = "NewsPaper";
  Media[(Media["Magazine"] = 4)] = "Magazine";
  Media[(Media["Book"] = 5)] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine);
//String enum
var PrintMedia;
(function (PrintMedia) {
  PrintMedia["NewsPaper"] = "newpaper";
  PrintMedia["Magazine"] = "newsletter";
  PrintMedia["Book"] = "book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Magazine);
