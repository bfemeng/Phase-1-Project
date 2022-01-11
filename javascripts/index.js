/** Globals **/


/** NODE Getters **/
const mainDiv = () => document.getElementById("main");

const homePageLink = () => document.getElementById('home-page-link');

const tvShowSearchLink = () => document.getElementById('tv-show-search-link');



/** Event and Listeners **/
  //what time can I do this event (domcontentloaded?

  //what's going to trigger this event (click)?
  
  //effect (display home page)?

    
   function searchShow(query) {
       const url = `https://api.tvmaze.com/search/shows?q=${query}`;
       fetch(url)
        .then(response => response.json())
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


/** Renderers **/

//const renderHomePage = () => {
  //  mainDiv().innerHTML = homePageTemplate();
//}

//const renderSearchShow= = () => {
    //mainDiv().innerHTML = showListTemplate();
//} 

/** When the DOM loads **/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", tvShowSearch)
    //renderHomePage();
    homePageLinkEvent();
})

//document.querySelector("form").querySelector("input").value