// COUNTER VARIABLE
let counter = 0;


// Increase Counter
function tickUp()
{
    counter++;

    document.getElementById("counter").textContent = counter;
}


// Decrease Counter
function tickDown()
{
    counter--;

    document.getElementById("counter").textContent = counter;
}



// SIMPLE FOR LOOP
function runForLoop()
{

    let result = "";

    for (let i = 0; i <= counter; i++)
    {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result;
}



// SHOW ODD NUMBERS
function showOddNumbers()
{

    let result = "";

    let i = 1;

    while (i <= counter)
    {

        if (i % 2 !== 0)
        {
            result += i + " ";
        }

        i++;
    }

    document.getElementById("oddNumberResult").textContent = result;
}



// ARRAY OF MULTIPLES OF 5 IN REVERSE
function addMultiplesToArray()
{

    let arr = [];

    for (let i = 5; i <= counter; i += 5)
    {
        arr.push(i);
    }

    arr.reverse();

    console.clear();

    console.log(arr);
}



// PRINT CAR OBJECT
function printCarObject()
{

    let car = {

        cType: document.getElementById("carType").value,

        cMPG: document.getElementById("carMPG").value,

        cColor: document.getElementById("carColor").value
    };

    console.clear();

    console.log(car);
}




// LOAD CAR OBJECT INTO FORM
function loadCar(num)
{

    let selectedCar;

    if (num === 1)
        selectedCar = carObject1;

    if (num === 2)
        selectedCar = carObject2;

    if (num === 3)
        selectedCar = carObject3;



    document.getElementById("carType").value = selectedCar.cType;

    document.getElementById("carMPG").value = selectedCar.cMPG;

    document.getElementById("carColor").value = selectedCar.cColor;
}



// CHANGE PARAGRAPH COLOR
function changeColor(num)
{

    let paragraph = document.getElementById("styleParagraph");


    if (num === 1)
        paragraph.style.color = "red";


    if (num === 2)
        paragraph.style.color = "green";


    if (num === 3)
        paragraph.style.color = "blue";

}
