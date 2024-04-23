//                   Data Type --Number-String-Boolean--
var first = 123;
// console.log(first);
var firstName = "emrah";
var lastName = "beyazıt";
var fullName = "".concat(firstName, " amazing its work (: ").concat(lastName, " yes true :D ");
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
//number enum
var Media;
(function (Media) {
    Media[Media["NewsPaper"] = 3] = "NewsPaper";
    Media[Media["Magazine"] = 4] = "Magazine";
    Media[Media["Book"] = 5] = "Book";
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
//                        --Union type--
var code = 123;
console.log(code);
//                        --Any--
//Tip any olduğu zaman  tip farketmeksızın her bir değeri kabul ediyorum.
//Anlamına gelir ve bir hata almaz önerilmesede hayat kurtarıcı olabilir.
var someThing = "hello";
someThing = 45;
console.log(someThing);
var arrs = ["john", 212, true];
console.log(arrs);
//                        --Void--
//Bir fonks'da fonk geriye  değer döndürmüyorsa bunu void ile belirtebiliyoruz.
function sayHello() { }
//                        --Never--
///Bir fonks'da sadece hata dönecekse never atanır
//never ile void arasındaki fark voide null ve undefined atanabilir ama nevere atanamaz
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("hata");
