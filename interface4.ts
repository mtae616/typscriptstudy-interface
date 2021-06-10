interface Person4 {
  name: string;
  age: number;
  hello():void;
}

const p41 : Person4 = {
  name: 'Taesoo',
  age: 29,
  hello: function(): void {
    console.log(`안녕하세요. ${this.name} 입니다.`)
  }
};

const p42 : Person4 = {
  name: 'Taesoo',
  age: 29,
  hello(): void {
    console.log(`안녕하세요. ${this.name} 입니다.`)
  }
};

// const p43 : Person4 = {
//   name: 'Taesoo',
//   age: 29,
//   hello: (): void => {
//     console.log(`안녕하세요. ${this.name} 입니다.`)
//   }
// };

p41.hello();
p42.hello();