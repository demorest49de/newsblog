import {preload} from "./preload.js";
import {renderNewsItems} from "./render.js";

export const loadNewsHandler = ($) => {
    const APIKEY = '05445c673177460c890f4f1790250d10';
    const URL = '';

    const verbs = {
        get: 'GET',
        post: 'POST', // повторное применение имеет тот же результат и не приведет к созданию нового объекта
        put: 'PUT', // по id заменяеет весь объект и не создает новый
        delete: 'DELETE',
        patch: 'PATCH', // по id заменяеет часть объекта (меняет конкретные поля)
    };

    const fetchRequest = async (
        postfix, {
            method = 'get',
            id = '',
            callback,
            headers,
            vars = {},
        }) => {
        try {
            const options = {
                method
            };

            if (headers) options.headers = headers;
            const response = await fetch('/js/test.json', options);
            // const response = await fetch(URL, options);

            if (response.ok) {
                const data = await response.json();
                if (callback) return callback(null, data, vars);
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
        return result;
    };

    const initLoadNews = () => {

        preload.show();
        return Promise.all([
            fetchRequest('', {
                callback: cbRenderNews,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': APIKEY,
                },
            }),
        ]);
    };

    initLoadNews().then(data => {
        preload.remove();
        renderNewsItems(data[0], $.newsList);

    });
};
