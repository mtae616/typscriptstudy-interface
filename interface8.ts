interface Person8 {
  name : string;
  age? : number;
  readonly gender: string;
}

const p81: Person8 = {
  name : "Taesoo",
  gender: 'male'
};

// p81.gender = 'female';
// readonly 이기 때문에 바꿀 수 없음