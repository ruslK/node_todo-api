const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5c357bd0617754b404c3ec42';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable find the user')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));


// Todo.find({
//     _id : id
// }).then((todos) => {
//     if(!todos) {
//         return console.log('ID not found')
//     }
//     console.log('Todos', todos);
// }).catch((err) => console.log(err));

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo', todo);
// }).catch((err) => console.log(err));

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found')
//     }
//     console.log('Todo  by ID', todo);
// }).catch((err) => console.log(err));

