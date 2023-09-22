let user = document.getElementById('username').value;
let password = document.getElementById('password').value;
let data = {
    user,password
}


// console.log(data);

// axios.get('https://650da1c0a8b42265ec2c8460.mockapi.io/api/v1/users',data)
// .then(res => {
//     let api = res.data
//     let data_u = api.username
//     let data_p = api.password
//     console.log(res)
//     console.log(api)
//     if(api){}
// })
// .catch(err => {
//     console.error(err); 
// })