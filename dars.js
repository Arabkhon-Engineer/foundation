/*let birinchi_raqam = 12;

let ikkinchi_raqam = 20;

let qosh = birinchi_raqam + ikkinchi_raqam;
let ayir= birinchi_raqam - ikkinchi_raqam

console.log(qosh);
console.log(ayir);
*/

/* javascript web browserda ishlaydigan til xisoblanadi. 
o'zgaruvchilarni kalit so'zlar bilan yaratiladi. kalit so'zlar 3ta
var, let const
shu kalit so'zlar ishlatilmasa o'zgaruvchi xosil bo'lmaydi.
o'zgaruvchilarni "declare" va kalit sozga qiymat beriladi. qiymatni initilisation
deyiladi. 
var, let const kalit so'zlari oladigan xossalari jihatdan farq qiladi.
scope yoki qavs turlari 3ga bolinadi. global scope, local yoki function scope, block scope
var function scope turiga kiradi. tashqaridan chaqirilganda undefined yoki qiymat qaytradi
ES 6 yoki 2015 yilgacha var ishlatilgan.
berilgan o'zgaruvchini qiymatini qaytadan o'zgartirish mumkin


*/

if(true){
    var arry = 12;
    arry = 25
    arry = "salom"
}
console.log(arry);