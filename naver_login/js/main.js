// 1번 mission

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    throw new Error("에러 입니다!");
  }
}

const person = {
  name: "Alice",
  age: 25,
  cirt: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

// 2
function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw new Error("배열이 제공되지 않았습니다.");
  }

  if (index < 0 || index >= arr.length) {
    throw new Error("에러입니다!");
  }

  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];

try {
  console.log(getNumberAtArray(numbers, 2)); // 30
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray(numbers, 4)); // 50
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray(numbers, 5)); // Error!
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray(numbers, -1)); // Error!
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray("not an array", 2)); // Provided input is not an array
} catch (e) {
  console.error(e.message);
}
