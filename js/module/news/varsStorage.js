export const getVars = ([header, main, footer, selectorApp]) => {

  const newsList = main.querySelector('.news__list');
  const app = document.querySelector(`${selectorApp}`);

  return {header, main, footer,newsList, app};
};
