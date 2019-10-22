var settingBtnElement = document.querySelector('.card-market__settings');
var activateToogleMarketElement = document.querySelector('.card-market__toogle-active-btn');
var stateMarketElement = document.querySelector('.card-market__state--creating');

settingBtnElement.addEventListener('click', function (event) {
        if (activateToogleMarketElement.style.display == 'none') {
            activateToogleMarketElement.style.display = "block";
            event.btnHandl = true;
        }
    }
);

document.addEventListener('click', function (event) {
        if (!event.btnHandl) {       
            activateToogleMarketElement.style.display = "none";
        }
    }
);

setTimeout(function() {
    stateMarketElement.classList.remove('card-market__state--creating');
    stateMarketElement.textContent = 'Синхронизированно';
}, 5000)
