interface IPerson1 {
  name : string;
  age? : number;
  hello(): void;
}

class Person implements IPerson1{
  name: string;
  age?: number | undefined;
  //얘는 옵셔널이라 없어도 됨

  constructor(name: string){
    this.name= name;
  }
  
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const person:IPerson1 = new Person("Taesoo");
//인터페이스의 이름으로 타입을 지정하는 것이 정확한 표현
person.hello();