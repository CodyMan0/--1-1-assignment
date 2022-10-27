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


## 🔗 위키 링크

[위키 링크 보러가기](https://github.com/wanted-freeOnBoarding-8/1-1_assignment/wiki)
- 저희들의 코드컨벤션, 커밋메시지컨벤션, 에러노트를 정리해두었습니다.😁


## 🔗 배포 링크

[베포 링크 보러가기](https://8team-todolist.netlify.app/)

- 해당 프로젝트는 netlify를 통해 배포하였습니다.



## 📦 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂components
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Navbar.jsx
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜AuthForm.jsx
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┣ 📜ErrorMessage.jsx
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



## 👍 Best Practice 선정 이유

- 리액트 커스텀 훅 사용: useMutation, useFetch로 네트워크 통신 로직의 재사용 

- contextAPI 사용: 전역으로 로그인 상태관리

- AuthForm 컴포넌트: 로그인과 회원가입에서 반복되는 부분  컴포넌트화를 통한 코드 중복 제거




## ✏️ 개선 부분

- ESLint, Pretiier: 보다 엄격한 airbnb style을 적용한 ESLint로, 팀의 코드컨벤션을 통일했습니다. 

- contextAPI: 반복적인 props 전달을 contextAPI로 쉽게 관리했습니다.

- custom hook 사용: 로직의 재사용을 통해 코드를 간결하게 했습니다.

- AuthForm 컴포넌트: 로그인/회원가입 페이지에서 반복되는 UI와 로직을 하나의 컴포넌트로 통일했습니다.




## ✏️ 에러 해결과정 [위키의 dev노트 보러가기 😗](https://github.com/wanted-freeOnBoarding-8/1-1_assignment/wiki/Dev-%EB%85%B8%ED%8A%B8)

 하루동안 함께 시행착오를 한 기록을 담았습니다!



## ✨ 주요 기능

<img width="700" src="https://user-images.githubusercontent.com/80830981/198387941-79f1713b-5145-43d5-a423-a402fb14d04e.png"/>



- 사용자는 로그인을 클릭하여 로그인 페이지로 이동 가능.
- 사용자는 input 필드에 각각 이메일, 비밀번호를 기입한 뒤, 회원가입 버튼을 눌러 회원가입 가능.
- 이메일, 비밀번호 유효성 검사 조건   
	   이메일 조건: @포함,   
	   비밀번호 조건: 8자 이상
- 입력한 이메일, 비밀번호 회원가입 조건 충족 시 회원가입 버튼 활성화.
- signUp API 호출 성공 시 JWT를 로컬 스토리지에 저장 후 로그인 페이지로 이동.
- 로컬 스토리지에 토근이 있는 상태로 / 페이지에 접속할 경우 /todo 페이지로 연결.


</br>


<img width="700" src="https://user-images.githubusercontent.com/80830981/198385277-cb577473-ceaf-4c00-958e-758e96f3d452.png"/>



Todo 페이지 설명
* /todo 페이지 노출 항목
  - 현재 날짜
  - 로그아웃 버튼
  - Todo List
  - Todo Input
  - Todo 추가 버튼
- /todo 페이지에 접근하면 현재 등록된 Todo 목록을 보여줍니다.
- Todo Input 창에 내용 입력 후 + 버튼을 클릭하면 새로운 Todo가 추가됩니다.
  - Todo Input 창에 내용이 없으면 Todo는 추가되지 않습니다.
- Todo 항목에는 아래와 같은 기능이 있습니다.
  - 체크: Todo 항목 완료 및 취소를 할 수 있습니다.
  - 수정: 수정 버튼을 클릭하면 수정하기 Input 창이 뜨고 수정 및 취소를 선택할 수 있습니다.
  - 삭제: 선택한 Todo 항목을 삭제하는 기능입니다.
- 로그아웃 버튼을 누르면 localStorage 에서 토큰을 삭제합니다.











