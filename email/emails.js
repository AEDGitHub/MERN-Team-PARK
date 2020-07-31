const sgMail = require("@sendgrid/mail");
const apiKey = require("../config/keys").sendgridAPIKey;

sgMail.setApiKey(apiKey);

const formatUserEmailContent = (users) => {
    const userEmailContent = [];
    
    users.forEach(user => {
        let userDetails = {
            to: [{ email: user.email }],
            dynamicTemplateData: {
                subject: `${user.firstName}, you've been invited to an event!`,
                firstName: user.firstName,
                lastName: user.lastName
            }
        };
    
        userEmailContent.push(userDetails);
    });

    return userEmailContent;
}

const sendEventInviteEmail = (event) => {
    const msg = {
        from: "rebondmailer@gmail.com",
        templateId: "d-8337f147eb304da8bcd39793f46919e6",
        personalizations: formatUserEmailContent(event.invitees),
        dynamicTemplateData: {
            name: event.name,
            date: event.date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
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
};

module.exports = sendEventInviteEmail;