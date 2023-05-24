const createPageLink = (pagination) => {

    const pages = document.createElement('nav');
    pages.classList.add('pagination__navigation');
    pages.ariaLabel = `pagination`;
    pages.insertAdjacentHTML(`beforeend`,
        `
            <ul class="pagination__list">
                 <li class="pagination__item pagination__item-active"><a class="pagination__link" data-pageNumber="1" href="blog.html">1</a></li>
                 <li class="pagination__item"><a class="pagination__link" data-pageNumber="2" href="blog.html?page=2">2</a></li>
                 <li class="pagination__item"><a class="pagination__link" data-pageNumber="3" href="blog.html?page=3">3</a></li>
             </ul>
        `);
    pagination.append(pages);
    const links = pages.querySelectorAll('.pagination__item .pagination__link');
    const pageList = pages.querySelector('.pagination__list');
    return {links: links, pageList: pageList};
};

const addPagination = (pagination) => {

    pagination.insertAdjacentHTML('afterbegin',
        `
        <a class="pagination__link-left">
            <svg class="pagination__left-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./img/blog/arrows.svg#left"></use></svg>
        </a>
        `
    );

    const pageElems = createPageLink(pagination);
    const leftLink = pagination.querySelector('.pagination__link-left');
    pageElems.leftLink = leftLink;
    pagination.insertAdjacentHTML('beforeend',
        `
        <a class="pagination__link-right" href="blog.html?page=2">
            <svg class="pagination__right-arrow" xmlns="http://www.w3.org/2000/svg"><use href="./img/blog/arrows.svg#right"></use></svg>
        </a>
        `
    );

    const rightLink = pagination.querySelector('.pagination__link-right');
    pageElems.rightLink = rightLink;
    return pageElems;
};

export const createMain = () => {
    const main = document.createElement('main');
    const section = document.createElement('section');
    section.classList.add('blog');
    section.ariaLabel = `блог`;
    main.append(section);
    const h1 = document.createElement('h1');
    h1.classList.add(`blog__title`, `visually-hidden`);
    section.append(h1);
    const container = document.createElement('div');
    container.classList.add('container', 'blog__container');
    section.append(container);
    const blogList = document.createElement('div');
    blogList.classList.add('blog__list');
    const pagination = document.createElement('div');
    pagination.classList.add('blog__pagination', `pagination`);
    const pageElems = addPagination(pagination);
    container.append(blogList, pagination);
    return {main, blogList, blogPagination: pagination, pageElems};
};