let typefaces = [
    'Baskerville', 
    'Bodoni', 
    'Caslon', 
    'Cochineal', 
    'Didot',
    'Courier', 
    'Garamond', 
    'Inconsolata', 
    'Montserrat', 
    'NotoSans', 
    'Raleway', 
    'Roboto', 
    'Universal',
]; 
let correctString; 

const prepareProblem = () => {
    for (let i = 0; i < typefaces.length; i++) {
        const j = Math.floor(Math.random() * i);
        [typefaces[i], typefaces[j]] = [typefaces[j], typefaces[i]];
    }
    document.querySelectorAll('.option').forEach((option, index) => {
        option.style.backgroundImage = `url('assets/${typefaces[index]}.PNG')`; 
    }); 
    correctString = typefaces[Math.floor(Math.random() * typefaces.length)]; 
    document.querySelector('.problem').innerText = correctString; 
}; 

window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < typefaces.length; i++) {
        const option = document.createElement('div'); 
        option.className = 'option';
        document.querySelector('.choice-container').appendChild(option); 
    }
    prepareProblem(); 
    document.querySelector('.choice-container').addEventListener('click', choiceClick => {
        if(choiceClick.target.style.backgroundImage.includes(`${correctString}.PNG`)) {
            prepareProblem(); 
        }
    }); 
}); 
