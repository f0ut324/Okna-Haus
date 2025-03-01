'use strict'
const p = document.querySelectorAll('article > p')
document.addEventListener('scroll',()=>{
    let y = parseInt(window.pageYOffset)
    if (y < 800){
        p[0].classList.add('active_header_btn')
        p[1].classList.remove('active_header_btn')
        p[2].classList.remove('active_header_btn')
        p[3].classList.remove('active_header_btn')
    }else if(y > 1200 && y < 2500){
        p[0].classList.remove('active_header_btn')
        p[1].classList.add('active_header_btn')
        p[2].classList.remove('active_header_btn')
        p[3].classList.remove('active_header_btn')
    }else if(y > 2500 && y < 3650){
        p[0].classList.remove('active_header_btn')
        p[1].classList.remove('active_header_btn')
        p[2].classList.add('active_header_btn')
        p[3].classList.remove('active_header_btn')
    }else if(y > 3650){
        p[0].classList.remove('active_header_btn')
        p[1].classList.remove('active_header_btn')
        p[2].classList.remove('active_header_btn')
        p[3].classList.add('active_header_btn')
    }
})
p[0].addEventListener('click', ()=>{ //перелистывание по нажатии на текст в шапке
    window.scrollTo(0,600)
})
p[1].addEventListener('click', ()=>{
    window.scrollTo(0,1350)
})
p[2].addEventListener('click', ()=>{
    window.scrollTo(0,2550)
})
p[3].addEventListener('click', ()=>{ 
    window.scrollTo(0,3750)
})
services4.addEventListener('mouseover', ()=>{
    pointer4.src = 'pic/orangePointer.svg';
})
services4.addEventListener('mouseout', ()=>{
    pointer4.src = 'pic/pointer.svg';
})
services3.addEventListener('mouseover', ()=>{
    pointer3.src = 'pic/orangePointer.svg';
})
services3.addEventListener('mouseout', ()=>{
    pointer3.src = 'pic/pointer.svg';
})
services2.addEventListener('mouseover', ()=>{
    pointer2.src = 'pic/orangePointer.svg';
})
services2.addEventListener('mouseout', ()=>{
    pointer2.src = 'pic/pointer.svg';
})
services1.addEventListener('mouseover', ()=>{
    pointer1.src = 'pic/orangePointer.svg';
})
services1.addEventListener('mouseout', ()=>{
    pointer1.src = 'pic/pointer.svg';
})

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
function isEmpty(value){
    if(value == ""){
        return false;
    }else{
        return true;
    }
}
function isPhoneValid(phone) { 
    return PHONE_REGEXP.test(phone);
}
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}
orderBtn.addEventListener('click', ()=>{ //отправка заявки на замер в банере
    if(isEmpty(name_input.value)==false || isEmpty(number_input.value)==false || isEmpty(mail_input.value)==false || isEmpty(checkboxOrder.checked)==false || isEmailValid(mail_input.value)==false || isPhoneValid(number_input.value) == false){
        invalid_info.classList.add('active_error')
        invalid_info.classList.remove('inactive_error')
    }else{
        order_text.innerHTML = name_input.value + ", <br> Ваша заявка будет рассмотрена</h1>"
        pop_up1.classList.add('active_pop_up')
        if(invalid_info.classList.contains('active_error')){
            invalid_info.classList.remove('active_error')
            invalid_info.classList.add('inactive_error')
        }
    } 
    if(mail_input.value == "SOSAL????"){
        invalidInfoText.innerHTML = "ДА!!!!!";
        invalid_info.classList.add('active_error');
        invalid_info.classList.remove('inactive_error')
    }
})

