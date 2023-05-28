import {renderNews} from './module/news/render.js';
import {loadNewsHandler} from "./module/news/load.js";
import {getVars} from "./module/news/varsStorage.js";

{
    const newsInit = (selectorApp) => {
        const data = renderNews(selectorApp);
        const $ = getVars(data);
        loadNewsHandler($);
    };
    window.newsInit = newsInit;
}