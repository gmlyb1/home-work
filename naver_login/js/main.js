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
  console.log(getNumberAtArray(numbers, 5));
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray(numbers, -1));
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getNumberAtArray("배열이 아닙니다", 2));
} catch (e) {
  console.error(e.message);
}

// 로그인

const emailInput = document.getElementById("userEmail");
const emailErrorMessage = document.getElementById("userEmailError");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function displayEmailError(message) {
  emailInput.classList.add("is--invalid");
  emailErrorMessage.textContent = message;
  emailErrorMessage.style.display = "block";
}

function clearEmailError() {
  emailInput.classList.remove("is--invalid");
  emailErrorMessage.textContent = "";
  emailErrorMessage.style.display = "none";
}

emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    displayEmailError("이메일을 입력해주세요.");
  } else if (!validateEmail(emailValue)) {
    displayEmailError("유효한 이메일 형식이 아닙니다.");
  } else {
    clearEmailError();
  }
});

const passwordInput = document.getElementById("userPassword");
const passwordErrorMessage = document.getElementById("userPasswordError");

function validatePassword(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(password));
}

function displayPasswordError(message) {
  passwordInput.classList.add("is--invalid");
  passwordErrorMessage.textContent = message;
  passwordErrorMessage.style.display = "block";
}

function clearPasswordError() {
  passwordInput.classList.remove("is--invalid");
  passwordErrorMessage.textContent = "";
  passwordErrorMessage.style.display = "none";
}

passwordInput.addEventListener("blur", function () {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === "") {
    displayPasswordError("비밀번호를 입력해주세요.");
  } else if (!validatePassword(passwordValue)) {
    displayPasswordError("비밀번호는 특수문자 포함 6자 이상이어야 합니다.");
  } else {
    clearPasswordError();
  }
});

const loginForm = document.getElementById("loginForm"); // 폼 요소 선택

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 방지

  // 입력 값 가져오기
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // 이메일 유효성 검사
  if (emailValue === "") {
    displayEmailError("이메일을 입력해주세요.");
  } else if (!validateEmail(emailValue)) {
    displayEmailError("유효한 이메일 형식이 아닙니다.");
  } else {
    clearEmailError();
  }

  // 비밀번호 유효성 검사
  if (passwordValue === "") {
    displayPasswordError("비밀번호를 입력해주세요.");
  } else if (!validatePassword(passwordValue)) {
    displayPasswordError("비밀번호는 특수문자 포함 6자 이상이어야 합니다.");
  } else {
    clearPasswordError();
  }

  // 모든 입력이 유효한 경우 서버 통신 시뮬레이션 (실제 서버에서는 이 부분을 서버 측 검증으로 대체해야 합니다.)
  if (validateEmail(emailValue) && validatePassword(passwordValue)) {
    const user = {
      id: "asd@naver.com",
      pw: "spdlqj123!@",
    };

    if (emailValue === user.id && passwordValue === user.pw) {
      window.location.href = "welcome.html"; // 환영 페이지로 리다이렉션
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  }
});
