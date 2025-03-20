const focusAnimation = () => {
    const inputToPreviewMap = {
        'card-number': '#card-preview-number',
        'card-name': '.card__preview--holder',
        'card-month': '.card__preview--expiration',
        'card-year': '.card__preview--expiration',
        'card-cvv': '#card-preview-cvv'
    };

    const inputElements = [
        document.querySelector('#card-number'),
        document.querySelector('#card-name'),
        document.querySelector('#card-month'),
        document.querySelector('#card-year'),
        document.querySelector('#card-cvv')
    ];

    const createFocusBorder = () => {
        const focusBorder = document.createElement('div');
        focusBorder.className = 'focus-border';
        document.querySelector('.card__preview').appendChild(focusBorder);
        return focusBorder;
    };

    const focusBorder = createFocusBorder();

    const moveBorderTo = (targetElement) => {
        if (!targetElement) return;

        const rect = targetElement.getBoundingClientRect();
        const previewRect = document.querySelector('.card__preview').getBoundingClientRect();
        
        focusBorder.style.top = (rect.top - previewRect.top - 4) + 'px';
        focusBorder.style.left = (rect.left - previewRect.left - 6) + 'px';
        focusBorder.style.width = (rect.width + 12) + 'px';
        focusBorder.style.height = (rect.height + 8) + 'px';
        
        focusBorder.classList.add('active');
    };

    inputElements.forEach(inputEl => {
        inputEl.addEventListener('focus', () => {
            const previewSelector = inputToPreviewMap[inputEl.id];
            const previewElement = document.querySelector(previewSelector);
            
            if (previewElement) {
                moveBorderTo(previewElement);
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        const isInputElement = inputElements.some(input => input === e.target);
        if (!isInputElement) {
            focusBorder.classList.remove('active');
        }
    });
};

export default focusAnimation;