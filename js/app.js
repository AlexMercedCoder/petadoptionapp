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
    .then((response) => {
    console.log(response.data.animals);
    response.data.animals.map((pet) => {

            $record = $('<div>').addClass('record');
            $('main').append($record);
            $record.html(
                `
                <span class="title">Name:</span> ${pet.name}<br><Br>
                <span class="title">Breed:</span> ${pet.breeds.primary}<br><Br>
                <span class="title">Gender:</span> ${pet.gender}<br><Br>
                <span class="title">Age:</span> ${pet.age}<br><Br>

                <button><a href="${pet.url}">Adopt</a></button>

                <button>More Details</button>



                `


            )


        })
    })
    .catch((error) => {
        alert('Cant get information');
    });
