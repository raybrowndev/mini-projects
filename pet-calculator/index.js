const inputAge = document.getElementById("inputAge");
const catAgeElement = document.getElementById("catAge");
const newAgeElement = document.getElementById("newAge");



const catEl = document.getElementById('cat-title')

fetch('https://catfact.ninja/fact?max_length=140')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseJSON => {
        const catFact = responseJSON.fact;
            console.log(`Cat Fact: ${catFact}`);
            
            const catTitle = document.createElement('p');
            catTitle.innerText = catFact;
            catEl.append(catTitle);
    })
    .catch(error => console.error(`Error fetching API data: ${error}`));


        








function calculateCatAge(ageGiven, type) {
    let newAge = 0
    let baseYears = 24;
    
// must be an integer
if (typeof ageGiven !== 'number' || !Number.isInteger(ageGiven)) {
    return 'No result!';
}

    if (ageGiven < 1) {
        newAge = 15;
    } else if (ageGiven === 1) {
        newAge = 15;
    } else if (ageGiven === 2) {
        newAge = 15 + 9;
    } else if (ageGiven > 2) {
        additonal = ageGiven - 2; 
        multiply = additonal * 4;
        newAge = baseYears + multiply
    } else {
        return "no result"
    }

    let message = `${ageGiven} cat years is equivalent to ${newAge} human years!`;
    if (ageGiven < 1) {
        message += " or less";
    }

    let answer = `Your Cat is ${newAge} 🎉`

    return { message, answer };
    }

// click event listener
function handleClick() {
    const age = parseFloat(inputAge.value);
    const { message, answer } = calculateCatAge(age);

    catAgeElement.innerText = message;
    newAgeElement.innerText = answer;
}

function updateAgeInfo() {
    const age = parseInt(inputAge.value);
    ageOutput.innerText = age;
    ageInfo.innerText = `Your cat is ${age} years old`;
}
    

inputAge.addEventListener("input", updateAgeInfo);
document.querySelector("button")
document.addEventListener("click", handleClick);


//source of cat age conversions - https://www.purina.co.uk/articles/cats/senior/care/cats-age-in-human-years#:~:text=How%20many%20cat%20years%20are,will%20be%2028%20human%20years.

