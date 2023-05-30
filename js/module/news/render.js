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

const loadImageAsync = (url) => {
    return new Promise((resolve, reject) => {
        const tester = new Image();
        tester.addEventListener('load', ({target}) => {
            // console.log(' : ', target);
            resolve(target.src);
        });
        tester.addEventListener('error', ({target}) => {
            console.log(' : ', target);
            resolve(target.src);
        });
        tester.src = url;
    });
};


const initImg = async (items, $) => {
    return await items.map(async item => {
        const src = await loadImageAsync(item.urlToImage).then(data => {
            return data;
        });
        try {
            item.urlToImage = src;
            return item;
        } catch (err) {
            console.warn(' : ', err);
        }
    });
};

export const renderNewsItems = ({result: items, $}, newsList) => {
    while (newsList.firstChild) {
        newsList.removeChild(newsList.firstChild);
    }

    initImg(items, $).then(items => {
        console.log(' : ', items);
        items.forEach((data) => {
            data.then(data => {
                const row = createRow(data);
                $.newsList.append(row);
            });
        });
    });
};

export const renderSearchNewsItems = ({result: items, $}) => {
    let searchSection = document.querySelector('.search');
    if (!$.body.trim()) {
        searchSection?.remove();
        return;
    }
    const newsSection = document.querySelector('.news');

    if (!searchSection) {
        searchSection = createSearch();
        newsSection.insertAdjacentHTML('beforebegin', searchSection.outerHTML);
    }

    const searchList = document.querySelector('.search .news__list');
    const subtitle = document.querySelector('.search .news__subtitle');
    subtitle.textContent = `По вашему запросу "${$.body}" найдено ${items.length} результатов`;

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