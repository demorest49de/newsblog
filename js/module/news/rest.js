import {preload} from "./preload.js";
import {renderNewsItems, renderSearchNewsItems} from "./render.js";

const fetchRequest = async (url,
                            postfix, {
                                method = 'get',
                                callback,
                                body,
                                headers,
                                $,
                            }) => {
    try {
        const options = {
            method
        };

        if (body) options.body = JSON.stringify(body);

        if (headers) options.headers = headers;
        const response = await fetch(url, options);
        // const response = await fetch($.URL, options);
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
        return;
    }
    const result = data.articles.filter((e, i) => {
        return i < 8;
    });
    return {result, $};
};

const cbRenderSearchNews = (error, data, $) => {
    if (error) {
        return;
    }
    const result = data.articles.filter((e, i) => {
        return i < 9;
    });
    return {result, $};
};

export const getNewsHandler = ($) => {
    const initLoadNews = () => {
        preload.show();
        return Promise.all([
            fetchRequest('/js/test.json', '', {
                callback: cbRenderNews,
                headers: {
                    'Content-Type': 'application/json',
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
        return fetchRequest('/js/search.json', '', {
            callback: cbRenderSearchNews,
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': $.APIKEY,
            },
            body: data,
            $,
            method: $.verbs.post,
        });
    };

    initLoadNews().then(data => {
        preload.remove();
        renderSearchNewsItems(data);
    });
};
