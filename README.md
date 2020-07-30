# AuthenticationJWTAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## How to run application

To run the application, enter the application folder in the command line and put `npm install` and then `npm start`.

Navigate to `http://localhost:4200/`. So you can see the app start page.

To start a "fake" server, create new terminal window and put `npm run server`. This server starts on port 5000. it is not necessary to go to this url.

## Technologies were used

 - [router](https://angular.io/api/router/RouterModule)
 - [CORS](https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/CORS)
 - [express](https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs)
 - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
 - [body-parser](https://www.npmjs.com/package/body-parser)
 - [guard](https://angular.io/guide/router#preventing-unauthorized-access)


### Как всё было

Сперва мне нужно было понять, что же происходит на backend'е и что такое [authentication](https://artismedia.by/blog/difference-between-authentication-and-authorization/)

Изначально были созданы четыре роута: главная страница, страница регистрации, страница авторизации и страница пользователя. В последствии, из-за сложности реализации и отсутствия прямых требований в задании, роут регистрации я решил удалить.

Когда пользователь заходит в приложение, он попадает на стартовую страницу. Предполагается, что он уже был зарегистрирован ранее, и его данные, т.е. логин и пароль уже хранятся на сервере. В моём случае, в файле `server.js` в переменной `testUser`.

По клику на кнопку `Sign In` происходит перенаправление на страницу авторизации. 
 - Если был введён неверный логин или пароль, об этом будет выведено сообщение.
 - Если были введены логин `t@t.com` и пароль `1234`, то происходит перенаправление на страницу пользователя. При этом в хедере меняются кнопки. Также пользователю присваивается соответствующий токен. 

Изначально был использован статический хэдер с кнопками, которые были закрыты гардом, чтобы пользователь, не прошедший аутентификацию, не смог перейти на страницу, доступную только после аутентификации.

Авторизированный пользователь может перейти на стартовую страницу, а также разлогиниться.
