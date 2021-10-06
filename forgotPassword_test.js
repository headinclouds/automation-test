Feature('Forgot Password');

Scenario('forgot password success', async ({ I, registrationPage, loginPage }) => {
   const mailbox = await I.haveNewMailbox();
    await registrationPage.sendFormRegistrationFirstStep(mailbox, 'Siemens', 'Charles', 'Kikovski', 
    '04955511122');
    
    const emailRegistation = await I.waitForLatestEmail(100);
    let registrationUrl = emailRegistation.body.match(registrationPage.emailRegex)[0];
    await registrationPage.sendFormRegistrationSecondStep(registrationUrl, 'Test123!', '1', '2', '3', '4',);

    I.amOnPage(loginPage.loginPageUrl);
    I.click('a[href="/forgot-password"]');
    I.fillField('E-Mail', mailbox.emailAddress);
    I.click('button[type="submit"]');
    const emailRestore = await I.waitForNthEmail(2, 100);
    const restoreUrl = emailRestore.body.match(registrationPage.emailRegex)[0];
    I.amOnPage(restoreUrl);
    I.see('Passwort zurücksetzen');
    I.fillField(registrationPage.fields.password, 'Test123$');
    I.fillField('#passwordConfirmation', 'Test123$');
    I.click('button[type="submit"]');
    I.see('Einloggen');

    loginPage.login(mailbox, 'Test123$', '1234');
});
