/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Filipe Souza",
    photo: "images/profimg.png",

    favoriteFoods: [
        "hamburguer", 
        "Soap", 
        "pizza", 
        "potatoes", 
        "fried chicken"
    ],

    hobbies: [
        "Sing",
        "Write",
        "Play video games",
        "Spend time with friends"
    ],

    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "São Paulo, SP",
        lenght: "19 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Aracati, CE",
        lenght: "2 months"
    }
);

myProfile.placesLived.push(
    {
        place: "Fortaleza, CE",
        lenght: "3 weeks"
    }
);

myProfile.placesLived.push(
    {
        place: "Baturité, CE",
        lenght: "6 months"
    }
);

myProfile.placesLived.push(
    {
        place: "Quixeramobim, CE",
        lenght: "6 months"
    }
);

myProfile.placesLived.push(
    {
        place: "Russas, CE",
        lenght: "3 months"
    }
);

myProfile.placesLived.push(
    {
        place: "Fortaleza, CE",
        lenght: "8 months"
    }
);
/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo")
imageElement.setAttribute("src", `${myProfile.photo}`);
imageElement.setAttribute("alt", `${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.lenght;
    document.querySelector("#places-lived").append(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
