// window.onload = function() {
//     var btn = document.querySelector('.btn');    

//     btn.addEventListener('click', function(item) {
//         item.preventDefault();
//         ajaxGet();
//     });
// }
// var cityListEl = document.querySelector('.city-list');

// // clar old city list 
// function clear () {  
//     cityListEl.innerHTML= '';    
// }

// // create city list 
// function render (item) {      
//     var div = document.createElement('div');
//     div.className = 'city';
//     div.innerHTML = `<strong class="cite__name">${item.city_name}</strong> 
//                     <img class="cite__picture" src="${item.image_url}"/>`;     
//     cityListEl.appendChild(div);
// }

// function renderOther (item) {
//     var city = document.querySelector('.cityother');

//     city.innerHTML += `<div><h2>${item.city_name}</h2></div>`;
// }


// function ajaxGet () {
//     var xhr = new XMLHttpRequest (); 
//     xhr.onreadystatechange =  function() {
//        if(xhr.readyState == 4 && xhr.status == 200) {
//         clear();
//         var locations = JSON.parse(xhr.response);         
//         locations.forEach(function (location) {
//             if(location.country =="Russian Federation") {            
//             render(location);
//             } else if (location.country =="United States of America") {
//                 renderOther(location);
//             }
//         });
//        }
//     };
//     xhr.open('GET', "../locations.json");
//     xhr.setRequestHeader("X-RapidAPI-Host", "apidojo-booking-v1.p.rapidapi.com");
//     xhr.setRequestHeader("X-RapidAPI-Key", "1b0e442584msh4cd153768d0eec3p1dc04cjsn664d2bd185ed");
//     xhr.send();
// }
console.log('работает script.js');
var newScript = document.createElement("script");
newScript.src = "main.js";
document.body.appendChild(newScript);

var lamboList = document.querySelector('.main-lambo-list');

var lamboListItems = document.querySelectorAll('.main-lambo-list__item');

// lamboListItems.forEach((elem) => {

//     elem.addEventListener('mouseover', (evt) => {

//         lamboListItems.forEach((item) => {
//             item.classList.remove('unhovered');
//             if (item !== evt.target.closest('.main-lambo-list__item')) {
//                 item.classList.add('unhovered')
//             }
//         });
//         // evt.target.closest('.main-lambo-list__item').classList.remove('vot');
//     });

//     elem.addEventListener('mouseout', () => {

//         lamboListItems.forEach((item) => {
//             item.classList.remove('unhovered');
//         });
//         // evt.target.closest('.main-lambo-list__item').classList.remove('vot');
//     });

// });

var onHover = function (evt) {
    if (!evt.target.closest('.main-lambo-list__item')) return;
    lamboListItems.forEach((item) => {
        item.classList.remove('unhovered');
        if (item !== evt.target.closest('.main-lambo-list__item')) {
            item.classList.add('unhovered')
        }
    });
};

var outHover = function (evt) {
    if (!evt.target.closest('.main-lambo-list__item')) return;
    lamboListItems.forEach((item) => {
        item.classList.remove('unhovered');
    });
};



lamboList.addEventListener('mouseover', onHover);
lamboList.removeEventListener('mouseover', outHover);

lamboList.removeEventListener('mouseout', onHover);
lamboList.addEventListener('mouseout', outHover);


var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});




// lamboListItems.forEach((elem) => {

//     elem.addEventListener('mouseover', (evt) => {

//         lamboListItems.forEach((item) => {
//             item.classList.remove('unhovered');
//             if (item !== evt.target.closest('.main-lambo-list__item')) {
//                 item.classList.add('unhovered')
//             }
//         });
//         // evt.target.closest('.main-lambo-list__item').classList.remove('vot');
//     });

//     elem.addEventListener('mouseout', () => {

//         lamboListItems.forEach((item) => {
//             item.classList.remove('unhovered');
//         });
//         // evt.target.closest('.main-lambo-list__item').classList.remove('vot');
//     });