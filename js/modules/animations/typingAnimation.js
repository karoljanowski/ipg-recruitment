export const typingAnimation = (span, content) => {
    span.classList.add('animate-to-top');
    setTimeout(() => {
        span.textContent = content;
    }, 150);
    setTimeout(() => {
        span.classList.remove('animate-to-top');
    }, 300);
}