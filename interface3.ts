interface Person3 {
  name : string;
  age? : number;
  [index: string]: any;
  //a['index'], 어떤 형태의 프로퍼티도 괜찮다. //indexable property
};

function hello3(person:Person3): void{
  console.log(`안녕하세요. ${person.name} 입니다.`)
};

const p31:Person3 ={
  name : 'Taesoo',
  age : 29,
};
const p32:Person3 ={
  name: 'Saesoo',
  systers : [ //[index: string]: any; 와 대응
    'Tae' , 'Soo'
  ]
};
const p33:Person3 = {
  name : 'Baesoo',
  father : p31, //indexable property
  mother : p32, //indexable property
  samsung : [
    'jang', 'nan'
  ]
};
hello3(p33)
console.log(p33.samsung);