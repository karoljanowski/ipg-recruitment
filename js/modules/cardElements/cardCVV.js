import handleCardPreviewChange from "../previewChange";

const cardCVV = () => {
    const cardCVVInput = document.querySelector('#card-cvv');

    cardCVVInput.addEventListener('focus', (e) => {
        const cardPreview = document.querySelector('#card-preview');
        cardPreview.classList.add('card__preview--flipped');
    });

    document.addEventListener('click', (e) => {
        if (e.target != cardCVVInput) {
            const cardPreview = document.querySelector('#card-preview');
            cardPreview.classList.remove('card__preview--flipped');
        }
    });

    const initialCVV = 'CVV';
    const cardCVVPreview = document.querySelector('#card-preview-cvv');
    handleCardPreviewChange(initialCVV, cardCVVInput, cardCVVPreview, 'cvv', 3, ' ');
}

export default cardCVV;
