const sgMail = require("@sendgrid/mail");
const apiKey = require("./config/keys").sendgridAPIKey;

sgMail.setApiKey(apiKey);

export const sendEventInviteEmail = (invitedUsers, event) => {
    const userEmailContent = [];
    invitedUsers.forEach(user => {
        let userDetails = {
            to: user.email,
            subject: `${user.firstName}, you've been invited to an event!`,
            dynamicTemplateData: {
                firstName: user.firstName,
                lastName: user.lastName
            }
        };

        userEmailContent.push(userDetails);
    });

    const msg = {
        from: "rebondmailer@gmail.com",
        templateId: "d-74252dea93384ff4b5921109a705204f",
        personalizations: userEmailContent,
        dynamicTemplateData: {
            name: event.name,
            date: event.date,
            addressName: event.address.name,
            address1: event.address.address1,
            address2: event.address.address2,
            city: event.address.city,
            state: event.address.state,
            zipCode: event.address.zipCode,
            details: event.details,
            groupName: event.group.name,
            interestName: event.interest.name,
            interestDescription: event.interest.description,
            interestCategory: event.interest.category,
            img: event.interest.img
        }
    };

    sgMail.send(msg);
}