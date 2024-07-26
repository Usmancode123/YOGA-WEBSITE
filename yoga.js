const scrollRevealOption={
    distance:"50px",
    orgin:'bottom',
    duration:'1000',
}


ScrollReveal().reveal('.header__container h1',{
    ...scrollRevealOption,
    delay:500,
})

ScrollReveal().reveal('.header__container h2',{
    ...scrollRevealOption,
    delay:1000,
})

ScrollReveal().reveal('.header__container .btn',{
    ...scrollRevealOption,
    delay:1500,
})

ScrollReveal().reveal('.header__container img',{
    ...scrollRevealOption,
    origin:'right'
})


//why container//

ScrollReveal().reveal('.why__container .section__header',{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal('.why__container p',{
    ...scrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal('.why__container li',{
    ...scrollRevealOption,
    delay:1500,
    interval:500,
})
ScrollReveal().reveal('.why__container img',{
    ...scrollRevealOption,
    origin:'left',
})
ScrollReveal().reveal('.why__container img',{
    ...scrollRevealOption,
    origin:'left',
})
ScrollReveal().reveal('.hero__card',{
    ...scrollRevealOption,
    interval:500,
})
ScrollReveal().reveal('.classes__image',{
    ...scrollRevealOption,
    duration:1000,
    interval:500,
})
ScrollReveal().reveal('.membership__card',{
    ...scrollRevealOption,
    
    interval:500,
})
ScrollReveal().reveal('.post__card',{
    ...scrollRevealOption,
    
    interval:500,
})
ScrollReveal().reveal('.photos__card',{
    ...scrollRevealOption,
    
    interval:500,
})


