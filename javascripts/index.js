/** Globals **/
 const baseUrl = 'https://api.tvmaze.com/shows/1';
 let shows = [];


/** NODE Getters **/
const mainDiv = () => document.getElementById("main");

const homePageLink = () => document.getElementById('home-page-link');

const tvShowSearchLink = () => document.getElementById('tv-show-search-link');



/** Event and Listeners **/
  //what time can I do this event (domcontentloaded?

  //what's going to trigger this event (click)?
  
  //effect (display home page)?

const loadShows = () => {
    fetch("https://api.tvmaze.com/shows/1")
    .then(resp => resp => {
        return resp.json()
    })
    .then(data => { 
        shows = data
})
  
  const homePageLinkEvent = () => {
      homePageLink().addEventListener('click', () => {
          renderHomePage();
        })
  }

  const tvShowSearchLinkEvent = () => {
    tvShowSearchLink().addEventListener('click', async () => {
        await loadShows
        renderTvShowSearch();
      })
}
console.log('a')

/*********/

/** Templates  **/

const homePageTemplate = () => {
    return `
    <h1 class="center-align">TV Trivia Fans</h1>
    `
}

const showListTemplate = () => {
    return ` 
    <h1 class="center-align">TV Shows</h1>
    <table class="highlight">
      <thead>
        <tr>
            <th>Show</th>
            <th>Genre</th>
            <th>Website</th>
            <th>Rating</th>
            <th>Summary</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>TBA</td>
          <td>TBA</td>
          <td>TBA</td> 
          <td>TBA</td> 
          <td>TBA</td> 
        </tr>
      </tbody>
    </table>
    `
}


/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderTvShowSearch = () => {
    mainDiv().innerHTML = showListTemplate();
} 

/** When the DOM loads **/

document.addEventListener('DOMContentLoaded', () => {
    //renderHomePage();
    homePageLinkEvent();
    tvShowSearchLinkEvent();
    loadShows();
})