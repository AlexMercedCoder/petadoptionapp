//added the defer keyword to my script tag, to avoid script pre-loading problems


///////////////////////////////////////
//PROGRAM NAME: Pet Adoption App
//PROGRAM BY Alex Merced
///////////////////////////////////////


//GLOBAL DATA SETS


const gVals = {



}



// CLASSES





//FUNCTIONS DEFINITIONS

const myFuncs = {

    //////////////////////
    //random number function
    //by Alex Merced
    ////////////////////////
    randNum: (num) => {

        return Math.floor(Math.random()*(num+1));

    },

    ///////////////////
    //random number in a range function
    //by Alex Merced
    ///////////////////

    randRange: (floor,ceiling) => {
        let num = 0;
        while(num < floor || num > ceiling){
            num = randNum(ceiling);

        }
        return num;
    }
}


//DOM VARIABLES

const domVals = {



}



//EVENT LISTENERS






//THE PROGRAM

var pf = new petfinder.Client({apiKey: "m4h0S62lGppvMaz0FEcO1W76D24Zq0eM57WzcvqD20btKev4Xv", secret: "EpU3nDVn69O46nC0pgIjsmTWIPdLu1HrEI2dFAbS"});

pf.animal.search({type: "Bird"})
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
        // Handle the error
    });
