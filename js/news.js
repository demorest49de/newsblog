import {renderNews} from './module/news/render.js';
import {loadNewsHandler} from "./module/news/load.js";
import {getVars} from "./module/news/varsStorage.js";

{
    const newsInit = (selectorApp) => {
        const data = renderNews(selectorApp);
        data.push(selectorApp);
        const $ = getVars(data);
        $.selectorApp = selectorApp;
        console.log(' : ',$);
        loadNewsHandler($);
    };
    window.newsInit = newsInit;
}