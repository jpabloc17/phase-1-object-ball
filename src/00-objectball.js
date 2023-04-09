function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            player: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                        },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                        },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "13",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            player: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "20",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                        },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                        },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                }
            }
        }
    }
}

function numPointsScored(name){
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["player"]
        for (playerName in teamObj){
            if (playerName === name){
                return teamObj[playerName]["points"];
            }
        }
    }
}

function shoeSize(name){
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["player"]
        for (playerName in teamObj){
            if (playerName === name){
                return teamObj[playerName]["shoe"];
            }
        }
    }
}

function teamColors(team){
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["teamName"];
        if (teamObj === team){
            return gameObject()[gameKey]["colors"];
        }
    }
}

function teamNames(){
    const array = [];
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["teamName"];
        array.push(teamObj)
    }
    return array;
}

function playersNumbers(team){
    const array = [];
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["teamName"];
        if (teamObj === team){
            for (let players in gameKey){
            players = gameObject()[gameKey]["player"];
            for (playersNumber in players){
                array.push(players[playersNumber]["number"])
            } 
            return array;
            }
        }
    }
}

function playerStats(name){
    for (let gameKey in gameObject()){
        let teamObj = gameObject()[gameKey]["player"]
        for (playerName in teamObj){
            if (playerName === name){
                return teamObj[playerName];
            }
        }
    }
}


function bigShoeRebounds(){
    let maxShoeSize = 0;
    let maxPlayerRebounds;
    const game = gameObject();
    for(const gameKey in game){
        const data = game[gameKey].player;
        debugger
        for(const player in data) {
            if(data[player].shoe > maxShoeSize) {
                maxShoeSize = data[player].shoe;
                maxPlayerRebounds = data[player].rebounds;
            }
        }
    }

    return maxPlayerRebounds;    
}        