close_pop_up_order.addEventListener('click', ()=>{ //закрытие pop up окна заявки банера
    pop_up1.classList.remove('active_pop_up')
    if(invalid_info.classList.contains('active_error')){
        invalid_info.classList.remove('active_error')
    }
})
const arrRequestBooklets = document.querySelectorAll('.arrRequestBooklets')
close_pop_up_bid.addEventListener('click', ()=>{ //закрытие pop up заявки на замер из шапки
    pop_up2.classList.remove('active_pop_up')
    if(invalid_info.classList.contains('active_error')){
        invalid_info.classList.remove('active_error')
    }
})
for(let i =0; i < arrRequestBooklets.length; i++){
    arrRequestBooklets[i].addEventListener('click', ()=>{    //появление pop up заявки на замер из шапки
        console.log("YES");
        pop_up2.classList.add('active_pop_up')
        if(invalid_info.classList.contains('active_error')){
            invalid_info.classList.remove('active_error')
        }
    })  
}
orderBtn2.addEventListener('click', ()=>{ 
    if(isEmpty(name_input_bid.value)==false || isEmpty(number_input_bid.value)==false || isEmpty(mail_input_bid.value)==false || isEmpty(checkboxBid.checked)==false || isEmailValid(mail_input_bid.value)==false || isPhoneValid(number_input_bid.value) == false){
        invalid_info_bid.classList.add('active_error')
        invalid_info_bid.classList.remove('inactive_error')
    }else{
        pop_up2.classList.remove('active_pop_up')
        if(invalid_info.classList.contains('active_error')){
            invalid_info.classList.remove('active_error')
        }
        order_text.innerHTML = name_input_bid.value + ", <br> Ваша заявка будет рассмотрена</h1>"
        pop_up1.classList.add('active_pop_up')
        if(invalid_info_bid.classList.contains('active_error')){
            invalid_info_bid.classList.remove('active_error')
            invalid_info_bid.classList.add('inactive_error')
        }
    } 
})
function checkSlide(counter){
    if(counter == 1){
        productSelection.classList.add("picture1")
        productSelection.classList.remove("picture2")
        productSelection.classList.remove("picture3")
        productSelection.classList.remove("picture4")
        productsTextButton1.classList.add('activeText')
        productsTextButton2.classList.remove('activeText')
        productsTextButton3.classList.remove('activeText')
        productsTextButton4.classList.remove('activeText')    
    }else if(counter == 2){
        productSelection.classList.remove("picture1")
        productSelection.classList.add("picture2")
        productSelection.classList.remove("picture3")
        productSelection.classList.remove("picture4")
        productsTextButton1.classList.remove('activeText')
        productsTextButton2.classList.add('activeText')
        productsTextButton3.classList.remove('activeText')
        productsTextButton4.classList.remove('activeText')   
    }else if(counter == 3){
        productSelection.classList.remove("picture1")
        productSelection.classList.remove("picture2")
        productSelection.classList.add("picture3")
        productSelection.classList.remove("picture4")
        productsTextButton1.classList.remove('activeText')
        productsTextButton2.classList.remove('activeText')
        productsTextButton3.classList.add('activeText')
        productsTextButton4.classList.remove('activeText')   
    }else if(counter == 4){
        productSelection.classList.remove("picture1")
        productSelection.classList.remove("picture2")
        productSelection.classList.remove("picture3")
        productSelection.classList.add("picture4")
        productsTextButton1.classList.remove('activeText')
        productsTextButton2.classList.remove('activeText')
        productsTextButton3.classList.remove('activeText')
        productsTextButton4.classList.add('activeText')  
    }
}

let counter = 1
productsTextButton1.addEventListener('click',()=>{ 
    counter = 1
    button1.classList.add("inactiveButton")
    button2.classList.remove("inactiveButton")
    checkSlide(counter)
})
productsTextButton2.addEventListener('click',()=>{
    counter = 2
    button1.classList.remove("inactiveButton")
    button2.classList.remove("inactiveButton")
    checkSlide(counter)
})
productsTextButton3.addEventListener('click',()=>{
    counter = 3 
    button1.classList.remove("inactiveButton")
    button2.classList.remove("inactiveButton")
    checkSlide(counter)
})
productsTextButton4.addEventListener('click',()=>{
    counter = 4  
    button1.classList.remove("inactiveButton")
    button2.classList.add("inactiveButton")
    checkSlide(counter)
})

button1.addEventListener('click',()=>{
    if(counter > 1){
        counter--
        button2.classList.remove("inactiveButton")
    }
    if(counter == 1){
        button1.classList.add("inactiveButton")
    }   
    checkSlide(counter)
})
button1.addEventListener('mouseover',()=>{
    if(counter > 1)
        button1.classList.add("activeButton")
})
button1.addEventListener('mouseout',()=>{
        button1.classList.remove("activeButton")
})
button2.addEventListener('click',()=>{
    if(counter < 4){
        counter++
        button1.classList.remove("inactiveButton")
    }    
    if(counter == 4){
        button2.classList.add("inactiveButton")
    }        
    checkSlide(counter)
})
button2.addEventListener('mouseover',()=>{
    if(counter < 4)
        button2.classList.add("activeButton")
})
button2.addEventListener('mouseout',()=>{
        button2.classList.remove("activeButton")
})


