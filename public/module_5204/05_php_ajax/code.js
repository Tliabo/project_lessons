let form = document.querySelector('#myForm');
form.addEventListener('submit', e => {
    e.preventDefault();

    let fd = new FormData(form);

    // console.log(fd);

    fetch('example_01.php', {
        method: 'post',
        body: fd
    }).then(response => {
        response.text().then(data => {
            console.log(data)
            document.querySelector('.messages').append(data);
        })
    })
})