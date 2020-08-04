import Axios from "./node_modules/axios/index"

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    Axios.get('https://reqres.in/api/users').then(Response => {
        console.log(Response);
    })
};

const sendData = () => { };

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);