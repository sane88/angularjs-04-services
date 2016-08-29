function userServiceLog($delegate, $log) {
  let getCurrentUser = $delegate.getCurrentUser;
  let setCurrentUser = $delegate.setCurrentUser;

  $delegate.getCurrentUser = function(){
    $log.info(`Call getCurrentUser ${new Date()}`);
    return getCurrentUser();
  }

  $delegate.getCurrentUser = function(user){
    $log.info(`Call setCurrentUser ${new Date()}`);
    setCurrentUser(user);
    return this;
  };

  return $delegate;
}

function logDecorator($delegate, appName) {
  let log = $delegate.log, info = $delegate.info,
            warn = $delegate.warn, error = $delegate.error,
            debug = $delegate.debug;

  $delegate.log = function(msg) {
      log.call($delegate, `${new Date()} - ${msg}`);
      return this;
  }

  $delegate.myLog = function(msg) {
    log.call($delegate, `${appName} - ${msg}`);
    return this;
  }

 $delegate.info = function(msg) {
      info.call($delegate, `${new Date()} - ${msg}`);
      return this;
  }

  $delegate.warn = function(msg) {
    warn.call($delegate, `${new Date()} - ${msg}`);
    return this;
  }

  $delegate.error = function(msg) {
      error.call($delegate, `${new Date()} - ${msg}`);
      return this;
  }

  $delegate.debug = function(msg) {
      debug.call($delegate, `${new Date()} - ${msg}`);
      return this;
  }

  return $delegate;
}
