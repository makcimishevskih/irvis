const images = () => {
 
    const imgPopup = document.createElement('div'), 
          bigImg = document.createElement('img'),
          workSection = document.querySelector('.works');

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.append(bigImg);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';




    workSection.addEventListener('click', (e) => {
        e.preventDefault();  
            
        if (e.target && e.target.classList.contains('preview')) {

            imgPopup.childNodes[0].classList.add('img_sizing');
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        } 

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};


export default images;