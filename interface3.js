"use strict";
;
function hello3(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694. " + person.name + " \uC785\uB2C8\uB2E4.");
}
;
var p31 = {
    name: 'Taesoo',
    age: 29,
};
var p32 = {
    name: 'Saesoo',
    systers: [
        'Tae', 'Soo'
    ]
};
var p33 = {
    name: 'Baesoo',
    father: p31,
    mother: p32,
    samsung: [
        'jang', 'nan'
    ]
};
hello3(p33);
console.log(p33.samsung);
