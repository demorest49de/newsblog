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

        // if (body) options.body = JSON.stringify(body);
        let result = '';
        if(postfix === 'everything'){
            result = url + postfix + '?' + `q=${body}` + '&sortBy=popularity';
        }

        const country = $.selectedCountry || document.querySelector('.header__country-select').value;

        if(postfix === 'top-headlines'){
            result = url + postfix + '?' + `country=${country}`;
        }

        if (headers) options.headers = headers;



        const response = await fetch(result, options);
        // const response = await fetch('/js/test.json', options);
        console.log(' : ',response);
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

const cbRenderNews = (error, data, $) => {
    if (error) {
        const subtitle = document.querySelector('.news .news__subtitle');
        subtitle.textContent = `Что-то пошло не так..`;
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
        const subtitle = document.querySelector('.search .news__subtitle');
        subtitle.textContent = `Что-то пошло не так..`;
        return;
    }

    const result = data.articles.filter((e, i, array) => {
        const length = array.length;
        const remainder = length % 4;
        const value = length - remainder;
        const percentage = 20;
        const result  =  (value*percentage)/value;
        return i < result;
    });
    return {result, $};
};

export const getNewsHandler = ($) => {
    const initLoadNews = () => {
        preload.show();
        return Promise.all([
            fetchRequest($.URL, 'top-headlines', {
            // fetchRequest('/js/test.json', '', {
                callback: cbRenderNews,
                headers: {
                    'X-Api-Key': $.APIKEY,
                },
                $,
            }),
        ]);
    };

    initLoadNews().then(data => {
        preload.remove();
        renderNewsItems(data[0], $.newsList);
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
            // method: $.verbs.post,
        });
    };

    initLoadNews().then(data => {
        preload.remove();
        if(!data) return;
        renderSearchNewsItems(data);
    });
};
