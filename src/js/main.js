"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const txtArea = document.querySelector('.txtarea--js')
const btnLoad = document.querySelector('.load--js')
const btnSave = document.querySelector('.save--js')

btnLoad.addEventListener('click', () => {
  txtArea.value = localStorage.getItem('txt')
})

btnSave.addEventListener('click', () => {
  localStorage.setItem('txt', txtArea.value)
})


console.log(`Hello world!`);