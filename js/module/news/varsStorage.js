export const getVars = ([header, main, footer, selectorApp]) => {

  const newsList = main.querySelector('.news__list');
  const app = document.querySelector(`${selectorApp}`);
  const form = header.querySelector('.header__form-search');
  const APIKEY = '05445c673177460c890f4f1790250d10';
  const URL = '';
  const verbs = {
    get: 'GET',
    post: 'POST', // повторное применение имеет тот же результат и не приведет к созданию нового объекта
    put: 'PUT', // по id заменяеет весь объект и не создает новый
    delete: 'DELETE',
    patch: 'PATCH', // по id заменяеет часть объекта (меняет конкретные поля)
  };
  return {header, main, footer,newsList, app, form, APIKEY, verbs, URL};
};
