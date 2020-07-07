const sgMail = require("@sendgrid/mail");
const apiKey = require("./config/keys").sendgridAPIKey;
    
sgMail.setApiKey(apiKey);

const msg1 = {
  to: "benrose207@gmail.com",
  from: "rebondmailer@gmail.com",
  subject: "Testing email with SendGrid",
  text: "Does this email send successfully?",
  html: "<strong>Does this email send successfully?</strong>",
};

const msg2 = {
  to: "benrose207@gmail.com",
  from: "rebondmailer@gmail.com",
  templateId: "d-74252dea93384ff4b5921109a705204f",
};

// sgMail.send(msg1);
sgMail.send(msg2);