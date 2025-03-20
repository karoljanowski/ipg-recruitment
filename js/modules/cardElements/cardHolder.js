import handleCardPreviewChange from '../previewChange';

const cardHolder = () => {
    const initialHolder = 'ad soyad';
    const cardHolderInput = document.querySelector('#card-name');
    const cardHolderPreviewName = document.querySelector('#card-preview-holder-name');
    handleCardPreviewChange(initialHolder, cardHolderInput, cardHolderPreviewName, 'name', 20, ' ');
}

export default cardHolder;