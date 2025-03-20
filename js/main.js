import cardNumber from './modules/cardElements/cardNumber'
import cardHolder from './modules/cardElements/cardHolder'
import cardExpiration from './modules/cardElements/cardExpiration'
import cardCVV from './modules/cardElements/cardCVV'
import focusAnimation from './modules/animations/focusAnimation'
window.addEventListener('load', () => {
    cardNumber()
    cardHolder()
    cardExpiration()
    cardCVV()
    focusAnimation()
})