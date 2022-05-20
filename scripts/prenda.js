import GetData from '../helpers/getData.js';
import showPrend from '../modules/showPrend.js';

const container = document.querySelector('#containerPrend');
container.addEventListener('DOMContentLoaded', async () => {
    const containerPrend = document.getElementById('containerPrend');
    const { data } = await GetData('https://principe-fresco-api.herokuapp.com/products/'+'1')
    showPrend(containerPrend, data);
});