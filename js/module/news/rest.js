import {preload} from "./preload.js";
import {renderNewsItems, renderSearchNewsItems} from "./render.js";

const fetchRequest = async (url,
                            postfix, {
                                method = 'GET',
                                callback,
                                body,
                                headers,
                                $,
                            }) => {
    try {
        const options = {
            method
        };

        let result = '';
        if (postfix === 'everything') {
            result = url + postfix + '?' + `q=${body}` + '&sortBy=popularity';
        }

        const country = $.selectedCountry || document.querySelector('.header__country-select').value;
//TODO очищать поиск если выбрана другая страна; также очищать строку поиска при смене страны;
        if (postfix === 'top-headlines') {
            result = url + postfix + '?' + `country=${country}`;
        }
        // result += `&apiKey=${$.APIKEY}`;
        if (headers) options.headers = headers;

        const response = await fetch(result, options);
        // const response = await fetch('/js/test.json', options);
        console.log(' : ', response);
        $.body = body;
        if (response.ok) {
            const data = await response.json();
            if (callback) return callback(null, data, $);
        }
    } catch (err) {
        console.log(' : ', err);
        return callback(err);
    }
};

const showErrorMessage = () => {
    const subtitle = document.querySelector('.news .news__subtitle');
    subtitle.textContent = `Что-то пошло не так..`;
};

const cbRenderNews = (error, data, $) => {
    if (error) {
        showErrorMessage();
        return;
    }
    const result = data.articles.filter((e, i, array) => {
        const remainder = array.length % 4;
        return i < array.length - remainder;
    });
    return {result, $};
};

const cbRenderSearchNews = (error, data, $) => {
    if (error) {
        showErrorMessage();
        return;
    }

    const result = data.articles.filter((e, i, array) => {
        const length = array.length;
        const remainder = length % 4;
        const value = length - remainder;
        const percentage = 20;
        const result = (value * percentage) / value;
        return i < result;
    });
    return {result, $};
};

export const getNewsHandler = ($) => {
    const initLoadNews = () => {
        preload.show();
        return Promise.all([
            fetchRequest($.URL, 'top-headlines', {
                callback: cbRenderNews,
                headers: {
                    // 'X-Api-Key': $.APIKEY,
                },
                $,
            }),
        ]);
    };

    initLoadNews().then(data => {
        preload.remove();
        if (data[0]) {
            renderNewsItems(data[0], $.newsList);
        }else{
            showErrorMessage();
        }
    });
};

export const postNewsSearchHandler = ($, data) => {
    const initLoadNews = () => {
        preload.show();
        return fetchRequest($.URL, 'everything', {
            callback: cbRenderSearchNews,
            headers: {
                'X-Api-Key': $.APIKEY,
            },
            body: data,
            $,
        });
    };

    initLoadNews().then(data => {
        preload.remove();
        console.log(' : ', data);
        if (!data) {
            showErrorMessage();
            return;
        }
        renderSearchNewsItems(data);
    });
};
