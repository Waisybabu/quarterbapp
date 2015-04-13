// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('quarterbapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.navigator && window.navigator.splashscreen){
      window.navigator.splashscreen.hide();
    }
  });

})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.style('ios');
  $ionicConfigProvider.tabs.position('ios');
  $ionicConfigProvider.navBar.alignTitle('ios');
})

.controller('HomeCtrl', function($scope, $http){

    $scope.teamSelected = false;

    console.log('teamSelected', $scope.teamSelected);

    $scope.teamSelectionList = [
      {name:'Arizona Cardinals', logo:"img/Arizona Cardinals.svg"},
      {name:'Atlanta Falcons', logo:"img/Atlanta Falcons.svg"},
      {name:'Baltimore Ravens', logo:"img/Baltimore Ravens.svg"},
      {name:'Buffalo Bills', logo:"img/Buffalo Bills.svg"},
      {name:'Carolina Panthers', logo:"img/Carolina Panthers.svg"},
      {name:'Chicago Bears', logo:"img/Chicago Bears.svg"},
      {name:'Cincinnati Bengals', logo:"img/Cincinnati Bengals.svg"},
      {name:'Cleveland Browns', logo:"img/Cleveland Browns.svg"},
      {name:'Dallas Cowboys', logo:"img/Dallas Cowboys.svg"},
      {name:'Denver Broncos', logo:"img/Denver Broncos.svg"},
      {name:'Detroit Lions', logo:"img/Detroit Lions.svg"},
      {name:'Green Bay Packers',logo:"img/Green Bay Packers.svg"},
      {name:'Houston Texans', logo:"img/Houston Texans.svg"},
      {name:'Indianapolis Colts', logo:"img/Indianapolis Colts.svg"},
      {name:'Jacksonville Jaguars', logo:"img/Jacksonville Jaguars.svg"},
      {name:'Kansas City Chiefs', logo:"img/Kansas City Chiefs.svg"},
      {name:'Miami Dolphins', logo:"img/Miami Dolphins.svg"},
      {name:'Minnesota Vikings', logo:"img/Minnesota Vikings.png"},
      {name:'New England Patriots', logo:"img/New England Patriots.svg"},
      {name:'New Orleans Saints', logo:"img/New Orleans Saints.svg"},
      {name:'New York Giants', logo:"img/New York Giants.svg"},
      {name:'New York Jets', logo:"img/New York Jets.svg"},
      {name:'Oakland Raiders', logo:"img/Oakland Raiders.svg"},
      {name:'Philadelphia Eagles', logo:"img/Philadelphia Eagles.svg"},
      {name:'Pittsburgh Steelers', logo:"img/Pittsburgh Steelers.svg"},
      {name:'San Diego Chargers', logo:"img/San Diego Chargers.svg"},
      {name:'San Francisco 49ers', logo:"img/San Francisco 49ers.svg"},
      {name:'Seattle Seahawks', logo:"img/Seattle Seahawks.svg"},
      {name:'St. Louis Rams', logo:"img/St. Louis Rams.svg"},
      {name:'Tampa Bay Buccaneers', logo:"img/Tampa Bay Buccaneers.svg"},
      {name:'Tennessee Titans', logo:"img/Tennessee Titans.svg"},
      {name:'Washington Redskins', logo:"img/Washington Redskins.svg"},
    ];    

    $scope.relevantTeams = [

    ];

    $scope.getTeamSelectedValue = function(){
      console.log('teamSelected', $scope.teamSelected);
    };

    $scope.setTeamSelectedValue = function(value){
      $scope.teamSelected = value;
      console.log('setTeamSelectedValue', $scope.teamSelected);

    };

    $scope.getRelevantTeamsJSON = function(teamName){
      $http.get('http://akifhazarvi.base.pk/relevancy.php?team=' + teamName).then(function(data){
        console.log('Relevancy for ' + teamName, data);

        $scope.relevantTeams = [];
        $scope.relevantTeamsArray = data.data.RelevantTeams;
        
        console.log('relevantTeamsArray', $scope.relevantTeamsArray);

        //pick out relevant teams from Akif's JSON
        for(var i=0; i < $scope.relevantTeamsArray.length; i++){
          $scope.relevantTeams.push(
            {
              name: $scope.relevantTeamsArray[i].Team.Relevant_Team,
              relevancy: $scope.relevantTeamsArray[i].Team.Relevancy_Type
            });
        }        
        console.log('RelevantTeamsAfterForLoop', $scope.relevantTeams);

        //
      }, function(err){
        console.error('ERR, err');
      })

    };


    // Getting and setting AFC standings
    $http.get('http://akifhazarvi.base.pk/afc.php').then(function(data)
    {

      if (angular.isArray(data.data.Standings)){
        $scope.afcStandingsArray = data.data.Standings;
      }

      $scope.afcEastStandingsArray = $scope.afcStandingsArray.slice(0,4);
      $scope.afcNorthStandingsArray = $scope.afcStandingsArray.slice(4,8);
      $scope.afcSouthStandingsArray = $scope.afcStandingsArray.slice(8,12);
      $scope.afcWestStandingsArray = $scope.afcStandingsArray.slice(12,16);

      console.log('afcStandings', $scope.afcStandingsArray);

    }, function(err){
      console.error('ERR, err');
    })

    // Getting and setting NFC standings
    $http.get('http://akifhazarvi.base.pk/nfc.php').then(function(data)
    {

      if (angular.isArray(data.data.Standings)){
        $scope.nfcStandingsArray = data.data.Standings;
      }

     

      $scope.nfcEastStandingsArray = $scope.nfcStandingsArray.slice(0,4);
      $scope.nfcNorthStandingsArray = $scope.nfcStandingsArray.slice(4,8);
      $scope.nfcSouthStandingsArray = $scope.nfcStandingsArray.slice(8,12);
      $scope.nfcWestStandingsArray = $scope.nfcStandingsArray.slice(12,16);

    }, function(err){
      console.error('ERR, err');
    })

});;