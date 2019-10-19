# Pet Adoption App
## By Alex Merced
### [LIVE VERSION OF THIS APP](https://alexmercedcoder.github.io/petadoptionapp/)
### [Portfolio Website](https://www.AlexMercedCoder.com)
---
**SUMMARY** : This application has the purpose of allowing people to quickly lookup adoptable pets of different types and find information like contact info and location.
---
## Resources Used

- The Petfinder.com api
- The Axios Library which is used as part of Path finders API tools
- jquery

## Design of Functionality

90% of this application is one function that is runs when any of the buttons are pushed. Below I'll breakdown the function.

### Making the API CALL
```
const generateContent = (event) =>
    {

    animalType = $(event.target).text();

//MAKE API CALL
    pf.animal.search({type:`${animalType}`})
    .then((response) => {
    console.log(response.data.animals);

```
In this code block I take the text from the button and insert into the API call. Petfinder'a API uses an API key so has its own API interface that is dependent on the AXIOS JS library. Earlier in the code an object is declared with the key and secret key to create the "pf" object with has the authorization token to make API calls.

PF.animal.search is a method that allows you to request animal data and pass an object as a query. Unfortunately this only allows me to query the first level of the response object so location data which is an object within the response object can't be queried in this method and using a traditional API endpoint doesn't work since I don't know how to request and pass the authorization token in that manner.

Via interpolation I pass through the text of a button into the query so I don't have to replicate the function for different queries.

### Mapping the Data to the DOM
```
//MAP DATA TO DOM
$('main').empty();
$('.modalcontainer').remove();
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

            <button class="p${pet.id}">More Details</button>
            `
        );
```
after getting the response from the API call, we begin mapping the object to the DOM. The API returns a fixed number of 20 responses. So the map functions first create a new div with the appropriate class and append it to the main element that is hard coded into the html document and is serving as the container for results.

After appending it we edit the innerHTML of the new element using interpolation to inject all the data displayed for the record. ".html()" instead of ".text()" allows me to create html elements without a large series of jquery commands, very similar to using JSX.

The titles are wrapped in span elements so I can add font weight in the css. Two buttons are created, one that links to the page to adopt that particular pet and one with a dynamic class name made of the letter p and records unique ID number to prevent duplicates.

### Generate the Modals
```
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

```

In this code we generate the modalcontainer and modal for each record that way there is a container that is hidden with more details to be called by the more details button.

### Creating the Modal Toggles
```
//show/hide the modal
$modalbutton = $('<button>');
$modalbutton.text('CLOSE');
$modal.append($modalbutton);
$modalbutton.on('click',()=>{$(`.p${pet.id}modal`).hide();});
$(`.p${pet.id}`).on('click',()=>{$(`.p${pet.id}modal`).show()});
$modaldiv.hide();
console.log('genmodal');
```

here the button is created and an event listener is created that hides and shows the dynamic class name generated earlier.

## Other Comments

- Wanted to add photos but ran into an into an issue where if it pulled a photo for a record that didn't have one it would default to a response error and not populate. I tried to see if an if statement would allow me to test the existence of the data but even that would trigger a response error.


<!-- Image Tag: ![alt text](image.jpg) -->
<!-- Link Tag: [title](https://www.example.com) -->
<!-- https://www.markdownguide.org/cheat-sheet/ -->
