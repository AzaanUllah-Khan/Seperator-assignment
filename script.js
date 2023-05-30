
var heading = document.getElementById('heading');
var photo = document.getElementById('photo');

function add(id) {
    document.getElementById(id).innerHTML += `
    <li>
        <h1>${heading.value}</h1>
        <img src="${photo.value}" alt="Image Portion Not Filled">
    </li>
    `;
}
