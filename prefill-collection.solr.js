// ==UserScript==
// @name         Solr collection pre-fill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pre-fill sitecore_ in solr collection field
// @author       You
// @match        */solr/*
// @grant        none
// ==/UserScript==

(function() {
    document.querySelector('#collection-selector .chosen-single')
        .addEventListener('click', () => {
        document.querySelector('#collection-selector .chosen-search-input').value = 'sitecore_'
    });
})();
