(function (){
  "use strict";

  angular.module("services", [])
          .factory("userService", userService)
          .factory("rankService", rankService)
          .service("personService", Person)
          .service("localstorageService", localstorageService)
          .service("generator", generator)
          .provider("userGreetingService", userGreetingService)
          .factory("matchService", matchService)
          .constant("defaultGreeting", "Hi")
          .constant("officialGreeting", "Good morning")
          .constant("defaultRankingSymbol", "*")
          .value("userName", "Vitali");

  function userGreetingService(defaultGreeting){
    let greetingMsg = defaultGreeting;
    function $get() {
       return {
         greet
       }
       function greet(user){
         console.log(`${greetingMsg},  ${user}`);
       }
    }

    function configGreeting(greeting) {
      if (greeting) {
        greetingMsg = greeting;
        return this;
      } else {
        return greetingMsg;
      }
    }
    return {
      $get,
      configGreeting
    };
  }

  function userService(){
    let currentUser;

    function getCurrentUser(){
      return currentUser;
    };

    function setCurrentUser(user){
      currentUser = user;
      return this;
    };

    return {
      getCurrentUser,
      setCurrentUser
    };
  }

  function localstorageService($window) {

    function put(key, value) {
      $window.localStorage.setItem(key, value);
      return this;
    }

    function get(key) {
      return $window.localStorage.getItem(key);
    }

    function remove(key) {
      $window.localStorage.removeItem(key);
      return this;
    }

    function clear() {
      $window.localStorage.clear();
      return this;
    }
    return {
      put,
      get,
      remove,
      clear
    };
  }

  function rankService(defaultRankingSymbol) {

    function getRank(count, symbol = defaultRankingSymbol) {
      let rank = symbol;
      if(count > 100){
        rank = rank + symbol;
        if(count > 200) {
            rank = rank + symbol;
            if(count > 500){
              rank = rank + symbol;
              if(count > 1000 )
                rank = rank + symbol;
            }
        }
      }
      return rank;
    }

    return{
      getRank
    };
  }

function generator() {

  function generate(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  return {
    generate
  }
}

function matchService() {
  function matches(string, regex) {
    return string.match(regex) != null;
  }
  return{
    matches
  }
}
})();
