(function (){
  "use strict";

  angular.module("services", [])
          .factory("userService", userService)
          .service("personService", Person)
          .provider("userGreetingService", userGreetingService)
          .constant("defaultGreeting", "Hi")
          .constant("officialGreeting", "Good morning")
          .value("userName", "Vitalia");

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

})();