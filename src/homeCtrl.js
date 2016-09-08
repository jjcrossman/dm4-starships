angular.module( 'Starship' ).controller( 'homeCtrl', function ( $scope, starshipService ) {

  function init() {
    $scope.characters = [];
    $scope.starships = [];
    $scope.getCharacters();
  }


$scope.getCharacters = function () {

starshipService.getCharacters()
  .then( function ( characters ) {
    console.log( characters );
    $scope.characters = characters.data.results;
  } )
  .catch( function ( error ) {
    console.error( "Something broke: " + error );
  } );

}

$scope.getStarships = function ( starshipUrlList ) {
  starshipService.getStarships( starshipUrlList )
  .then( function ( starships ) {
    console.log( starships );
    $scope.starships = starships;
   } )
   .catch ( function ( error ) {
     console.error( "Something broke: " + error );
   } );
}



init();

} );
