const sortTodosArray = (arrayTodos, listName) => {
    return arrayTodos.filter(item => item.status === `${listName}`)
}

export default sortTodosArray