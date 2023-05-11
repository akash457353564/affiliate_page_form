

const country_code = document.querySelector('#country_code')
country_code.value = `+91`
country_code.setAttribute('readonly', ' ')

const user_name = document.querySelector('#name_field');
const user_mob = document.querySelector('#mob_num');
const wedding_date = document.querySelector('#wedding_date')

const name_err = document.querySelector('#name_err');
const phn_err = document.querySelector('#phn_err');

const submit_btn = document.querySelector('#form_submit_btn');

const pop_up_form_close_btn = document.querySelector('.pop-up-form_close')

wedding_date.type = 'date'

user_name.addEventListener('input', () => {
    name_err.style.display = 'none'
})

user_mob.addEventListener('input', () => {
    phn_err.style.display = 'none'
})

submit_btn.addEventListener('click', (e) => {
    const alphabets = /^[a-zA-Z]+$/
    if (!user_name.value) {
        e.preventDefault()
        name_err.style.display = 'flex'
    } else if (!user_mob.value) {
        e.preventDefault()
        phn_err.style.display = 'flex'
    } else if (user_mob.value.match(alphabets) || user_mob.value.length > 10 || user_mob.value.length < 10 || user_mob.value.startsWith('1') || user_mob.value.startsWith('2') || user_mob.value.startsWith('3') || user_mob.value.startsWith('4') || user_mob.value.startsWith('5')) {
        e.preventDefault()
        phn_err.style.display = 'flex'
        phn_err.textContent = 'Please enter a valid phone number'
    } else {
        
        return true
    }
})


///////////////SHOWING POP UP///////////////
let options = {
    threshold: 0.3,
  };

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting == true){
            if(document.cookie.indexOf("formSubmitted=true") !== -1){
                document.querySelector('.pop_up-form-wrapper').style.display = 'none'
            } else {
                document.querySelector('.pop_up-form-wrapper').style.display = 'flex'
            }
            
            if(document.cookie.indexOf("popupFormSubmitted=true") !== -1){
                document.querySelector('.pop_up-form-wrapper').style.display = 'none'
            } else {
                document.querySelector('.pop_up-form-wrapper').style.display = 'flex'
            }
            observer.unobserve(entry.target)
        } 
    })
}, options)

observer.observe(document.querySelector('.testimonial_block'))

pop_up_form_close_btn.addEventListener('click', ()=>{
    document.querySelector('.pop_up-form-wrapper').style.display = 'none'
})

/////////////////SHOWING POP UP ENDS//////////////////////////


////////////////POPUP FORM VALIDATIONS/////////////////////


const country_code2 = document.querySelector('#country_code_2')
country_code2.value = `+91`
country_code2.setAttribute('readonly', ' ')



const user_name2 = document.querySelector('#name_field_2');
const user_mob2 = document.querySelector('#mob_num_2');
const wedding_date2 = document.querySelector('#wedding_date_2')
wedding_date2.type = 'date'

const submit_btn2 = document.querySelector('#form_submit_btn_2');

const name_err2 = document.querySelector('#name_err_2');
const phn_err2 = document.querySelector('#phn_err_2');

user_name2.addEventListener('input', () => {
    name_err2.style.display = 'none'
})

user_mob2.addEventListener('input', () => {
    phn_err2.style.display = 'none'
})

submit_btn2.addEventListener('click', (e) => {
    console.log('here')
    const alphabets = /^[a-zA-Z]+$/
    if (!user_name2.value) {
        e.preventDefault()
        name_err2.style.display = 'flex'
    } else if (!user_mob2.value) {
        e.preventDefault()
        phn_err2.style.display = 'flex'
    } else if (user_mob2.value.match(alphabets) || user_mob2.value.length > 10 || user_mob2.value.length < 10 || user_mob2.value.startsWith('1') || user_mob2.value.startsWith('2') || user_mob2.value.startsWith('3') || user_mob2.value.startsWith('4') || user_mob2.value.startsWith('5')) {
        e.preventDefault()
        phn_err2.style.display = 'flex'
        phn_err2.textContent = 'Please enter a valid phone number'
    } else {
        
        return true
    }
})