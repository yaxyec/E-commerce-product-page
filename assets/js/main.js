

function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

let includes = Array.from(document.querySelectorAll('[data-include]'));
includes.map(include => {
    let file = include.dataset['include'] + '.html';
    load(include, file);
});

function handlerActive(ele){
    ele.parentElement.querySelectorAll('.active').forEach(element=>{
        element.classList.remove('active')
    })
    ele.classList.add('active')
}


let choose_Current = document.querySelector('.choose_current')
let choose_Image = document.querySelector('.choose_image img')
let choose_List = document.querySelectorAll('.choose_list ul li')
let choose_control = document.querySelector('.img_control')

let indexImgc = 1


choose_List.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        let indexImg = e.target.children[0].src.slice(-15,-14);
        let  SourceImage = `/assets/images/image-product-${indexImg}.jpg`;

        choose_Image.src = SourceImage


        handlerActive(e.target)
    })
})

choose_control.firstElementChild.onclick = ()=>{
    indexImgc > 1? indexImgc--:null;
    let SourceImagec = `/assets/images/image-product-${indexImgc}.jpg`;
    choose_Image.src = SourceImagec
}
choose_control.lastElementChild.onclick = ()=>{
    indexImgc < 4? indexImgc++:null;
    let SourceImagec = `/assets/images/image-product-${indexImgc}.jpg`;
    choose_Image.src = SourceImagec

}

let container = document.querySelector('.container')
let nav = document.querySelectorAll('ul .header__nav__li')

for(let i = 0;  i < nav.length; i++)
{
    nav[i].addEventListener('click',function(e)
    {
        for(let j = 0 ; j < nav.length;j++)
        {
            console.log(nav[j])
            nav[j].classList.remove("active")
        }
        e.target.parentElement.classList.add("active")
            console.log(e.target.parentElement)
    })
}


let profile = document.querySelectorAll('.header__profile')

profile.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        console.log(e.target.tagName)
        if(e.target.tagName == 'IMG'){
        }else { document.querySelector('.header__profile__userimage img').style.border = 'none' }
        if(e.target.tagName == 'svg' && e.target.parentElement.className == 'header__profile__shopping'){
            
        }
    })
})

let card_shop = document.querySelector('.card_shop')

document.querySelector('.card_add').onclick = (e)=>{
        e.stopPropagation()
    if(card_shop.style.display == 'none'){
        card_shop.style.display = ''
        document.querySelector('.card_shop img').src = document.querySelector('.choose_image img').src
        document.querySelector('.card_add').classList.remove('active')

    }else if(card_shop.style.display == ''){
        card_shop.style.display = 'none'
    }
}

document.querySelectorAll('.container').forEach(ele=>
    ele.addEventListener('click',(e)=>{
        e.stopPropagation()
        if(e.target == document.querySelector('.card_shop use')){
            card_shop.style.display = 'none'
        }
        if(e.target.parentElement !== card_shop || e.target.parentElement.parentElement !== card_shop ) {
        
            // card_shop.style.display = 'none'
        }
    })
)

let number = 0;
document.querySelectorAll('.card_control').forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        console.log(e.target)
        console.log(e.currentTarget.firstElementChild)
        if(e.target == e.currentTarget.firstElementChild && number >= 1) {
            number--
            console.log(number)
        }
        if(e.target == e.currentTarget.lastElementChild) {
            number++
        }
    document.querySelector('.value').textContent = number
    })
            console.log(number)
})


document.querySelector('.icon_menu').onclick = ()=>{
    document.querySelector('.menu').classList.add('active')
    document.querySelector('.menuShadow').classList.add('on')
}
document.querySelector('.menu__exit').onclick = ()=>{
    document.querySelector('.menu').classList.remove('active')
    document.querySelector('.menuShadow').classList.remove('on')
}
