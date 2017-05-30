export function routes ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider

    .when('/', {
        template: '<dta-bank></dta-bank>'
    })

    .when('/play', {
        template: '<dta-game></dta-game>'
    })

    .otherwise({
        redirectTo: '/'
    })

}