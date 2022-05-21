import GetData from '../helpers/getData.js';
import showPrend from '../modules/showprend.js';

const container = document.querySelector('#containerPrend');

alert('hola');
container.addEventListener('DOMContentLoaded', async () => {
    const containerPrend = document.getElementById('containerPrend');
    const { data } = await GetData('https://principe-fresco-api.herokuapp.com/products/'+'1')
    showPrend(containerPrend, data);
});