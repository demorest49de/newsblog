import {createNews, createRow} from './create.js';


const mainMinHeight = (app) => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');

    const h = screen.height - header.offsetHeight - footer.offsetHeight;
    main.style.minHeight = h + `px`;
};

export const
    renderNews = (selectorApp) => {
        const data = createNews();
        const app = document.querySelector(`${selectorApp}`);
        app.append(...data);
        mainMinHeight(app);
        return data;
    };

export const renderNewsItems = (items, newsList) => {
    while (newsList.firstChild) {
        newsList.removeChild(newsList.firstChild);
    }
    console.log(' : ', items);
    items.forEach((value) => {
        const row = createRow(value);
        newsList.append(row);
    });
};