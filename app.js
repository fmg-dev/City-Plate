import { plates } from './plates.js';

const cities = document.getElementById('cities');
const plate = document.getElementById('plate');

generateCitiesSelect();
handleCitiesSelectChange();
// Define functions 
function generateCitiesSelect() {
    let optionOutput = '';
    for (let i = 0; i < plates.data.length; i++) {
        optionOutput += `<option value="${plates.data[i].il_adi}">${plates.data[i].il_adi}</option>`;
    }
    cities.innerHTML = optionOutput;
}

function handleCitiesSelectChange() {
    cities.addEventListener('change', function() {
        const selectedPlate = plates.data.filter(item => item.il_adi == this.value)[0];
        plate.innerHTML = selectedPlate.plaka_kodu;
    });
}
