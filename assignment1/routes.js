const welcomeTag = '<h1>Hi, Welcome to Assignment 1</h2>';
const userInputTag = '<input type="text" name="username" />';
const saveButton = '<button type="submit">Save</button>"';
const userForm = `<form action="/create-user" method="POST">${userInputTag}${saveButton}</form>`;
const welcomeBody = `<body>${welcomeTag}${userForm}</body>`;
const title = '<head><title>Assignment 1</title></head>';

// Users Html
const welcomeUsers = '<h1>Users:</h1>'
const users = ['John Adams', 'Mike Madison', 'Amy Du Preez', 'Charles Write'];
let usersList = [];
let userListTag = '';
let unOrderedUserList = '';

const addUser = user => users.push(user);

const createUsersList = () => {
    usersList = users.map(user => `<li>${user}</li>`);
    userListTag = usersList.toString().replace(',', '');
    unOrderedUserList =  `<ul>${userListTag}</ul>`;
};

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const dataResponse = [];

    if (url === '/') {
        res.write(`<html>${title}${welcomeBody}</html>`);
        return res.end();
    }
    if (url === '/users'){
        createUsersList();
        res.write(`<html>${title}${welcomeUsers}${unOrderedUserList}</html>`);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        req.on('data', chunk => {
            console.log(chunk);
            dataResponse.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(dataResponse).toString();
            console.log(parsedBody);
            const user = parsedBody.split('=')[1];
            console.log(user);
            addUser(user);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        })
    }
}

exports.handler = requestHandler;