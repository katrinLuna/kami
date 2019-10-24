var settingBtnElements = document.querySelectorAll('.card-market__settings');
var activateToogleMarketElements = document.querySelectorAll('.card-market__toogle-active-btn');
var stateMarketElement = document.querySelector('.card-market__state--creating');

settingBtnElements.forEach(function(item, i) {

    item.addEventListener('click', function (event) {
        if (activateToogleMarketElements[i].hidden = true) {
            activateToogleMarketElements[i].hidden = false;
            event.btnHandl = i;
        }
    });
});

document.addEventListener('click', function (event) {
    if (event.btnHandl != null) {
        activateToogleMarketElements.forEach(function (item, i) {
            if (i !== event.btnHandl) {
                item.hidden = true;
            }
        });
    } else {
        activateToogleMarketElements.forEach(function (item, i) {
            item.hidden = true;
        });
    }
});

setTimeout(function() {
    stateMarketElement.classList.remove('card-market__state--creating');
    stateMarketElement.textContent = 'Синхронизированно';
}, 5000)
