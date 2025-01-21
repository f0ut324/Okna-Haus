'use strict'
const p = document.querySelectorAll('article > p')
p[1].classList.add
document.addEventListener('scroll',()=>{
    let y = parseInt(window.pageYOffset)
    if (y < 800){
        p[0].classList.add('active_header_btn')
        p[1].classList.remove('active_header_btn')
        p[2].classList.remove('active_header_btn')
        p[3].classList.remove('active_header_btn')
    }else if(y > 800 && y < 1500){
        p[0].classList.remove('active_header_btn')
        p[1].classList.add('active_header_btn')
        p[2].classList.remove('active_header_btn')
        p[3].classList.remove('active_header_btn')
    }
})
services4.addEventListener('mouseover', ()=>{
    pointer4.src = 'pic/orangePointer.png';
})
services4.addEventListener('mouseout', ()=>{
    pointer4.src = 'pic/pointer.png';
})
services3.addEventListener('mouseover', ()=>{
    pointer3.src = 'pic/orangePointer.png';
})
services3.addEventListener('mouseout', ()=>{
    pointer3.src = 'pic/pointer.png';
})
services2.addEventListener('mouseover', ()=>{
    pointer2.src = 'pic/orangePointer.png';
})
services2.addEventListener('mouseout', ()=>{
    pointer2.src = 'pic/pointer.png';
})
services1.addEventListener('mouseover', ()=>{
    pointer1.src = 'pic/orangePointer.png';
})
services1.addEventListener('mouseout', ()=>{
    pointer1.src = 'pic/pointer.png';
})

orderBtn.addEventListener('click', ()=>{
    if(name_input.value == "" || number_input.value == "" || mail_input.value == "" || checkboxOrder.checked != true){
        invalid_info.classList.add('active_error')
        invalid_info.classList.remove('inactive_error')
    }else{
        order_text.innerHTML = name_input.value + ", <br> Ваша заявка будет рассмотрена</h1>"
        pop_up1.classList.add('active_pop_up')
        if(invalid_info.classList.contains('active_error')){
            invalid_info.classList.remove('active_error')
        }
    } 
})

close_pop_up_order.addEventListener('click', ()=>{
    pop_up1.classList.remove('active_pop_up')
    if(invalid_info.classList.contains('active_error')){
        invalid_info.classList.remove('active_error')
    }
})
close_pop_up_add.addEventListener('click', ()=>{
    pop_up2.classList.remove('active_pop_up')
})
function showAdd(){
    pop_up2.classList.add('active_pop_up')
}
setTimeout(showAdd, 6500);



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