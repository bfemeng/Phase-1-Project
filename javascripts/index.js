/** Globals **/


/** NODE Getters **/
const mainDiv = () => document.getElementById("main");



/*********/

/** Templates  **/

const homePageTemplate = () => {
    return `
    <h1 class="center-align">TV Trivia Fans</h1>
    `
}

const showListTemplate = () => {
    return ` 
    <h1 class="center-align">TV Trivia Fans</h1>
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
          <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td>
        </tr>
      </tbody>
    </table>
    `
}


/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

const renderShowListPage = () => {
    mainDiv().innerHTML = showListTemplate();
}

/** When the DOM loads **/

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
})