/*
* author: wancheng
* date: 2018-12-19
* desc:
*/

// 不修改原来的 state，而是新增一个新的对象。
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                return ((todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
            });
        default:
            return state
    }
};

export default todos;
