'use strict';

(function() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('visible');

  var data;
  var database = "https://banana-hackers.gitlab.io/store-db/data.json";
  var ratings = "https://bhackers.uber.space/srs/v1";

  fetch(database)
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      alert("Failed to download database\nPlease reload the page.");
    })
    .then((response) => {
      data = response;
      if (document.readyState === "complete" || document.readyState === "interactive") {
        init();
        loadingScreen.classList.remove('visible');
      } else {
        window.addEventListener("DOMContentLoaded", function() {
          init();
          loadingScreen.classList.remove('visible');
        });
      }
    });

  function init() {
    var webappsContainer = document.getElementById('webapps');
    console.log(data);
    data.apps.forEach(function(app, index) {
      var webapp = document.createElement('li');
      var webappLink = document.createElement('a');
      var webappIcon = document.createElement('img');
      var webappDiv = document.createElement('div');
      var webappTitle = document.createElement('p');
      var webappCategory = document.createElement('p');
      var webappAuthor = document.createElement('p');

      var delay = (index * 10);
      if (delay > 500) {
        delay = 500;
      }
      webapp.style.animationDelay = delay + 'ms';

      webappLink.href = '?webapp=' + app.slug;
      webapp.appendChild(webappLink);

      webappIcon.src = app.icon;
      webappIcon.onerror = function() {
        webappIcon.src = 'style/images/default.png';
      };
      webappLink.appendChild(webappIcon);

      webappDiv.style.flex = 1;
      webappLink.appendChild(webappDiv);

      webappTitle.innerText = app.name;
      webappDiv.appendChild(webappTitle);
      webappCategory.innerText = app.meta.categories.toString().replace(',', ', ');
      webappDiv.appendChild(webappCategory);
      webappAuthor.innerText = app.author[0].toString().replace(/<(.*)>/, '');
      webappDiv.appendChild(webappAuthor);

      var webappCategoryContainer = document.querySelector('#' + app.meta.categories[0].toLowerCase() + ' > ul')
      webappCategoryContainer.appendChild(webapp);
    });

    if (location.search.startsWith('?webapp=')) {
      data.apps.forEach(function(app) {
        if (app.slug == location.search.replace('?webapp=', '')) {
          var page = document.getElementById('webapp');
          var pageIcon = page.querySelector('.webapp-icon');
          var pageTitle = page.querySelector('.webapp-title');
          var pageCategory = page.querySelector('.webapp-category');
          var pageAuthor = page.querySelector('.webapp-author');
          var pageDetail = page.querySelector('.webapp-detail');
          var pageInstallButton = page.querySelector('.webapp-install');
          var pageScreenshots = page.querySelector('.webapp-screenshots');

          page.classList.add('visible');

          pageIcon.style.backgroundImage = 'url(' + app.icon + ')';

          pageTitle.innerText = app.name;

          pageCategory.innerText = app.meta.categories.toString().replace(',', ', ');

          pageAuthor.innerText = app.author.toString().replace(',', ', ');

          pageDetail.innerText = app.description;

          pageInstallButton.onclick = function() {
            // [ ... ]
          };

          app.screenshots.forEach(function(screenshot) {
            var image = document.createElement('img');
            image.src = screenshot;
            pageScreenshots.appendChild(image);
          });
        }
      });
    }
  }
})();
