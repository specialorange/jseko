/*global angular */
'use strict';

angular.module('jsekoApp')
.filter('Type', function () {
  return function (allItems, arrayOfViewableTypes) {

    var filteredArray = [];

    // angular.forEach(allItems, function(individualItem, index){
    angular.forEach(allItems, function(individualItem){
      if(arrayOfViewableTypes[individualItem.type]){
        filteredArray.push(individualItem);
      } else {
      }
    });

    return filteredArray;
  };
});