const sgMail = require("@sendgrid/mail");
const apiKey = require("../config/keys").sendgridAPIKey;

sgMail.setApiKey(apiKey);

const exampleEvent = {
    attendees: [
        "5f208cc038f83d83996f111c"
    ],
    invitees: [
        {
            groups: [
                "5f07ac86811bd63fba3772a9",
                "5f065fbd09e2a0242cd0816d"
            ],
            interests: [
                "5f07ac37811bd63fba3772a2",
                "5f07ac44811bd63fba3772a5",
                "5f07ac4f811bd63fba3772a7"
            ],
            confirmedEvents: [],
            ownedEvents: [],
            invitedEvents: [],
            _id: "5f07ac2b811bd63fba3772a1",
            events: [],
            firstName: "Ben",
            lastName: "Test96",
            email: "benrose207+eventinvite@gmail.com",
            createdAt: "2020-07-09T23:45:47.930Z",
            updatedAt: "2020-07-09T23:48:35.185Z",
            __v: 6
        },
        {
            groups: [
                "5f0677970e1d0cd9fb6826e2"
            ],
            interests: [
                "5f209451ebd5368a1faf498c"
            ],
            confirmedEvents: [
                "5f20896fe5469a80802e9034",
                "5f2093eeebd5368a1faf4989",
                "5f23535e7f7e6c1ff5cc8df6"
            ],
            ownedEvents: [
                "5f2093eeebd5368a1faf4989",
                "5f23535e7f7e6c1ff5cc8df6"
            ],
            invitedEvents: [
                "5f2093eeebd5368a1faf4989",
                "5f23535e7f7e6c1ff5cc8df6"
            ],
            _id: "5f208cc038f83d83996f111c",
            firstName: "Test",
            lastName: "User40",
            email: "benrose207+test2@gmail.com",
            createdAt: "2020-07-28T20:38:25.033Z",
            updatedAt: "2020-07-30T23:10:22.827Z",
            __v: 5
        }
    ],
    _id: "5f23535e7f7e6c1ff5cc8df6",
    name: "Fake Event",
    owner: "5f208cc038f83d83996f111c",
    date: "2020-10-10T00:00:00.000Z",
    address: {
        _id: "5f23535e7f7e6c1ff5cc8df7",
        name: "Imaginary location",
        address1: "12345 5th St",
        city: "San Francisco",
        state: "California",
        zipCode: "94107"
    },
    details: "More fake events!",
    group: "5f07c1e48f63f46e044a703c",
    interest: {
        users: [
            "5f07ac2b811bd63fba3772a1",
            "5f07de8ef66d0a4d07c65bde"
        ],
        events: [],
        _id: "5f07ac4f811bd63fba3772a7",
        name: "something else",
        description: "something else",
        category: "Other",
        owner: "5f07ac2b811bd63fba3772a1",
        createdAt: "2020-07-09T23:46:23.160Z",
        updatedAt: "2020-07-10T23:30:24.346Z",
        __v: 1
    },
    createdAt: "2020-07-30T23:10:22.738Z",
    updatedAt: "2020-07-30T23:10:22.738Z",
    __v: 0
}

const sendEventInviteEmail = (event) => {
    const userEmailContent = [];
    event.invitees.forEach(user => {
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

    const msg = {
        from: "rebondmailer@gmail.com",
        templateId: "d-8337f147eb304da8bcd39793f46919e6",
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

sendEventInviteEmail(exampleEvent);