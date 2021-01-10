
console.log('Jubileu em todo lugar!');

let filenames = [
  'jubileu.jpg'
];

let imgs = document.querySelectorAll('img')
let url = chrome.extension.getURL('img/jubileu.jpg');

for(i in imgs){
  imgs[i].src = url
}
