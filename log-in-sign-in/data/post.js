let go = document.getElementById("go");
  go.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let data = {
    name:name,
    username:username,
    email:email,
    password:password,
  };
  console.log(data);
  axios.post('https://6512d71cb8c6ce52b39655f8.mockapi.io/api/v1/users',data)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.error(err); 
})
});