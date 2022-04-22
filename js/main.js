'use strict';

(function() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('visible');

  var homeButton = document.getElementById('home-button');
  var featuredButton = document.getElementById('featured-button');
  var personalButton = document.getElementById('personal-button');
  var optionsButton = document.getElementById('options-button');
  var homeSection = document.getElementById('home');
  var featuredSection = document.getElementById('featured');
  var personalSection = document.getElementById('personal');
  var optionsSection = document.getElementById('options');

  homeButton.onclick = function() {
    var selectedButton = document.querySelector('button[aria-selected="true"]');
    var selectedSection = document.querySelector('section[aria-selected="true"]');
    selectedButton.setAttribute('aria-selected', false);
    selectedSection.setAttribute('aria-selected', false);

    homeButton.setAttribute('aria-selected', true);
    homeSection.setAttribute('aria-selected', true);
  };
  featuredButton.onclick = function() {
    var selectedButton = document.querySelector('button[aria-selected="true"]');
    var selectedSection = document.querySelector('section[aria-selected="true"]');
    selectedButton.setAttribute('aria-selected', false);
    selectedSection.setAttribute('aria-selected', false);

    featuredButton.setAttribute('aria-selected', true);
    featuredSection.setAttribute('aria-selected', true);
  };
  personalButton.onclick = function() {
    var selectedButton = document.querySelector('button[aria-selected="true"]');
    var selectedSection = document.querySelector('section[aria-selected="true"]');
    selectedButton.setAttribute('aria-selected', false);
    selectedSection.setAttribute('aria-selected', false);

    personalButton.setAttribute('aria-selected', true);
    personalSection.setAttribute('aria-selected', true);
  };
  optionsButton.onclick = function() {
    var selectedButton = document.querySelector('button[aria-selected="true"]');
    var selectedSection = document.querySelector('section[aria-selected="true"]');
    selectedButton.setAttribute('aria-selected', false);
    selectedSection.setAttribute('aria-selected', false);

    optionsButton.setAttribute('aria-selected', true);
    optionsSection.setAttribute('aria-selected', true);
  };
})();
