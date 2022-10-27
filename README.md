# 원티드 프리온보딩 프론트엔드 - Week 1-1

원티드 프리온보딩 **프론트엔드 8팀**의 ```팔팔한 형제들```입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 10월 26일 ~ 2022년 10월 27일

## 팔팔한 형제들 팀 소개
### FE
| 이름        | github                           |
| --------------- |  -------------------------------- |
| 이주영 (팀장)   | https://github.com/CodyMan0 |
| 심의석 (부팀장) | https://github.com/shimeeuisuk |
| 장태희          | https://github.com/jangth0655 |
| 최영준          | https://github.com/choi2021 |
| 송경용  (공지)        | https://github.com/strongsongky |
| 박경은  (서기)       | https://github.com/KellyPark96 |
| 강효주          |  https://github.com/gywn9708 | 
| 권용현          |  https://github.com/YongHyunKwon  |


## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>
</div>




## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.
```
  REACT_APP_URL=https://pre-onboarding-selection-task.shop
```
2. 의존성 패키지를 설치합니다.
```zsh
$ npm install
```
3. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다. 
```zsh
$ chmod ug+x .husky/* 
```
4. 프로젝트를 실행합니다.
```zsh
$ npm start
```


- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔰 사용한 패키지와 버전

```
    "react-router-dom": "^6.4.2",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.4.2",
    "eslint": "^8.26.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "husky": "^8.0.1",
    "prettier": "^2.7.1"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">
- axios : 서버와 비동기 통신<br>
- styled-components : 스타일 적용<br>
- react-router-dom : 라우터 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- prettier : 팀원간 코드 포맷 통일<br>
- husky : Git Hooks 적용<br>
</div>
</details>

## 🔗 배포 링크

[베포 링크 보러가기]()
[find-best-todolist.vercel.app]

- 해당 프로젝트는 netlify? or github 통해 배포하였습니다.
- 상단 링크에 접속하시면 바로 Simple Todo를 이용할 수 있습니다.

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┗ 📜ErrorMessage.jsx
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗  📜Title.jsx
 ┃ ┣ 📂todo
 ┃ ┃ ┣ 📜EditForm.jsx
 ┃ ┃ ┣ 📜TodoForm.jsx
 ┃ ┃ ┗ 📜TodoItem.jsx
 ┣ 📂context
 ┃ ┗ 📜LoginContext.jsx
 ┣ 📂page
 ┃ ┣ 📜Auth.jsx
 ┃ ┗ 📜Todos.jsx
 ┣ 📂style
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┣ 📜theme.js
 ┃ ┗ 📜variable.js
 ┣ 📂utils
 ┃ ┣ 📜formatDayAndDate.js
 ┃ ┗ 📜localStorage.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useFetch.jsx
 ┃ ┃ ┗ 📜useMutation.jsx
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜router.js
  ```
</div>
</details>


## ✨ 주요 기능

- 프로젝트는 크게 로그인, 회원가입 및 todo CRUD 세 가지 기능을 중심으로 간략히 구현하였습니다.

| 페이지             | API 연결 및 기능                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 로그인 및 회원가입 | ✅로그인 API<br> ✅회원가입 API<br> ✅서버사이드 유효성 검사(이미 가입된 메일, 가입되지 않은 메일, 잘못된 비밀번호)<br>✅react-hook-form 없이 실시간 유효성 검사<br>✅로그인/회원가입 시 모두 jwt 로컬 스토리지 저장<br> ✅토큰 존재 시 /todo 리다이렉트<br> ✅회원가입 성공 시 /todo 리다이렉트<br> |
| todo 리스트        | ✅신규 todo 추가 API<br>✅todo 완료여부 따라 필터링<br>✅todo 업데이트(내용 or 완료여부)API<br>✅todo 삭제 API<br>✅토큰 미존재 시 / 리다이렉트<br>                                                                                                                                                  |  | 반응형 | ✅모바일<br>✅태블릿 <br>✅PC |

## 📹 데모 영상

### 🆕 회원가입 기능

