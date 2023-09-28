
let log_in_og = document.getElementById('log-in-og');


log_in_og.addEventListener('click', () => {
    axios.get('https://6512d71cb8c6ce52b39655f8.mockapi.io/api/v1/users', username, password)
        .then(res => {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            console.log(res)
            let api = res.data;
            for (let i = 0; i < api.length; i++) {
                let loop = api[i];

                if (loop.password == password && loop.username == username) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'تم تسجيل الدخول',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    let homeGo = () => {
                        window.location.href = '/home-page/html/index.html';
                    }
                    setTimeout(homeGo, 1500)
                } else {
                    Swal.fire({
                        position: 'top-start',
                        icon: 'warning',
                        title: 'اسم المستخدم او كلمة المرور غير صحيحة',
                        showConfirmButton: true,
                        timer: 1500
                    })
                };
            }
        })
        .catch(err => {
            console.error(err);
        })
})
