var settingBtnElement = document.querySelector('.card-market__settings');
var activateToogleMarketElement = document.querySelector('.card-market__toogle-active-btn');

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
