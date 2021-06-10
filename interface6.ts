interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2{
  //name이랑 age 는 안 적어도 갖고있게 됨
  city: string;
}

const k: IKorean = {
  name: 'Taesoo',
  age: 29,
  city: 'Seoul'
};

console.log(k.name);
