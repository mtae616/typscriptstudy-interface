interface HelloPerson {
  ( name : string , age?: number ):void;
  //함수
}

const helloPerson : HelloPerson = function(name:string) {
  console.log(`안녕하세요! ${name} 입니다.`);
};

helloPerson('Taesoo', 29);
//함수에서 매개변수가 없어도 interface 에서 있기 때문에 넣을 수 있음