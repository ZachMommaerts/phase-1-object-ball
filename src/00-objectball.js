const gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: 'Black, White',
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15 
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5 
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1 
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: 'Turquoise, Purple',
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
};

const numPointsScored = (playerName) => {
    const game = gameObject();

    for (let gameKey in game) {
        const teamObj = game[gameKey];
        const playerObj = teamObj.players;

        for (let playerKey in playerObj) {

            if (playerKey === playerName) {
                return playerObj[playerKey].points;
            }
        }
    }
}

const shoeSize = (playerName) => {
    const game = gameObject();

    for (let gameKey in game) {
        const playerObj = game[gameKey].players;

        for (let playerKey in playerObj) {

            if (playerKey === playerName) {
                return playerObj[playerKey].shoe;
            }
        }
    }
}

const teamColors = (teamsName) => {
    const game = gameObject();
    const colorArray = [];

    for (let gameKey in game) {
        const team = game[gameKey];

        if (team.teamName === teamsName) {
            colorArray.push(team.colors.split(', '));
        }
    }

    return colorArray;
}

const teamNames = () => {
    const game = gameObject();
    const teamArray = [];

    for (let gameKey in game) {
        const team = game[gameKey];
        teamArray.push(team.teamName)
    }

    return teamArray;
}

const playerNumbers = (teamName) => {
    const game = gameObject();
    const numberArray = [];

    for (let gameKey in game) {
        const teamsName = game[gameKey].teamName;
        const playerObj = game[gameKey].players;

        if (teamsName === teamName) {
            for (let playerKey in playerObj) {
                numberArray.push(playerObj[playerKey].number);
            }
        }
    }

    return numberArray;
}

const playerStats = (playerName) => {
    const game = gameObject();
    
    for (const gameKey in game) {
        const playerObj = game[gameKey].players;
        
        for (const playerKey in playerObj) {

            if (playerKey === playerName) {
                return playerObj[playerKey];
            }
        }
    }
}

const bigShoeRebounds = () => {
    const game = gameObject();
    
    for (let shoeSize = 30; shoeSize > 0; shoeSize --){

        for (const gameKey in game) {
            const playerObj = game[gameKey].players;

            for (const playerKey in playerObj) {

                if (playerObj[playerKey].shoe === shoeSize) {

                    return playerObj[playerKey].number;
                }
            }
        }
    }
}

const mostPointsScored = () => {
    const game = gameObject();
    let points = [];

    for (const gameKey in game) {
        const playerObj = game[gameKey].players;

        for (const playerKey in playerObj) {
            points.push(playerObj[playerKey].points);
        }
    }

    const highestPoints = points.reduce( (accumulator, number) => {
        if (number > accumulator) {
            accumulator = number;
        }
    });
    debugger;

    for (const gameKey in game) {
        const playerObj = game[gameKey].players;

        for (const playerKey in playerObj) {
            
            if (playerObj[playerKey].points === highestPoints) {
                return playerKey;
            }
        }
    }
}

console.log(mostPointsScored());