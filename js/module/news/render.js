import {createNews} from './create.js';


export const
    renderNews = (selectorApp) => {
        const data = createNews();
        const app = document.querySelector(`${selectorApp}`);
        app.append(...data);
        return data;
    };

