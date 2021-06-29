// fetch('data.json')
//     .then(response => {
//         console.log(response);
//     });

// fetch('data.json')
//     .then(response => {
//         response.json().then(json => {
//             console.log(json)
//         })
//     });

async function getData() {

    let response = await fetch('data.json');

    let data = await response.json();

    console.log(data);
}
getData();

