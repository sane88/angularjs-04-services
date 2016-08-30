(function (){
  "use strict";

  angular.module("app", ["services"])
          .config(configApp)
          .controller("Simple", Simple)
          .decorator("userService", userServiceLog)
          .decorator("$log", logDecorator)
          .constant("appName", "app");


    function configApp(userGreetingServiceProvider, officialGreeting) {
      userGreetingServiceProvider.configGreeting(officialGreeting);
    }

    function Simple(userService, personService, userGreetingService, userName, localstorageService, rankService, generator, matchService, $log){
        // console.log(userService);
        // userService.setCurrentUser("Vitali");
        // console.log(userService.getCurrentUser());
        // // console.log(personService);
        // // personService.setAge(16);
        // // console.log(personService.getAge());
        // console.log(userGreetingService);
        // userGreetingService.greet(userName);
          // console.log(localstorageService);
          // localstorageService.put("name", "Valentyn");
          // console.log(localstorageService.get("name"));
          // localstorageService.remove("name");
          // console.log(localstorageService.get("name"));
        // console.log(rankService.getRank(500, "+"));
        // console.log(rankService.getRank(1001));
        // $log.log('log');
        // $log.warn('warn');
        // $log.info('info');
        // $log.error('error');
        // $log.debug('debug');
        // $log.myLog('myLog');
        // console.log(generator.generate(7));
        console.log(matchService.matches('test', /\w/));
        console.log(matchService.matches('&', /\w/));
    }

})();
