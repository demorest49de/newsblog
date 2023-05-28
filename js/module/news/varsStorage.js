export const getVars = ([header, main, footer]) => {

  const newsList = main.querySelector('.news__list');

  return {header, main, footer,newsList};
};
