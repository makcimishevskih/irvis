import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';



// Необходимо сделать валдацию в формах

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    const deadline = new Date('2021-12-18');

    tabs('.decoration_slider', '.no_click', 'after_click', '.decoration_content > div > div');
    tabs('.glazing_slider', '.glazing_block', 'active', '.glazing_content');
    tabs('.popup_calc_content', '.balcon_icons_img', 'do_image_more',  '.big_img > img', 'inline-block');

    modals('.phone_link', '.popup', '.popup .popup_close');
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    modals('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    images();

    timer(deadline);
    changeModalState(modalState);
    forms(modalState, '[data-modal]');

});