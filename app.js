$(() => {
    $('#search-form').submit((e) => {
        e.preventDefault();
        const searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });
    function getRequest(input) {
        const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
        const parameters = {
            q: input,
            ['api-key']: 'BK3yT3fGOecqnfR1cSFZtJwkLHT5aNic'
        };
        $.getJSON(url, parameters, (response) => {
            showResults(response.response.docs);
        });
        function showResults(articlesearch) {
       



            $.each(articlesearch, (i, value) => {

                $('#results').append(`<h1>${value.headline.main}</h1>`);
                $('#results').append(`<h3>${value.snippet}</h3>`);
                $('#results').append(`<p>${value.byline.original}</p>`);
                $('#results').append(`<p>${value.lead_paragraph}</p>`);
                $('#results').append(`<p>${value.news_desk}</p>`);
                $('#results').append(`<p>${value.source}</p>`);
                $('#results').append(`<p>${value.web_url}</p>`);
                $('#results').append(`<p>${value.pub_date}</p>`);
            });
         }

    }

});
