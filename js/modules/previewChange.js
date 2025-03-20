import { typingAnimation } from './animations/typingAnimation';

const handleCardPreviewChange = (initialContent, inputElement, previewElement, type, maxLength = initialContent.length, emptyChar = '#') => {
    for (let i = 0; i < maxLength; i++) {
        const span = document.createElement('span');
        span.textContent = initialContent[i];
        span.dataset.id = i + 1;
        span.classList.add('preview-span');
        previewElement.appendChild(span);
    }

    inputElement.addEventListener('input', (e) => {
        let input = e.target.value;

        if (type === 'number') {
            input = input.replace(/\D/g, '').slice(0, maxLength);
            let formattedInput = '';
            for (let i = 0; i < input.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedInput += ' ';
                }
                formattedInput += input[i];
            }
            e.target.value = formattedInput;
            input = input.replace(/\s/g, '');
        } else if (type === 'cvv') {
            input = input.replace(/\D/g, '').slice(0, maxLength);
            e.target.value = input;
        } else if (type === 'name') {
            input = input.replace(/[^a-zA-Z\s]/g, '').slice(0, maxLength);
            e.target.value = input;
        }

        if (input.length === 0) {
            for (let i = 0; i < maxLength; i++) {
                const span = previewElement.querySelector(`[data-id="${i + 1}"]`);
                typingAnimation(span, initialContent[i]);
            }
        } else {
            for (let i = 0; i < maxLength; i++) {
                const span = previewElement.querySelector(`[data-id="${i + 1}"]`);
                const newContent = input[i] !== '' && input[i] !== undefined ? input[i] : emptyChar;
    
                if (span.textContent !== newContent) {
                    typingAnimation(span, newContent);
                }
            }
        }
    });
}

export default handleCardPreviewChange;
