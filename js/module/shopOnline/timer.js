export const handleTimer = () => {

    const changeBannerPromoText = () => {
        const timer = document.querySelector('.timer');
        timer.remove();
        const timerPromoText = document.querySelector('.item__text-notebook');
        timerPromoText.textContent = 'ноутбуки - всегда отличный подарок';
        timerPromoText.classList.add('item__text-notebook-changed');
        const itemGallery = timerPromoText.closest('.item__gallery-notebook');
        itemGallery.classList.add('item__gallery-notebook-changed');
    };

    const deadline = document.querySelector('.item__timer.timer');
    if (deadline) {
        const hasDeadlineAttr = deadline.hasAttribute('data-timer-deadline');
        if (hasDeadlineAttr) {
            deadline.insertAdjacentHTML('beforeend', `
            <p class="timer__title">До конца акции:</p>
            <div class="timer__block">
              <p><span class="timer__count timer-days-num">00
              </span><span class="timer__units  timer-days-text">дней</span></p>
              <p><span class="timer__count timer-hours-num">00
              </span><span class="timer__units  timer-hours-text">часов</span></p>
              <p><span class="timer__count timer-minutes-num">00
              </span><span class="timer__units  timer-minutes-text">минут</span></p>
              <p><span class="timer__count timer-seconds-num">00
              </span><span class="timer__units  timer-seconds-text">секунд</span></p>
            </div>
          `);
        }
    } else {
        changeBannerPromoText();
        return;
    }

    const deadlineAttr = deadline.getAttribute('data-timer-deadline');
    const timerBlockDays = document.querySelector('.timer-days-num');
    const timerBlockHour = document.querySelector('.timer-hours-num');
    const timerBlockMinutes = document.querySelector('.timer-minutes-num');
    const timerBlockSeconds = document.querySelector('.timer-seconds-num');

    const textDays = document.querySelector('.timer-days-text');
    const textHour = document.querySelector('.timer-hours-text');
    const textMinutes = document.querySelector('.timer-minutes-text');
    const textSeconds = document.querySelector('.timer-seconds-text');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadlineAttr).getTime();
        if (!dateStop) return false;
        const dateNow = Date.now();

        const timezoneoffset = Math.abs(new Date().getTimezoneOffset()) * 60 * 1000;
        const myTimeZone = (+3) * 60 * 60 * 1000;

        const myCurrentTime = dateNow - timezoneoffset + myTimeZone;

        const timeRemaining = dateStop - myCurrentTime;
        // const timeRemaining = dateStop - dateNow;

        const seconds = Math.floor(timeRemaining / 1000 % 60);
        const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
        const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
        const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);


        return {
            days, hours, minutes, seconds, timeRemaining,
        };
    };

    const getArrayOfDigits = (number) => {
        return Array.from(String(number), n => Number(n));
    };

    const handleTextDeclension = ({days: day, hours: hour, minutes: min, seconds: sec, timeRemaining}) => {
        const dayNumber = [[0], [1], [2, 4]];
        const timerObject = [
            {timeMeasure: day, declension: 'дней-день-дня', text: textDays},
            {timeMeasure: hour, declension: 'часов-час-часа', text: textHour},
            {timeMeasure: min, declension: 'минут-минута-минуты', text: textMinutes},
            {timeMeasure: sec, declension: 'секунд-секунда-секунды', text: textSeconds},
        ];
        for (const {timeMeasure, declension, text} of timerObject) {
            const digits = getArrayOfDigits(timeMeasure);
            if (digits.length > 1 && digits[digits.length - 2] === 1) continue;
            const last = digits.slice(-1)[0];
            const declensions = declension.split('-');
            for (let j = 0; j < dayNumber.length; j++) {
                const [x, y] = dayNumber[j];
                if (!y && last === x) {
                    text.textContent = declensions[j];
                } else if (last >= x && last <= y) {
                    text.textContent = declensions[j];
                }
            }
        }
    };

    const start = () => {
        const timer = getTimeRemaining();
        if (!timer) return changeBannerPromoText();
        handleTextDeclension(timer);


        timer.days === 0 ? timerBlockDays.closest('p').remove() : (timerBlockDays.textContent = `${timer.days}`);
        if (timer.days < 10) timerBlockDays.classList.add('timer__count_less-ten');
        timerBlockHour.textContent = timer.hours < 10 ? `0${timer.hours}` : `${timer.hours}`;
        timerBlockMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : `${timer.minutes}`;
        timerBlockSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : `${timer.seconds}`;


        const intevalId = setTimeout(start, 1000);

        if (timer.timeRemaining <= 0) {

            clearTimeout(intevalId);
            changeBannerPromoText();
        }
    };


    start();
};