![SignUp Preview](https://user-images.githubusercontent.com/48196721/195369475-778c0a46-64ed-4363-8472-521ebbef20bc.gif)

[회원가입 페이지 동작방식 설명]

- 사용자는 `로그인`을 클릭하여 각각 `로그인` 탭으로 전환할 수 있습니다.
- 사용자는 입력 form 내 input 필드에 각각 `이메일`/`비밀번호`를 기입한 뒤, `회원가입하기` 버튼을 눌러 회원가입 할 수 있습니다.
  - 이 때, form은 실시간으로 사용자의 입력에 따라 `이메일`/`비밀번호` 유효성 검사를 실시합니다.
  - 유효성 검사 조건은 각각 다음과 같습니다.
    - 이메일 조건: `@` 포함
    - 비밀번호 조건: 8자 이상
  - 사용자가 입력한 `이메일`/`비밀번호` 모두 위 조건을 만족할 때만 `회원가입하기` 버튼이 활성화됩니다.
- 사용자가 올바르게 `이메일/비밀번호` input을 입력하고 활성화된 `회원가입하기` 버튼을 누르면, `signUp API`가 호출됩니다.
- `signUp API` 호출이 성공하면 response body 내의 `JWT`를 로컬스토리지에 저장하고 `/todo` 페이지로 리다이렉트합니다.
- 만약 사용자가 로컬스토리지에 토큰이 있는 상태로 `/` 페이지에 접근하면 즉시 `/todo` 페이지로 리다이렉트됩니다.

### 🔓 로그인 기능

![SignIn Preview](https://user-images.githubusercontent.com/48196721/195369522-af41a661-f378-410b-9866-9be723656c66.gif)

[로그인 페이지 동작방식 설명]

- 사용자가 `/` 경로에 진입하면 디폴트값으로 로그인 탭이 보여집니다.
- 사용자는 `회원가입`을 클릭하여 `회원가입` 탭으로 전환할 수 있습니다.
- 사용자는 입력 form 내 input 필드에 각각 `이메일`/`비밀번호`를 기입한 뒤, `로그인하기` 버튼을 눌러 로그인 할 수 있습니다.
  - 이 때, form은 실시간으로 사용자의 입력에 따라 `이메일`/`비밀번호` 유효성 검사를 실시합니다.
  - 유효성 검사 조건은 각각 다음과 같습니다.
    - 이메일 조건: `@` 포함
    - 비밀번호 조건: 8자 이상
  - 사용자가 입력한 `이메일`/`비밀번호` 모두 위 조건을 만족할 때만 `로그인하기` 버튼이 활성화됩니다.
- 사용자가 올바르게 `이메일/비밀번호` input을 입력하고 활성화된 `로그인하기` 버튼을 누르면, `signIn API`가 호출됩니다.
- `signIn API` 호출이 성공하면 response body 내의 `JWT`를 로컬스토리지에 저장하고 `/todo` 페이지로 리다이렉트합니다.
- 로그인 시 기입한 `이메일`/`비밀번호` 정보 중 잘못된 값이 있는 경우, form의 하단에 에러 메시지가 보입니다.
- 만약 사용자가 로컬스토리지에 토큰이 있는 상태로 `/` 페이지에 접근하면 `/todo` 페이지로 리다이렉트됩니다.

### 📝 todo CRUD 기능

![TodoList Preview](https://user-images.githubusercontent.com/48196721/197771087-e0ff4139-76df-4c5b-b2d6-2df9b0433677.gif)

[TodoList 페이지 동작방식 설명]

- 사용자가 `/todo` 경로에 진입하면 해당 사용자가 작성한 모든 todo 리스트를 불러옵니다.
- `/todo` 페이지에서는 완료 여부에 따라 진행중/완료로 필터링 된 todo 리스트 뷰를 제공합니다.
- 사용자는 입력 form 내 input 필드에 todo 내용을 입력하고, `추가하기` 버튼을 눌러 새로운 todo를 todo 리스트에 추가할 수 있습니다.
  - 이 때, input을 입력하지 않으면 `추가하기` 버튼이 비활성화됩니다.
- 각 todo 항목은 완료 여부, todo 내용, `수정하기`, `삭제하기` 버튼을 가지고 있습니다.
- 각 todo 항목의 `수정하기` 버튼을 누르면, 수정모드가 활성화됩니다.
- 수정하기 모드에서 각 todo 항목은 완료 여부 및 `완료로 변경하기/미완으로 되돌리기` 버튼, todo 내용을 변경할 수 있는 input 필드 및 `제출하기`, `취소하기` 버튼을 가지고 있습니다.
  - 사용자는 `완료로 변경하기/미완으로 되돌리기` 버튼을 클릭하여 해당 todo 항목의 완료 여부 값을 수정할 수 있습니다.
  - 사용자는 내용 input에서 todo 항목의 내용 값을 수정할 수 있습니다. 만약 input 값이 비어있다면 `제출하기` 버튼이 비활성화됩니다.
  - 사용자가 `제출하기` 버튼을 누르면 완료 여부와 todo 내용 변경사항이 todo 리스트에 반영되고, 수정모드가 비활성화됩니다.
  - 사용자가 `취소하기` 버튼을 누르면 수정모드가 비활성화됩니다.
- 만약 사용자가 로컬스토리지에 토큰이 없는 상태로 `/todo` 페이지에 접근하면 `/` 페이지로 리다이렉트됩니다.

## 👍 Best Practice 선정 이유

-


## ✏️ 개선 부분


### something
### something
### something
### something
### something


## 🗺 API 설계

- 해당 프로젝트는 [wanted 배포 API](https://pre-onboarding-selection-task.shop)를 사용하였습니다.
- 해당 프로젝트 [API github 주소](https://github.com/walking-sunset/selection-task)를 눌러 이동해보세요!
- 해당 프로젝트 API에 대한 자세한 설명을 보려면 [API 설명 보러가기](https://github.com/walking-sunset/selection-task#api)로 이동하세요!

