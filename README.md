# ReBond

[Live Demo](rebond.herokuapp.com)

## Background & Overview

In the shadow of COVID-19's influence, more groups of individuals are forming on a strictly virtual basis than ever before.
Acting under the assumption that the virus will eventually loosen its grip on humanity's collective behavior,
these groups may eventually wish to meet in a physical location. Although some of these meetings will occur organically,
it may be difficult for some to broach the subject of an in-person interaction.
After all, how does one ask to 'hang out' with a person they've known for months, but only through a screen? Is that weird?

Team PARK seeks to solve this initial hesitance, by developing a lightweight app to reduce the psychological friction of such meetings occurring
(once the virus subsides, of course.) The app is not designed to supplant any existing method of social media,
but rather to supplement them during a time of nonstandard human interaction: it's a meet-up app for people who already know each other well,
yet have never breathed the same air.

The app works as follows: upon signing up for a new account, a user may create a new group or join an existing one. In so doing,
they will receive a key that can be sent to their digital compatriots in whatever fashion they choose (email, work-management app, social media &c.)
Members of the group, whether originator or invitee, may select up to three activities from a few broad categories that they would like to share
with other members of the group, which will populate the group's interest index column, allowing other group members to subscribe to a potential future event.

As a particular user prefers, they may indicate that they would like to host an event based on one of their interests, and select a time, place and
maximum number of attendees. Other users in the group who have indicated interest in such an activity will receive an email that the event is occurring,
and may respond in kind in order to reserve a spot at the event.

And then, everyone will meet, have fun, and maybe deepen their friendships, just like in real life. Remember that?

## Technologies

Rebond was built using the MERN web development stack:

- MongoDB for the backend database
- Express.js for backend routing
- React/Redux for virtual DOM creation and management
- Node.js for backend construction

Other libraries, APIs, and digital praxis were also used or are planned for implementation in the near future:

- SCSS (CSS management)
- Materialize (a CSS/JS library for frontend material design)
- SendGrid (an API for generating emails on certain user actions)

## Features

The entire webapp was built with a fully responsive layout using Materialize CSS, enabling functional user action via both mobile and full-screen devices:

![mobile view][app_mobile_view] ![desktop_view][app_desktop_view]

HTML5 form validations were used on all form fields to reduce the number of database calls made with erroneously-entered user data:

![html5_form_validation][html5_validation]

Users who have created a group are given a slug they may send to friends they care to invite. On group creation, we assign a slug to the group using the helper function below, and then ensure that this slug is unique using a Model constraint.

```js
module.exports = function generateSlug(name) {
  const slug = name.toLowerCase().split(" ").join("-");
  return slug;
};
```

The creator of the group will be provided with a url in the following format that can then be shared: https://www.rebond-herokuapp.com/signup?group=demo-group
When a user navigates to this link, we capture the group's unique slug from the URL parameters, and pass this through to our backend when the signup request is processed:

```js
componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    this.slug = searchParams.get("group");
}
```

## Future Features and Planned Project Upgrades

- Full implementation of events
- Full integration of SendGrid API
- Revamped splash page and signin/login forms
- Full adherence to JS/CSS styleguide (styleguide TBD)
- About page

## The Team

### Gabor Kurucz: _Frontend Lead_

**Primary Domain of Operations:** _Front_ (frontend/{utils, actions, reducers, store, components}, entrypoint, CSS)

As the Frontend Lead, Mr. Kurucz is responsible for the overall presentation of the project, to include styling, component structure and function, and ensuring data is accurately retrieved from and submitted to the backend. The Frontend Lead has broad authority to dictate overall design decisions, to include user interface/experience, naming of frontend routes, component hierarchy, container design, reducer logic, and action formulations.

### Elisha Kutnick: _Backend Lead_

**Primary Domain of Operations:** _Back_ (MongoDB, routes, models, controllers, frontend/utils)

As the Backend Lead, Mrs. Kutnick is responsible for the overall functioning of the project and design of its schema, routes, models and controllers, ensuring sensible processing of and access to data on the backend, while correctly entering user-submitted form data into database storage. The Backend Lead has broad authority to dictate abstract data decisions, to include naming of backend routes, design of app state shape, and implementation of methods and validations as appropriate.

### Ben Rose: _Chief Deputy of Operations_

**Primary Domain of Operations:** _Core_ (routes, models, ..., frontend/\*, entrypoint)

As the Deputy Ops, Mr. Rose is responsible for coordinating data flows unhindered between the backend and the frontend, as well as communicating emergent problems requiring immediate decisions to the Project Director. The Deputy Ops will also aid in assisting with research for and facilitating communication between the frontend and backend leads, as appropriate, and attempt to remedy conflicts, merge and otherwise, before they arise.

### Eric Arndt: _Project Director_

**Primary Domain of Operations:** _Terminals_ (MongoDB, routes) ..., (entrypoint, CSS)

As the Project Director, Mr. Arndt is responsible for the overall management and support of the team, to include prioritizing tasks for execution in task management software, allocating human resources to blockers as they arise, reviewing submitted pull requests and finalizing code commits to the project master branch. The Project Director will also liaise with a/A authority overseeing the student project and manage daily team standups in order to align the team's vision and ensure a successful project launch.

[app_mobile_view]: /demo/app_mobile_view.png
[app_desktop_view]: /demo/app_desktop_view.png
[html5_validation]: /demo/html5_validation.png
