import {createNews, createRow, createSearch} from './create.js';


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

export const renderNewsItems = ({result: items, $}, newsList) => {
    while (newsList.firstChild) {
        newsList.removeChild(newsList.firstChild);
    }
    console.log(' : ', items);
    items.forEach((value) => {
        const row = createRow(value);
        newsList.append(row);
    });
};

export const renderSearchNewsItems = ({result: items, $}) => {
    const newsSection = document.querySelector('.news');
    let searchSection = document.querySelector('.search');

    if (!searchSection) {
        searchSection = createSearch();
        newsSection.insertAdjacentHTML('beforebegin', searchSection.outerHTML);
    }

    const searchList = document.querySelector('.search .news__list');
    const subtitle = document.querySelector('.search .news__subtitle');
    subtitle.textContent = `По вашему запросу "${$.body}" найдено ${$.body.length - 1} результатов`;
    console.log(searchSection.outerHTML);
    while (searchList.firstChild) {
        searchList.removeChild(searchList.firstChild);
    }

    console.log(' : ', items);
    if (Array.isArray(items)) {
        items.forEach((value) => {
            const row = createRow(value);
            searchList.append(row);
        });
    } else {
        const row = createRow(items);
        searchList.append(row);
    }
};