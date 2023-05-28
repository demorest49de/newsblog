import {createNews, createRow} from './create.js';


export const
    renderNews = (selectorApp) => {
        const data = createNews();
        const app = document.querySelector(`${selectorApp}`);
        app.append(...data);
        return data;
    };


export const renderNewsItems = (items, newsList) => {
    while (newsList.firstChild) {
        newsList.removeChild(newsList.firstChild);
    }
    console.log(' : ',items);
    items.forEach((value) => {
        const row = createRow(value);
        newsList.append(row);
    });
};