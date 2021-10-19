$(function () {
    const loginForm = $('form');
    let data;

    loginForm.submit(function (e) {
        e.preventDefault();

        data = loginForm.serializeArray();

        console.log(data);

        $.post({
            url: "login-user.php",
            type: "POST",
            data: data
        }).done(function (data) {
            $('#message').text('');
            let respond = JSON.parse(data);
            if (respond['login'] === true){
                window.location.href = 'private/display.html'
            } else {
                $('#message').html(data);
            }
        });
    })

})