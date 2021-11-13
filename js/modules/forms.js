import checkNumInputs from "./checkNumInputs";

const forms = (state, dataSelector) => {


    const allForms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          windows = document.querySelectorAll(dataSelector);
    
    
    checkNumInputs('input[name="user_phone"]');

    let message = {
        loading: 'Загрузка',
        success: 'Форма отправлена. С вами скоро свяжутся!',
        failure: 'Ошибка!',
    };


    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };


    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            inputs.forEach(input => {
                input.value = '';
            });

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                console.log(res.ok);
                statusMessage.textContent = message.failure;

            })
            .finally(() => {
                setTimeout(() => {
                    statusMessage.remove();
                    
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });

                    document.body.style.overflow = '';
                    state = {};
                    console.log('Удалено');

                }, 2000);
            });
        });
    });

    

};

export default forms;