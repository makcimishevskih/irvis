const blockForm = (firstSelector, secondSelector, btnSelector) => {

    const firstElem = document.querySelectorAll(firstSelector),
          secondElem = document.querySelectorAll(secondSelector),
          btn = document.querySelector(btnSelector);


    // console.log(firstElem);
    // console.log(secondElem);

    // Первое окно

    if (firstElem.length === 1 && secondElem.length === 1) {
        if (firstElem[0].tagName == 'INPUT' && secondElem[0].tagName == 'INPUT') {
            if (!firstElem[0].value || !secondElem[0].value) {
                btn.disabled = true;
            } else {
                btn.disabled = false;
            }
        }
    }
    
    

// Второе окно
    


    let j = 0;


    if (firstElem[0].tagName == 'SELECT' && secondElem[0].classList.contains('checkbox')) {

        for (let i = 0; i < secondElem.length; i++) {
            if (secondElem[i].checked) {
                j++;
                break;
            }
        }

        for (let i = 0; i < firstElem[0].children.length; i++) {
            if (firstElem[0].children[i].selected) {
                j++;
                break;
            }
        }

        if (j === 2) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
};

export default blockForm;