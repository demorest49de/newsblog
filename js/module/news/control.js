import {postNewsSearchHandler} from "./rest.js";

export const submitForm = ($) => {
    $.form.addEventListener('submit', async e => {
        e.preventDefault();
        $.form.reset();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        console.log(' : ',!!data.value);
        console.log(' : ',data.value);

        postNewsSearchHandler($, data.value);
    });
};