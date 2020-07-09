export const usersGroups = ({ entities }, userId) => {
    const user = entities.users[userId];
    let groups = [];
    if (user && Object.keys(entities.groups).length > 0) {
        user.groups.forEach(groupId => groups.push(entities.groups[groupId]));
    }
    return groups;
}