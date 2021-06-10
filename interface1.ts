interface Person1 { //데이터 구조로 타입화
  name : string, 
  age : number 
}

function hello1(person: Person1 ): void{
  console.log(`안녕하세요. 제 이름은 ${person.name} 입니다.`);
}

const p1: Person1 = {
  name : 'Taesoo',
  age : 29
};

hello1(p1);