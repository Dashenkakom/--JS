//document.querySelector('.header-menu__logo').style.border = '1px solid red'
//console.dir(document.querySelector('.header-menu__logo'))
//const link = document.querySelector('.header-menu__item a')
const links = document.querySelectorAll('.header-menu__item a')
//console.log(links);
//const array = [1, 2, 3, 4, 5]
seamless.polyfill();
//console.log(link);
//console.log(links);
links.forEach((element) => {
    //document.style.border = '1px solid green';
    //console.dir(element)
    //element.onclick = () => {
    //    console.log('click');
    //}
    //element.onclick = () => {
     //   console.log('click1');
    //}
    element.addEventListener('click', (event) => {
        event.preventDefault();
        //console.log(event);
        const id = element.getAttribute('href').substring(1)
        
        const section = document.getElementById(id)
        console.log(section);
        if(section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
        //if(id !== '#'){
        //    const section = document.querySelector(id)
        //    console.log(section);
        // } else {
        //    console.log('у элемента в href только #');
        //}          
    })
    //element.addEventListener('click', () =>{
    //    console.log('click1');
    //})    
})
//for(let i = 0; i < array.length; i++){
//    console.log(array[i]);
//}
//array.forEach((elem) => {
//    console.log(elem);
//})