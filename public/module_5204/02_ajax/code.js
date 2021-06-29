// $.getJSON('data.json', function (data) {
//     console.log(data);
// });

$.ajax({
    url: 'data.json'
}).done(function (data) {
    console.log(data);
});