interface Person2 {
  name : string; //이름은 required
  age? : number; //물음표는 있을 수도 있고 없을 수도 있다
}

function hello2(person : Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name : 'Taesoo', age: 29});
hello2({name : 'Saesoo'});