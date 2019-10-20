//added the defer keyword to my script tag, to avoid script pre-loading problems


///////////////////////////////////////
//PROGRAM NAME: Pet Adoption App
//PROGRAM BY Alex Merced
///////////////////////////////////////


//GLOBAL DATA SETS


const gVals = {



}

var pf = new petfinder.Client({apiKey: "m4h0S62lGppvMaz0FEcO1W76D24Zq0eM57WzcvqD20btKev4Xv", secret: "EpU3nDVn69O46nC0pgIjsmTWIPdLu1HrEI2dFAbS"});

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

//GENERATE CONTENT FUNCTION

const generateContent = (event) =>
    {

    animalType = $(event.target).text();
    zipcode = $('.zipcode').val();

//MAKE API CALL
    pf.animal.search({type:`${animalType}`,location: `${zipcode}`,distance: 10, limit:100})
    .then((response) => {
    console.log(response.data.animals);
    //MAP DATA TO DOM
    $('main').empty();
    $('.modalcontainer').remove();
    response.data.animals.map((pet) => {
            $record = $('<div>').addClass('record');
            $('main').append($record);
            // if (pet.photos[0].medium){
            // picurl = pet.photos[0].medium;}
            $record.html(
                `
                <span class="title">Name:</span> ${pet.name}<br><Br>
                <span class="title">Breed:</span> ${pet.breeds.primary}<br><Br>
                <span class="title">Gender:</span> ${pet.gender}<br><Br>
                <span class="title">Age:</span> ${pet.age}<br><Br>

                <button><a href="${pet.url}">Adopt</a></button>

                <button class="p${pet.id}">More Details</button>
                `
            );
            console.log('gendiv')
            //GENERATE MODAL
            $modaldiv = $('<div>').addClass('modalcontainer').addClass(`p${pet.id}modal`);
            $modal = $('<div>').addClass('modal');
            $('body').append($modaldiv);
            $modaldiv.append($modal);
            $modal.html(`


                <span class="title">Type:</span> ${pet.type}<br><Br>
                <span class="title">Name:</span> ${pet.name}<br><Br>
                <span class="title">Breed:</span> ${pet.breeds.primary}<br><Br>
                <span class="title">Gender:</span> ${pet.gender}<br><Br>
                <span class="title">Age:</span> ${pet.age}<br><Br>
                <span class="title">Color:</span> ${pet.colors.primary}<br><Br>
                <span class="title">Contact:</span> ${pet.contact.email}<br><Br>
                <span class="title">Description:</span> ${pet.description}<br><Br>
                <span class="title">City:</span> ${pet.contact.address.city}<br><Br>
                <span class="title">State:</span> ${pet.contact.address.state}<br>



                `);
            /////////////////////
            //show/hide the modal
            ////////////////////
            $modalbutton = $('<button>');
            $modalbutton.text('CLOSE');
            $modal.append($modalbutton);
            $modalbutton.on('click',()=>{$(`.p${pet.id}modal`).hide();});
            $(`.p${pet.id}`).on('click',()=>{$(`.p${pet.id}modal`).show()});
            $modaldiv.hide();
            console.log('genmodal');


        })
    })
    .catch((error) => {
        alert('Cant get information');
    });}


//DOM VARIABLES

const domVals = {



}



//EVENT LISTENERS

$('.type').on('click',generateContent);




//THE PROGRAM






pf.animal.search({type: "cat",location: "11230",distance: 10})
.then((response) => {
console.log(response.data.animals);
  });
