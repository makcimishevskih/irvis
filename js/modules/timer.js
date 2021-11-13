const timer = (endtime) => {

    setTimer(endtime);

    function determinateTime(end) {

        const timeDifference = Date.parse(end) - Date.parse(new Date());

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
              hours = Math.floor(timeDifference / ((1000 * 60 * 60)) % 24),
              minutes = Math.floor(timeDifference / (1000 * 60) % 60),
              seconds = Math.floor((timeDifference / 1000) % 60);

        return {
            timeDifference: timeDifference,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }


    function setTimer(end) {
        const days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        
        updateClock();
        
        
        function updateClock() {
            const t = determinateTime(end);
            
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.timeDifference <= 0) {
                clearTimeout(timeInterval);
                
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setTimer(endtime);
    
    function addZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }
};


export default timer;