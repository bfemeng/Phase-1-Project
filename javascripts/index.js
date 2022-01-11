const mainDiv = () => document.getElementById("main");

const homePageLink = () => document.getElementById('home-page-link');

const tvShowSearchLink = () => document.getElementById('tv-show-search-link');

    
   function searchShow(query) {
       const url = `https://api.tvmaze.com/search/shows?q=${query}`;
       fetch(`https://api.tvmaze.com/search/shows?q=${query}`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         showName: "Girls",
       }),
    }).then(response => response.json())
        .then((jsonData) => {
     console.log(jsonData);
    });
}


  const homePageLinkEvent = () => {
      homePageLink().addEventListener('click', () => {
          renderHomePage();
        })
  }

  const tvShowSearch = (e) => {
    e.preventDefault();
    console.log(e.target.querySelector("input").value)
    searchShow(e.target.querySelector("input").value)
    }


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", tvShowSearch)
    homePageLinkEvent();
})

//document.querySelector("form").querySelector("input").value