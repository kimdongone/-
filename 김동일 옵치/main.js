// let down = document.querySelector('header')
// window.addEventListener('scroll', () => {
//     down.classList.add('down')
// })
// window.addEventListener('scroll', () => console.log(window.scrollY))

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1300) {
        header.classList.add('down');
    } else {
        header.classList.remove('down');
    }

});

let bar = document.querySelector('.bar');
addEventListener('scroll',()=>bar.style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%');


// let body_h = document.body.offsetHeight
// let view_h = window.innerHeight
// let real_h = body_h - view_h

// // 식: ( 현재스크롤의 위치 / 스크롤 가능한 크기 ) *100
// let per = ( window.scrollY / real_h ) * 100

// console.log(Math.floor(per) + '%')

// bar.style.width = per + '%'

