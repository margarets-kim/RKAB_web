# Githubell Web Front-End Readme

깃허벨 메인 페이지(Front End) 프로젝트 입니다

깃허벨 텔레그램 레포지토리 주소\
https://github.com/margarets-kim/telegram_githubell

깃허벨 Github api 통신 및 Kakao Chat Bot 통신 서버 레포지토리 주소\
https://github.com/margarets-kim/RepoKaKaoAlarmBot

해당 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)를 기반으로 생성되었습니다.

**기본 설치 요구 파일**

- Node.Js
- yarn
- npm

프로젝트 패키지 설치 명령어:

## `yarn intall`

프로젝트 실행 명령어:

### `yarn start`

개발 모드로 서버가 구동됩니다.\
[http://localhost:3000](http://localhost:3000) 주소로 서버가 구동됩니다.

만약 페이지를 수정할 경우 자동으로 서버는 리로딩됩니다.\
또한 실시간으로 에러 정보를 확인할 수 있습니다.

### `yarn test`

테스트 모드로 서버가 구동됩니다.\
헤당 명렁어는 [서비스 테스트 하기 문서](https://facebook.github.io/create-react-app/docs/running-tests) 를 통해 더 자세히 확인할 수 있습니다.

### `yarn build`

`build` 폴더에 파일을 릴리즈 합니다.\
최상의 실행환경을 위해 최적의 번들을 제공합니다.

배포시 용량을 최소화 하기위해 코드는 압축되어있습니다.\
프로젝트를 배포할 준비가 되었습니다!

[배포 문서](https://facebook.github.io/create-react-app/docs/deployment) 를 통해 더 자세히 확인할 수 있습니다.

### `yarn eject`

**주의!: 해당 작업은 한번 `거절`하면 돌아갈 수 없어요!**

빌드 도구 및 구성 선택에 만족하지 않으면 언제든지 `거절``할 수 있습니다. 이 커맨드는 프로젝트에서 단일 빌드를 제거할 것입니다.

## 프로젝트 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.js #root 컴포넌트
│   ├── App.test.js
│   ├── QRcodeRender.css
│   ├── QRcodeRender.js #QR코드 생성
│   ├── Telegram #텔레그램 섹션
│   │   ├── T_intro.js
│   │   ├── T_qrcode.js
│   │   ├── T_register.js
│   │   ├── T_result.js
│   │   ├── Telegram.css
│   │   └── Telegram.js
│   ├── card #카카오톡 섹션
│   │   ├── Card.css
│   │   ├── Card.js
│   │   ├── Card_intro.js
│   │   ├── Card_qrcode.js
│   │   ├── Card_register.js
│   │   └── Card_result.js
│   ├── font #페이지 폰트
│   │   ├── AppleSDGothicNeoB.ttf
│   │   ├── AppleSDGothicNeoEB.ttf
│   │   ├── AppleSDGothicNeoH.ttf
│   │   ├── AppleSDGothicNeoL.ttf
│   │   └── AppleSDGothicNeoM.ttf
│   ├── image #사이트에 사용될 QR코드, 로고 이미지
│   │   ├── QRcode_channel.png
│   │   ├── QRcode_channel_2.png
│   │   ├── githubell_logo.png
│   │   ├── kakao_logo.jpg
│   │   ├── kakao_logo.png
│   │   ├── logo_design.jpg
│   │   ├── qrcode_telegram.png
│   │   └── telegram_logo.png
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupProxy.js
│   ├── setupTests.js
│   └── style.css
└── yarn.lock
```

## 사이트 소개

### 메인 화면

![첫번째 사진](./markdown_img/web-main.png)

### 카카오톡 QR코드 데이터 생성 섹션

![카카오](./markdown_img/web_k_0.png)
![카카오](./markdown_img/web_k_1.png)

![카카오](./markdown_img/web_k_2_error.png)
올바른 주소 URL형식만 입력받을 수 있습니다

![카카오](./markdown_img/web_k_3.png)
![카카오](./markdown_img/web_k_4.png)

### 텔레그램 QR코드 데이터 생성 섹션

![텔레그램](./markdown_img/web_t_1.png)
![텔레그램](./markdown_img/web_t_3.png)
올바른 주소 URL형식만 입력받을 수 있습니다
