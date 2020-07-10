export const usersGroups = ({ entities }, userId) => {
    const user = entities.users[userId];
    let groups = [];
    if (user && Object.keys(entities.groups).length > 0) {
        user.groups.forEach(groupId => groups.push(entities.groups[groupId]));
    }
    return groups;
}

export const groupInterests = ({ entities }, groupId) => {
    let group = entities.groups[groupId];
    let interests = [];
    if (group.users) {
        group.users.forEach(userId => {
            let user = entities.users[userId];
            if (user) interests = interests.concat(user.interests)
        })
    }
    return interests;
}