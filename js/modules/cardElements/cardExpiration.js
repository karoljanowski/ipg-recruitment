import handleCardPreviewChange from '../previewChange';

const cardExpiration = () => {
    generateSelectYearsOptions()
    cardExpirationMonth()
    cardExpirationYear()
}

const cardExpirationMonth = () => {
    const cardExpirationMonthInput = document.querySelector('#card-month');
    const cardExpirationMonthPreview = document.querySelector('#card-preview-expiration-month');
    const initialMonth = 'MM';
    handleCardPreviewChange(initialMonth, cardExpirationMonthInput, cardExpirationMonthPreview, 'month', 2, '0');
}

const cardExpirationYear = () => {
    const cardExpirationYearInput = document.querySelector('#card-year');
    const cardExpirationYearPreview = document.querySelector('#card-preview-expiration-year');
    const initialYear = 'YY';
    handleCardPreviewChange(initialYear, cardExpirationYearInput, cardExpirationYearPreview, 'year', 2, '0');
}

const generateSelectYearsOptions = () => {
    const cardExpirationYearInput = document.querySelector('#card-year');
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 10; i++) {
        years.push(currentYear + i);
    }
    years.forEach(year => {
        cardExpirationYearInput.innerHTML += `<option value="${year.toString().slice(2)}">${year}</option>`;
    });
}

export default cardExpiration;