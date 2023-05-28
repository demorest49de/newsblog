import {renderNews} from './module/news/render.js';
import {getNewsHandler} from "./module/news/rest.js";
import {getVars} from "./module/news/varsStorage.js";
import {submitForm} from "./module/news/control.js";

{
    const newsInit = (selectorApp) => {
        const data = renderNews(selectorApp);
        data.push(selectorApp);
        const $ = getVars(data);
        $.selectorApp = selectorApp;
        getNewsHandler($);
        submitForm($);
    };
    window.newsInit = newsInit;
}