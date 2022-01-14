const mainDiv = () => document.getElementById("main");

const homePageLink = () => document.getElementById('home-page-link');

const tvShowSearchLink = () => document.getElementById('tv-show-search-link');

    
   function searchShow(query) {
       const url = `https://api.tvmaze.com/search/shows?q=${query}`;
       fetch(url)
       .then(response => response.json())
       .then((results) => {
     const list = document.getElementById("resultsList"); 
      results.forEach(result => {
       console.log(result)
       const body = document.getElementsByTagName("body")[0];
       const element = document.createElement("li");
       element.innerText = result.show.name;
       const button = document.createElement("button");
       button.innerHTML = "Watched";
       list.appendChild(element);
       element.appendChild(button);
       button.addEventListener ("click", () => {
        alert("You've seen this before.");
        });
     })
    });
}


  const homePageLinkEvent = () => {
      homePageLink().addEventListener('click', () => {
        resetForm();
        hideResultsList()
        })
  }

  function hideResultsList () {
    const list = document.getElementById("resultsList");
    list.innerHTML = ''
  }

  function resetForm () {
    document.querySelector("form").reset();
  }

  function hideButton () {
    const button = document.getElementById("button");
    button.innerHTML = ''
  }

  const resetHomePage = () => {
    homePageLink().addEventListener('click', () => {
      resetForm();
      hideResultsList()
      })
}

  const tvShowSearch = (e) => {
    hideResultsList();
    e.preventDefault();
    console.log(e.target.querySelector("input").value)
    searchShow(e.target.querySelector("input").value)
    }


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("form").addEventListener("submit", tvShowSearch)
    homePageLinkEvent();
})


//document.querySelector("form").querySelector("input").value