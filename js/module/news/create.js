const createHeader = () => {
    const header = document.createElement('header');
    header.className = 'header';
    header.insertAdjacentHTML('beforeend', `
        <div class="container header__container">
            <div class="header__logo-block">
                <img
                        class="header__logo"
                        src="img/header/logo.svg"
                        alt="Логотип магазина ShopOnline">
                <img
                        class="header__tagline"
                        src="img/header/only-fresh-news.svg"
                        alt="only fresh news">
            </div>
            <form class="header__form-search form-search" method="post" name="header__form-search">
                <input type="search"
                       class="form-search__input"
                       name="search"
                       placeholder="Я хочу узнать про...">
                <button class="form-search__button" type="submit" aria-label="Поиск">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0996 16.1287L19.785 18.8127C19.9102 18.9424 19.9795 19.1161 19.9779 19.2963C19.9764 19.4766 19.9041 19.649 19.7766 19.7765C19.6491 19.904 19.4767 19.9763 19.2964 19.9778C19.1162 19.9794 18.9425 19.9101 18.8129 19.7849L16.1275 17.0995C14.3727 18.603 12.1037 19.3683 9.79673 19.235C7.48976 19.1016 5.32411 18.0799 3.7542 16.3843C2.1843 14.6886 1.33218 12.4508 1.37666 10.1404C1.42113 7.82998 2.35874 5.62661 3.99273 3.99261C5.62673 2.35862 7.8301 1.42101 10.1405 1.37654C12.4509 1.33206 14.6887 2.18418 16.3844 3.75408C18.08 5.32399 19.1018 7.48964 19.2351 9.79661C19.3685 12.1036 18.6031 14.3725 17.0996 16.1274V16.1287ZM10.3126 17.875C12.3183 17.875 14.2419 17.0782 15.6601 15.66C17.0783 14.2417 17.8751 12.3182 17.8751 10.3125C17.8751 8.30679 17.0783 6.38324 15.6601 4.96499C14.2419 3.54675 12.3183 2.74999 10.3126 2.74999C8.30691 2.74999 6.38336 3.54675 4.96512 4.96499C3.54687 6.38324 2.75011 8.30679 2.75011 10.3125C2.75011 12.3182 3.54687 14.2417 4.96512 15.66C6.38336 17.0782 8.30691 17.875 10.3126 17.875V17.875Z"
                              fill="#212121"/>
                    </svg>

                </button>
            </form>

            <div class="header__select-wrapper">
                <select class="header__country-select">
                    <option value="russian">россия</option>
                    <option value="russian">россия</option>
                    <option value="russian">россия</option>
                    <option value="russian">россия</option>
                </select>
            </div>
        </div>
    `);
    return header;
};

export const createSearch = () => {
    const search = document.createElement('section');
    search.className = 'search';
    //TODO    search.ariaLabel = 'По вашему запросу “Россия” найдено 8 результатов';v
    //TODO По</p>вашему запросу “Россия” найдено 8 результатов
    search.insertAdjacentHTML('beforeend', `
         <div class="container news__container">
            <h2 class="news__subtitle"><p class="news__subtitle-text">
                По</p>вашему запросу “Россия” найдено 8 результатов
            </h2>
            <div class="news__list">
            </div>
        </div>
    `);
    return search;
};

const createMain = () => {
    const main = document.createElement('main');
    main.className = 'main';
    main.insertAdjacentHTML('beforeend', `
        <h1 class="visually-hidden">only fresh news</h1>
        <section class="news" aria-label="Каталог новостей">
            <div class="container news__container">
                <h2 class="news__subtitle"><p class="news__subtitle-text">
                    свежие</p>новости
                </h2>
                <div class="news__list">
                </div>
            </div>
        </section>
    `);
    return main;
};
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.insertAdjacentHTML('beforeend', `
        <div class="container footer__container">
            <div class="footer__logo-block">
                <img
                        src="img/header/logo.svg"
                        alt="Логотип магазина ShopOnline">
                <img
                        src="img/header/only-fresh-news.svg"
                        alt="only fresh news">
            </div>
            <span class="footer__copyright">© 2020-2022 News</span>
            <div class="footer__social">
                <figure class="footer__figure">
                    <img src="/img/footer/twitter.svg" alt="twitter">
                </figure>
                <figure class="footer__figure">
                    <img src="/img/footer/social.svg" alt="social">
                </figure>
                <figure class="footer__figure">
                    <img src="/img/footer/vk.svg" alt="vk">
                </figure>
            </div>
        </div>
    `);
    return footer;
};


export const createNews = () => {
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    return [header, main, footer];
};


export const createRow = ({
                              author,
                              description,
                              publishedAt,
                              title,
                              url,
                              urlToImage,
                              source,
                          }) => {
    const article = document.createElement('article');
    article.classList.add('list__item', 'item');

    let [date, time] = publishedAt.split("T");
    time = time.slice(0, time.length - 1);
    const [yyyy, mm, dd] = date.split('-');
    const [h, m] = time.split(':');
    // console.log(' : ',date, time);
    article.innerHTML = `
        <a class="item__link" href="${url}">
            <figure class="item__image">
                <img src="${urlToImage}" alt="${title}">
            </figure>
            <div class="item__block">
                <h3 class="item__subtitle">
                    ${title}
                </h3>
                <div class="item__preview-text">
                    ${description}
                </div>
                <div class="item__subblock">
                    <div class="item__datetime">
                        <span class="item__date">${dd}/${mm}/${yyyy}</span>
                        <span class="item__time">${h}:${m}</span>
                    </div>
                    <span class="item__author">${author ? author : ''}</span>
                </div>
            </div>
        </a>
  `;
    return article;
};