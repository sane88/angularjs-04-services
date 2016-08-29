(function (){
  "use strict";

  angular.module("app", ["services"])
          .config(configApp)
          .controller("Simple", Simple)
          .decorator("userService", userServiceLog);


    function configApp(userGreetingServiceProvider, officialGreeting) {
      console.log(userGreetingServiceProvider);
      userGreetingServiceProvider.configGreeting(officialGreeting);
    }

    function Simple(userService, personService, userGreetingService, userName, localstorageService){
        // console.log(userService);
        // userService.setCurrentUser("Vitali");
        // console.log(userService.getCurrentUser());
        // // console.log(personService);
        // // personService.setAge(16);
        // // console.log(personService.getAge());
        // console.log(userGreetingService);
        // userGreetingService.greet(userName);
          console.log(localstorageService);
          localstorageService.put("name", "Valentyn");
          console.log(localstorageService.get("name"));
          localstorageService.remove("name");
          console.log(localstorageService.get("name"));
    }

})();
