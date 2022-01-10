import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://learnwebauthn-vb5r9.ondigitalocean.app/api/'
})

export const authAPI = {
    async authLogIn(data) {
        return await instance.post(`users/login`, data)
    },
    authLogOut() {
        return instance.get(`users/logout`);
    }
}


// const [appState, setAppState] = useState({
//     loading: false,
//     repos: null,
// });

// const [appTodos, setAppTodos] = useState({
//     loading: false,
//     todos: null,
// });

// useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = 'https://learnwebauthn-vb5r9.ondigitalocean.app/api/users/login';
//     axios.post(apiUrl, {
//         "email": "test1@test.com",
//         "password": "12345678"
//     })
//         .then((repos) => {
//             const allRepos = repos.data;
//             setAppState({ loading: false, repos: allRepos });

//         });
// }, [setAppState]);


// useEffect(() => {
//     setAppTodos({ loading: true });
//     const apiUrl = 'https://learnwebauthn-vb5r9.ondigitalocean.app/api/todos';
//     axios.get(apiUrl).then((repos) => {
//         const allTodos = repos.data;
//         setAppTodos({ loading: false, todos: allTodos });

//     });
// }, [setAppTodos]);

// const { repos } = appState;
// const { todos } = appTodos;
// console.log(repos, todos);
