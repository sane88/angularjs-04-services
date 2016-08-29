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
