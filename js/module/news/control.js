import {postNewsSearchHandler} from "./rest.js";

export const submitForm = ($) => {
    $.form.addEventListener('submit', async e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        const {search} = data;
        $.form.reset();
        postNewsSearchHandler($, search);
    });
};