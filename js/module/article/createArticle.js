const createArticleHeader = () => {
    const header = document.createElement('header');
    header.classList.add('ba__header');
    header.insertAdjacentHTML('beforeend', `
        <div class="ba__container">
            <nav class="ba__navigation">
                <ul class="ba__bread-crumbs">
                    <li class="ba__item"><a class="ba__link" href="/ShopOnline">Главная</a>
                        <svg class="ba__nav-arrow">
                            <use href="./img/article/nav-arrow.svg#nav-arrow"></use>
                        </svg>
                    </li>
                    <li class="ba__item"><a class="ba__link" href="/ShopOnline/blog">Блог</a>
                        <svg class="ba__nav-arrow">
                            <use href="./img/article/nav-arrow.svg#nav-arrow"></use>
                        </svg>
                    </li>
                    <li class="ba__item">здесь название статьи
                    </li>
                </ul>
            </nav>
        </div>
    `);
    return header;
};

const createArticleMain = () => {
    const main = document.createElement('main');
    main.insertAdjacentHTML('beforeend', `
        <section class="ba__section">
            <div class="ba__container">
                <div class="ba__grid-container">
                    <div class="ba__hero">
                        <h1 class="ba__title">здесь название статьи</h1>
                        <p class="ba__text">Материала для обуви лучше натуральной кожи все ещё не придумали.
                            Качественную кожу очень приятно носить, она идеально ложится по ноге,
                            в нужных местах немного растягивается.
                            В кожаной обуви, если она соответствует погоде, создаётся хороший микроклимат –
                            ноги не мёрзнут, не потеют, и чувствуют себя очень комфортно. Неудивительно,
                            что по статистике больше 60% покупателей выбирает обувь именно из гладкой
                            натуральной кожи. Вдобавок кожа практична и не требует трудоёмкого ухода.</p>
<!--                        <p class="ba__text">Но это совсем не означает, что можно раз в полгода протереть обувь тряпочкой-->
<!--                            и-->
<!--                            на этом остановиться. Так же, как кожа лица и тела, материал обуви нуждается в-->
<!--                            заботе. Регулярный уход надолго продлит срок службы любимой пары и сделает её-->
<!--                            аккуратной и сияющей, словно только что из магазина.</p>-->
                        <div class="ba__subblock">
                            <a class="ba__backlink" href="blog.html">
                                <svg class="ba__left-arrow" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/arrows.svg#left"></use>
                                </svg>
                                <span class="ba__link-text">К списку статей</span>
                            </a>
                            <div class="ba__about-info">
                                <span class="ba__author"></span>
                                <div class="ba__reviews-subblock">
                                    <div class="article__datetime">
                                        <span class="article__date">22.04.2023,</span>
                                        <span class="article__time">15:15</span>
                                    </div>

                                    <div class="article__views-comments">
                                <span class="article__text-block">
                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/views-chat.svg#views"></use>
                                </svg>
                                    1.1K</span>
                                        <span class="article__text-block">
                                <svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
                                    <use href="./img/blog/views-chat.svg#chat"></use>
                                </svg>
                                    150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside class="ba__adv">
                        <ul class="ba__adv-list">
                            <li class="ba__adv-item">
                                <figure class="ba__adv-image-block">
                                    <figcaption class="ba__image-text-block">
                                        <span class="ba__image-text-big">Горящие туры в Стамбул от 20 000 руб.</span>
                                        <span class="ba__image-text-small">Окунись в настоящую восточную сказку</span>
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="ba__adv-item">
                                <figure class="ba__adv-image-block">
                                    <figcaption class="ba__image-text-block">
                                        <span class="ba__image-text-big">Новый RENAULT DUSTER</span>
                                        <span class="ba__image-text-small">Легендарный внедорожник в новом дизайне</span>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    `);
    return main;
};

export const createMarkup = (selectorApp) => {
    const app = document.querySelector('#app');
    const header = createArticleHeader();
    const main = createArticleMain();

    app.append(header, main);
    const breadCrumbsTitle = header.querySelector('.ba__item:nth-child(3)');
    const title = main.querySelector('.ba__title');
    const text = main.querySelector('.ba__text');
    const author = main.querySelector('.ba__author');
    const articleDate = main.querySelector('.article__date');
    const articleTime = main.querySelector('.article__time');
    const vars = {
        breadCrumbsTitle,
        title,
        text,
        author,
        articleDate,
        articleTime
    };
    return vars;
};