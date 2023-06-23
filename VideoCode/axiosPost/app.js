// async function getUsers(){
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser(){
//   const res = await axios.post('https://reqres.in/api/users', {username: "Jason", email:"jason@gmail.com", age: 1});
//   console.log(res);
// }

// createUser();

async function getUsers(){
  const res = await axios.get('https://hack-or-snooze.herokuapp.com/users?skip=0&limit=10');
  console.log(res);
}

async function signUp(username, password, name) {
  const res = await axios.post('https://hack-or-snooze.herokuapp.com/users', {  name, username, password  })
  console.log(res);
}


signUp("butterschicken","1234", "chicken")