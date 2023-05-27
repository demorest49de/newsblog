import {renderNews} from './module/news/render.js';

{
    const newsInit = (selectorApp) => {
        const data = renderNews(selectorApp);

    };
    window.newsInit = newsInit;
}