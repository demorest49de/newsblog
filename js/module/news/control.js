import {getNewsSearchHandler, getNewsHandler} from "./rest.js";

export const submitForm = ($) => {
    $.form.addEventListener('submit', async e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        const {search} = data;
        $.form.reset();
        getNewsSearchHandler($, search);
    });
};

export const handleCountrySelect = ($) => {
    $.countrySelect.addEventListener('change', ({target}) => {
        $.selectedCountry = target.value;
        $.form.querySelector('.form-search__input').value = '';
        getNewsHandler($);
    });
};