let counter1 = 1
function checkSlide1(counter1){
    if(counter1 == 1){
        aboutCompany.classList.add("picture1_1")
        aboutCompany.classList.remove("picture1_2")
        aboutCompany.classList.remove("picture1_3")
        aboutCompany.classList.remove("picture1_4")
        aboutCompany_Button1.classList.add('activeText')
        aboutCompany_Button2.classList.remove('activeText')
        aboutCompany_Button3.classList.remove('activeText')
        aboutCompany_Button4.classList.remove('activeText')    
    }else if(counter1 == 2){
        aboutCompany.classList.remove("picture1_1")
        aboutCompany.classList.add("picture1_2")
        aboutCompany.classList.remove("picture1_3")
        aboutCompany.classList.remove("picture1_4")
        aboutCompany_Button1.classList.remove('activeText')
        aboutCompany_Button2.classList.add('activeText')
        aboutCompany_Button3.classList.remove('activeText')
        aboutCompany_Button4.classList.remove('activeText')    
    }else if(counter1 == 3){
        aboutCompany.classList.remove("picture1_1")
        aboutCompany.classList.remove("picture1_2")
        aboutCompany.classList.add("picture1_3")
        aboutCompany.classList.remove("picture1_4")
        aboutCompany_Button1.classList.remove('activeText')
        aboutCompany_Button2.classList.remove('activeText')
        aboutCompany_Button3.classList.add('activeText')
        aboutCompany_Button4.classList.remove('activeText')    
    }else if(counter1 == 4){
        aboutCompany.classList.remove("picture1_1")
        aboutCompany.classList.remove("picture1_2")
        aboutCompany.classList.remove("picture1_3")
        aboutCompany.classList.add("picture1_4")
        aboutCompany_Button1.classList.remove('activeText')
        aboutCompany_Button2.classList.remove('activeText')
        aboutCompany_Button3.classList.remove('activeText')
        aboutCompany_Button4.classList.add('activeText')    
    }
}
aboutCompany_Button1.addEventListener('click', ()=>{
    counter1 = 1
    checkSlide1(counter1)
})
aboutCompany_Button2.addEventListener('click', ()=>{
    counter1 = 2
    checkSlide1(counter1)
})
aboutCompany_Button3.addEventListener('click', ()=>{
    counter1 = 3
    checkSlide1(counter1)
})
aboutCompany_Button4.addEventListener('click', ()=>{
    counter1 = 4
    checkSlide1(counter1)
})


let counter2 = 1
function checkSlide2(counter1){
    if(counter1 == 1){
        reviews.classList.add("picture2_1")
        reviews.classList.remove("picture2_2")
        reviews.classList.remove("picture2_3")
    }else if(counter1 == 2){
        reviews.classList.remove("picture2_1")
        reviews.classList.add("picture2_2")
        reviews.classList.remove("picture2_3")
    }else if(counter1 == 3){
        reviews.classList.remove("picture2_1")
        reviews.classList.remove("picture2_2")
        reviews.classList.add("picture2_3")
    }
}
button3.addEventListener('click',()=>{
    if(counter2 > 1){
        counter2--
        button4.classList.remove("inactiveButton")
    }
    if(counter2 == 1){
        button3.classList.add("inactiveButton")
    }   
    checkSlide2(counter2)
})
button3.addEventListener('mouseover',()=>{
    if(counter2 > 1)
        button3.classList.add("activeButton")
})
button3.addEventListener('mouseout',()=>{
        button3.classList.remove("activeButton")
})
button4.addEventListener('click',()=>{
    if(counter2 < 3){
        counter2++
        button3.classList.remove("inactiveButton")
    }    
    if(counter2 == 3){
        button4.classList.add("inactiveButton")
    }        
    checkSlide2(counter2)
})
button4.addEventListener('mouseover',()=>{
    if(counter2 < 3)
        button4.classList.add("activeButton")
})
button4.addEventListener('mouseout',()=>{
        button4.classList.remove("activeButton")
})