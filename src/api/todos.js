// class TODOS {
//     constructor(request) {
//         this.request = request
//     }

//     getTodos() {
//         return this.request({
//             method: 'GET',
//             url: `${this.url}/todos`,
//         })
//     }

//     getTodoID(id) {
//         return this.request({
//             method: 'GET',
//             url: `${this.url}/todos?id=${id}`,
//         })
//     }

//     createTodo(body) {
//         return this.request({
//             method: 'POST',
//             url: `${this.url}/todos`,
//             body,
//         })
//     }

//     updateTodo(id, body) {
//         return this.request({
//             method: 'PUT',
//             url: `${this.url}/todos?id=${id}`,
//             body,
//         })
//     }
//     deleteTdo(id) {
//         return this.request({
//             method: 'DELETE',
//             url: `${this.url}/todos?id=${id}`,
//         })
//     }
// }

// export default function todosAPI(request) {
//     return new TODOS({
//         request,
//     })
// }


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