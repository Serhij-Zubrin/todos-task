// class AuthUser {
//     constructor(request) {
//         this.request = request
//     }


//     logIn(body) {
//         return this.request({
//             url: `/users/login`,
//             method: 'POST',
//             body,
//         })
//     }

//     logOut() {
//         return this.request({
//             url: `/users/logout`,
//             method: 'POST',
//         })
//     }
// }

// export default function authUser(request) {
//     return new AuthUser({
//         request,
//     })
// }