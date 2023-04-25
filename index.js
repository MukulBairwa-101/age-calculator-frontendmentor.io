const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");


const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

let dayResult = document.querySelector('.day-result')
let monthResult = document.querySelector('.month-result')
let yearResult = document.querySelector('.year-result')

let errorLabelDay = document.querySelector('.error-label-day')
let errorLabelMonth = document.querySelector('.error-label-month')
let errorLabelYear = document.querySelector('.error-label-year')

const btn = document.getElementById('btn')

const inpurErrors = {
    required:'This field is required',
    day:'Must be a valid day',
    month:'Must be a valid month',
    year:'Must be in the past'
}

let isValid = false;

// callbacks

const handleDayInput = (e)=>{
    if(+day.value> 31 || +day.value<0){
        dayError.textContent = inpurErrors.day
        day.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelDay.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else if(+day.value ===0){
        dayError.textContent =inpurErrors.required
        day.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelDay.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else {
        dayError.textContent =""
        day.style.borderColor = 'hsl(0, 0%, 86%)'
        errorLabelDay.style.color ='hsl(0, 0%, 86%)'
        isValid = true;
        return isValid;
    }
}


const handleMonthInput = (e)=>{
    if(+month.value> 12 || +month.value<0){
        monthError.textContent = inpurErrors.month
        month.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelMonth.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else if(+month.value ===0){
        monthError.textContent =inpurErrors.required
        month.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelMonth.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else {
        monthError.textContent =""
        month.style.borderColor = 'hsl(0, 0%, 86%)'
        errorLabelMonth.style.color ='hsl(0, 0%, 86%)'
        isValid = true;
        return isValid;
    }
}


const handleYearInput = (e)=>{
    if(+year.value> 2023 || +year.value < 0){
        yearError.textContent = inpurErrors.year
        year.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelYear.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else if(+year.value ===0){
        yearError.textContent =inpurErrors.required
        year.style.borderColor = 'hsl(0, 100%, 67%)'
        errorLabelYear.style.color ='hsl(0, 100%, 67%)'
        isValid = false;
        return isValid;
    }
    else {
        yearError.textContent =""
        year.style.borderColor = 'hsl(0, 0%, 86%)'
        errorLabelYear.style.color ='hsl(0, 0%, 86%)'
        isValid = true;
        return isValid;
    }
}

const handleOutput = (e)=>{
if(isValid){
    let givenInput = new Date(`${month.value}/${day.value}/${year.value}`);
    let age = new Date(Date.now() - givenInput)
    console.log(givenInput);
    console.log(age);
    dayResult.textContent = age.getUTCDay() - 1
    monthResult.textContent = age.getUTCMonth()
    yearResult.textContent = age.getUTCFullYear()- 1970
    
}
else {
    handleDayInput()
    handleMonthInput()
    handleYearInput()

}
}


day.addEventListener('input',handleDayInput)
month.addEventListener('input',handleMonthInput)
year.addEventListener('input',handleYearInput)

btn.addEventListener('click',handleOutput)


