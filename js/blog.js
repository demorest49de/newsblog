import {loadItemsHandler, paginationClickHandler, paginationHandler} from "./module/blog/load.js";
import {renderBlog} from './module/blog/render.js';


{
    const blogInit = (selectorApp) => {
        const data = renderBlog(selectorApp);
        const {blogPagination, main, blogList, pageElems} = data;
        const $ = {blogPagination, main, blogList, pageElems};

        paginationClickHandler($);
        paginationHandler($);
        loadItemsHandler($);
    };

    window.blogInit = blogInit;
}