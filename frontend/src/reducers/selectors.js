export const usersGroups = (state, userId) => {
    const user = state.entities.users[userId];
    return user ? user.groups : [];
}