// COUNTER
let counter = 0;


// INCREASE COUNTER
function tickUp()
{
    counter++;
    document.getElementById("counter").textContent = counter;
}


// DECREASE COUNTER
function tickDown()
{
    counter--;
    document.getElementById("counter").textContent = counter;
}


// FOR LOOP
function runForLoop()
{
    let output = "";

    for (let i = 0; i <= counter; i++)
    {
        output += i + " ";
    }

    document.getElementById("forLoopResult").textContent = output;
}



// SHOW ODD NUMBERS
function showOddNumbers()
{
    let output = "";

    for (let i = 1; i <= counter; i++)
    {
        if (i % 2 !== 0)
        {
            output += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = output;
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



// PRINT CAR OBJECT FROM FORM
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



// CHANGE STYLE COLOR
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
