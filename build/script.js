var settingBtnElements = document.querySelectorAll('.card-market__settings');
var activateToogleMarketElements = document.querySelectorAll('.card-market__toogle-active-btn');
var stateMarketElement = document.querySelector('.card-market__state--creating');

// settingBtnElements.addEventListener('click', function (event) {
//         if (activateToogleMarketElement.style.display == 'none') {
//             activateToogleMarketElement.style.display = "block";
//             event.btnHandl = true;
//         }
//     }
// );

settingBtnElements.forEach(function(item, i) {

    item.addEventListener('click', function (event) {
    // добавить цикл в обработчик который будет скрыть все элементы кроме i
        
        if (activateToogleMarketElements[i].style.display == 'none') {
            activateToogleMarketElements[i].style.display = "block";
            event.btnHandl = true;            
            event.bla = 1; //это если у нас два обработчика на одно событие - в плане ловим и на документе это событие - в параметр записываем i элемент и внутри сл обработчика делаем скрытие 
            // -- если есть это свойство в объекте событие- значит у нас через кнопку событие прошло - и тогда у любого кроме i-элемента скрываем блок, а если нет свойства - то скрываем у всех
            // можно в  btnHandl  прям класть цифру и ниже проверять, что тут нет null 
            console.log(event);
        }
    });
});

document.addEventListener('click', function (event) {
    console.log('document');
    if (!event.btnHandl) {
        console.log(event);
        console.log(btnIndex);      
        activateToogleMarketElements[btnIndex].style.display = "none";
    }
});

setTimeout(function() {
    stateMarketElement.classList.remove('card-market__state--creating');
    stateMarketElement.textContent = 'Синхронизированно';
}, 5000)
