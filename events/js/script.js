axios.get('https://6512d71cb8c6ce52b39655f8.mockapi.io/api/v1/card')
    .then(res => {
    let sect = document.getElementById('sect2');
    let api =  res.data
    for(let i = 0;i<api.length;i++){
        console.log(api[i].src_img);
        sect.innerHTML +=  `
        <div data-aos="fade-up">
            <a href="#">
                <img src="${api[i].src_img}" alt="">
            </a>
        </div>
        `
    }
    })
    .catch(err => {
        console.error(err);
    });

// axios.put('https://6512d71cb8c6ce52b39655f8.mockapi.io/api/v1/card/12', {
//     src_img: 'https://s3.ticketmx.com/uploads/images/daf139bc76277f93dac13c6776e7e1671223b9fb.jpg?w=750&h=750&mode=crop&bgcolor=black&format=jpg'
// })
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.error(err);
//     });