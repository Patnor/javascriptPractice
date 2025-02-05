function handler(ev){
    const e = ev;
    const target = e.target;

    this.classList.toggle('selected');
    console.log(`clicked on node with ID "${target.id}"`);
    console.log(`Event at node with ID "${this.id}"`);
}

function init(){
    const elements = document.querySelectorAll(
        '.level1, ' +
        '.level2,' +
        '.level3' 
    );

    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', handler, true);
    }
}


function replacer(key, value) {
    // Exclude the 'password' property
    if (key === 'year') {
        return 4000;
    }
    // Mask the 'email' property
    // if (key === 'email') {
    //     return value.replace(/(.{2})(.*)(@.*)/, (match, p1, p2, p3) => {
    //         return p1 + '****' + p3;
    //     });
    // }
    // Return the value unchanged for other properties
    return value;
}
function replacer2(key, value){
    if(key === 'name'){
        return "Happy: " + value;
    }

    return value;
}


const jsonOb =  {
    "artists": [
        {
            "name": "Kyuss",
            "albums": [
                {
                    "title": "Wretch",
                    "year": 1991
                },
                {
                    "title": "Blues for the Red Sun",
                    "year": 1992
                },
                {
                    "title": "welcome to Sky Valley",
                    "year": 1994
                },
                {
                    "title": "...And the Circus Leaves Town",
                    "year": 1995
                }
            ]
        },
        {
            "name": "Ben Harper",
            "albums": [
                {
                    "title": "The Will to Live",
                    "year": 1997
                },
                {
                    "title": "Burn to Shine",
                    "year": 1999
                },
                {
                    "title": "Live from Mars",
                    "year": 2001
                },
                {
                    "title": "Diamonds on the Inside",
                    "year": 2003
                }
            ]
        }
    ]
}
console.log(jsonOb);
console.log(jsonOb.artists);
console.log(jsonOb.artists[0].name);
console.log(jsonOb.artists[1].albums);

const newOb = JSON.stringify(jsonOb, replacer, 4);
console.log(newOb);

const objectParsed = JSON.parse(newOb, replacer2);
console.log(objectParsed);

document.addEventListener('DOMContentLoaded', init);