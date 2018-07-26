"use strict";

function setAllBlogId() {
    let blogLinkElements = document.querySelectorAll('.blog-link');
    for(let i = blogLinkElements.length - 1; i >= 0; i--) {
        blogLinkElements[i].id = 'blog-' + (i+1);
    }
}

setAllBlogId();

$(document).ready(() => {
    $("#blog-1").click(() => {
        $("#blog-1").load("blogs/2018-06-05-remove-persistent-running-app-in-notification-background.html #blogPost");
    });
});

$(document).ready(() => {
    $("#blog-2").click(() => {
        $("#blog-2").load("blogs/2016-08-29-thoughts-on-internship-with-OpenDayLight.html #blogPost");
    });
});
