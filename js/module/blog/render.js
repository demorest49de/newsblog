import {createMain} from './create.js';


export const
    renderBlog = (selectorApp) => {
        const data = createMain();
        const rendered = document.querySelector(`${selectorApp}`);
        rendered.append(data.main);
        return data;
    };

