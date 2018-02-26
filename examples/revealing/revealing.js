var sport = (function(){

    var football_team = 11
    var basket_team = 5

    function remove_player(team, valore) {
        if(team == "calcio") football_team -= valore
        if(team == "basket") basket_team -= valore
        success()
    }

    function show_team(team) {
        if(team == "calcio") return football_team
        if(team == "basket") return basket_team
    }

    function success() {
        console.log("Players removed successfully");
        console.log(show_team('football'))
    }

    return {
        remove_player: remove_player,
        show_team: show_team,
    }

})()

console.log(sport.show_team('calcio'))
sport.remove_player('calcio', 3)
sport.remove_player('calcio', 5)