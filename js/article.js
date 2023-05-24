import {createMarkup} from './module/article/createArticle.js';
import {loadItemsHandler} from './module/article/loadArticle.js'

{
    const articleInit = (selectorApp) => {
        const vars = createMarkup();
        loadItemsHandler(vars);
    };

    window.articleInit = articleInit;
}

