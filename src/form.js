const form = document.querySelector('form');
const emailError = document.getElementById('email-error');
const emailInput = document.getElementById('email');

function formValidation(data){
    if (data !== ''){
        if(data.includes('@')){
            console.log('valid email');
            return true;
        }else{
            console.log('missing @')
            return false;
        }
    }else {
        console.log('empty')
        return false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    for (const key in data) {
        if (formValidation(data[key]) === false){
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-red', 'placeholder-red', 'focus:outline-red', 'bg-red/15', 'text-red');
        }else{
            window.location.assign(`index-sucess.html?${key}=${data[key]}`)
            emailError.classList.add('hidden');
            emailInput.classList.remove('border-red', 'placeholder-red', 'focus:outline-red', 'bg-red/15', 'text-red');
        }
    }
});

form.addEventListener('input', (e) =>{
    const data = e.target.value;
    if(formValidation(data) === false){
        emailError.classList.remove('hidden');
        emailInput.classList.add('border-red', 'placeholder-red', 'focus:outline-red', 'bg-red/15', 'text-red');    
    }else{
        emailError.classList.add('hidden');
        emailInput.classList.remove('border-red', 'placeholder-red', 'focus:outline-red', 'bg-red/15', 'text-red');
    }
});