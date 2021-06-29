// async function getData() {
//
//     try {
//         let response = await fetch('data.json');
//
//         let data = await response.json();
//
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// getData();

axios.get('data.json').then(response => {
    let data = response.data;
    console.log(data);
})