const { I } = inject();

module.exports = {


    // insert your locators and methods here
    fields: {  
      email: '#email',
      password: '#password',
      pin: '#pin',
    },
    loginPageUrl: 'https://connect.inventorum.com/',
    submitButton: 'button[type="submit"]', 
    login (mailbox, password, pin) {
      I.amOnPage(this.loginPageUrl);
      I.fillField(this.fields.email, mailbox.emailAddress);
      I.fillField(this.fields.password, password);
      I.click(this.submitButton);
      I.fillField(this.fields.pin, pin);
      I.see('Startseite');    
    }

  }
