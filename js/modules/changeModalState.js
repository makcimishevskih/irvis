import checkNumInputs from "./checkNumInputs";
import blockForm from './blockForm';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll(".balcon_icons_img"),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');


    const calcForms = document.querySelectorAll('.calc_form');
    
    windowForm.forEach((frm, i) => {
        if (frm.classList.contains('do_image_more')){
            state['form'] = i + 1;
        }
    });


    calcForms.forEach(frm => {
        
        switch (frm.type) {
            case 'text':
                if (frm.name) {
                    state[frm.name] = '';
                    break;
                }
                state[frm.id] = '';
                break;

            case 'checkbox':
                state[frm.name] = '';
                break;

            case 'select-one':
                state['type'] = 'tree';
                break;
        }
    });
    
    // Выключаем кнопку калькулятора
    blockForm('#width', '#height', '.popup_calc_button');
    blockForm('#view_type', '.checkbox', '.popup_calc_profile_button');

    // console.log(state);

    function bindActionToElems(event, elem, prop) {

        elem.forEach((item, i) => {
            item.addEventListener(event, () => {                
                switch(item.nodeName) {
                    case 'SPAN':

                        state[prop] = i + 1;
                        break;

                    case 'INPUT': 
                        if (item.getAttribute('type') === 'checkbox') {
                            
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';

                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                            break;
                        }
                        checkNumInputs('#width');
                        checkNumInputs('#height');
                        
                        state[prop] = item.value;
                        break;

                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                blockForm('#width', '#height', '.popup_calc_button');
                blockForm('#view_type', '.checkbox', '.popup_calc_profile_button');
            });
        });
    }


    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;