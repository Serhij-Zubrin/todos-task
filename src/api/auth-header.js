export const authHeader = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if (token) {
        return {
            headers: { Authorization: `Bearer ${token}` }
        };
    } else {
        return {};
    }
}