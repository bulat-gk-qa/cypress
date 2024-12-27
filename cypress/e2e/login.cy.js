describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click();  // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })
       
    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
            
         cy.get('#forgotEmailButton').click();  // Нажал Забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
         cy.get('#restoreEmailButton').click(); // Нажал отправить код

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })

     it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio871'); //Ввели неверный пароль
         cy.get('#loginButton').click();  // Нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })
 
     it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт

         cy.get('#mail').type('fgjfgh@dolnikov.ru'); //Ввели неверный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click();  // Нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })

     it('Проверка, что в логине есть @', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт

         cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click();  // Нажал войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })   
       
     it('Проверк на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
   
         cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с заглавными буквами
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click();  // Нажал войти
            
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })          
 })