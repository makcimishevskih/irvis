const modals = (button, openSelector, closeSelector, closeClickOverlay = true) => {

    const btns = document.querySelectorAll(button),
          openModal = document.querySelector(openSelector), 
          closeBtn = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scrollWidth = calcScroll();

    function closeAllModalWindows() {
        windows.forEach(window => {
            window.style.display = 'none';
            document.body.style.marginRight = '0';
        });
    }


    function bindModal() {

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeAllModalWindows();

                openModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
                clearTimeout(timerModal);
            });
        });
    

        const timerModal = setTimeout(() => {
            document.querySelector('.popup_engineer_btn').style.display = 'block';
        }, 0);
        

        closeBtn.addEventListener('click', () => {
            closeAllModalWindows();

            openModal.style.display = 'none';
            document.body.style.marginRight = '0';
        });


        openModal.addEventListener('click', (e) => {
            if (e.target === openModal && closeClickOverlay) {
                closeAllModalWindows();

                openModal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0';
            }
        });


        window.addEventListener('keydown', (e) => {
            if (e.code == 'Escape') {
                closeAllModalWindows();
                
                openModal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0';
            }
        });


    }
    
    function calcScroll() {
        let div = document.createElement('div');
        
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visible = 'hidden';

        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;

        return scrollWidth;    
    }

    bindModal();
};

export default modals;