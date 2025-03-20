import handleCardPreviewChange from '../previewChange';

const cardNumber = () => {
    const initialNumber = '################';
    const cardNumberInput = document.querySelector('#card-number');
    const cardNumberPreview = document.querySelector('#card-preview-number');
    handleCardPreviewChange(initialNumber, cardNumberInput, cardNumberPreview, 'number', 16, '#');
}

export default cardNumber;



