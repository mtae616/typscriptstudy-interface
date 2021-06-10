"use strict";
var Person = /** @class */ (function () {
    //얘는 옵셔널이라 없어도 됨
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
var person = new Person("Taesoo");
//인터페이스의 이름으로 타입을 지정하는 것이 정확한 표현
person.hello();
