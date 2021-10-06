const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
    company: '#signUpFirma',
    name: '#signUpFirstname',
    surname: '#signUpLastname',
    email: '#signUpEmail',
    phone: '#signUpNumber',
    terms: 'signUpAgb',
    password: '#password',
    pin1: '#pin',
    pin2: '#pintwo',
    pin3: '#pinthree',
    pin4: '#pinfour'
  },

  submitFirstStep: {css: '.sign-up-button.fullBtn[type="submit"]'},
  submitSecondStep: {css: '.sign-up-button[type="submit"]'},
  homePage: 'https://shorepos.shore.com/',
  emailRegex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,

  // introducing methods
  sendFormRegistrationFirstStep(mailbox, company, name, surname, phone) {
    I.amOnPage(this.homePage);
    I.see('Shore POS 14 Tage als Vollversion testen');
    I.fillField(this.fields.company, company);
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.surname, surname);
    I.fillField(this.fields.email, mailbox.emailAddress);
    I.fillField(this.fields.phone, phone);
    I.checkOption(this.fields.terms);
    I.click(this.submitFirstStep);
    I.see('Wir haben soeben eine E-Mail verschickt!');
  },

  sendFormRegistrationSecondStep(registrationUrl, password, pin1, pin2, pin3, pin4) {
    I.amOnPage(registrationUrl);
    I.seeElement('#fullsignup');
    I.fillField(this.fields.password, password);
    I.fillField(this.fields.pin1, pin1);
    I.fillField(this.fields.pin2, pin2);
    I.fillField(this.fields.pin3, pin3);
    I.fillField(this.fields.pin4, pin4);
    I.click(this.submitSecondStep);
  }
}
