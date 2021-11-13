const tabs = (wrapperSelector, tabsSelector, classSelector, contentSelector, display = 'block') => {


    // tabs(document.querySelector('.decoration_slider'), document.querySelectorAll('.no_click'), 'after_click');
    const wrapper = document.querySelector(wrapperSelector),
          tabs = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        tabs.forEach((tab, i) => {
            tab.classList.remove(classSelector);
            content.forEach(item => {
                item.style.display = 'none';
            });
        });
    }

    function showTabContent(i = 0) {
            tabs[i].classList.add(classSelector);
            content[i].style.display = display;
    }

    hideTabContent();
    showTabContent();

    wrapper.addEventListener('click', (e) => {
        tabs.forEach((tab, i) => {
            if (e.target === tab || (e.target === tab.querySelector('img') || e.target === tab.querySelector('a'))) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });
};

export default tabs;