var nameH = document.getElementById('funnel-name');

// change H1 on mobile to say tap instead of click    
if (screen.width < 600) {
    nameH.innerHTML = "Tap to add a name";
    }

// "OK" confirmation buttons in bars - variables
var okBtn1 = document.getElementById("submit-1");
var okBtn2 = document.getElementById("submit-2");
var okBtn3 = document.getElementById("submit-3");
var okBtn4 = document.getElementById("submit-4");
var okBtn5 = document.getElementById("submit-5");

// event listeners for "OK" confirmation buttons in bars
okBtn1.addEventListener("click", () => {
    changeTxt(1) 
});

okBtn2.addEventListener("click", () => {
    changeTxt(2)
});

okBtn3.addEventListener("click", () => {
    changeTxt(3)
});

okBtn4.addEventListener("click", () => {
    changeTxt(4)
});

okBtn5.addEventListener("click", () => {
    changeTxt(5)
});


// user enters txt, form disappears and added text appears in a bar
function changeTxt(number) {
    
    var formTxt = document.getElementById('step-name-' + number).value;
    var validationTxt = document.getElementById('validation-' + number);
    var validationTxtLenght = document.getElementById('validation-lenght-' + number);

    if (formTxt.length === 0) {

        validationTxt.style.display = "block";
        validationTxtLenght.style.display = "none";
        
    } else if ( formTxt.length > 30) {

        validationTxtLenght.style.display = "block";
        validationTxt.style.display = "none";
        return false;  

    } else {  
        var txtSpace = document.getElementById('added-txt-' + number);
        txtSpace.innerHTML = formTxt;

        removeForm(number)
        changeVmin(number)
    }
}

// selected percentage from dropdown changes the bar width
function changeVmin(number) {
 
    var chosenNum = document.getElementById('step-number-' + number).value;
    var percentage = chosenNum + "vmin";
    var funnelStep = document.getElementById(number);
    funnelStep.style.width = percentage;
}

// form is removed 
function removeForm(formId) {
    document.getElementById("form-" + formId).style.display = "none";
}


// ADD NEW BAR option
var n = 1;
var newBtn = document.getElementById('button-new');
newBtn.addEventListener("click", () => {
    addBar()
});

function addBar() {
   
    if (n == 1) {
        
        var fourth = document.querySelector('.four');
        fourth.style.display = "block";
        n++;
        document.getElementById("step-number-4").selectedIndex = "3";
    
    }else {

        var fifth = document.querySelector('.five');
        fifth.style.display = "block";
        document.getElementById("step-number-5").selectedIndex = "4";
    }
}
// ADD NEW BAR option end


// FUNNEL NAME (h1) change 
var submitTitle = document.getElementById('submit-title');
var titleInputForm = document.getElementById("form-title");

//click on H1 turns it into input field
nameH.addEventListener("click", () => {
    TxtToInput()    
});

function TxtToInput() {

    var input = document.getElementById('step-name-title');
    input.value = null;
    input.style.display = "inline-block";
    submitTitle.style.display = "inline";
    nameH.style.display = "none";  
    titleInputForm.style.display = "block";
}

//Added h1 text replaces the old h1 text and removes the input form
submitTitle.addEventListener("click", () => {

        var formTxt = document.getElementById('step-name-title').value;
        var validationTxt = document.getElementById('validation-title');
        var validationTxtLenght = document.getElementById('validation-title-lenght');
    
        if (formTxt.length === 0) {

            validationTxt.style.display = "block";
            validationTxtLenght.style.display = "none";
            return false;  

        } else if ( formTxt.length > 30) {

            validationTxtLenght.style.display = "block";
            validationTxt.style.display = "none";
            return false;  

        }else {  

            var txtSpace = nameH;
            txtSpace.innerHTML = formTxt;
            titleInputForm.style.display = "none";
            nameH.style.display = "block";
            validationTxt.style.display = "none";
            validationTxtLenght.style.display = "none";
        }
});
// FUNNEL NAME (h1) change end


// CHANGE COLOR option
var btnColor = document.getElementById('button-color');
var num = 50;

btnColor.addEventListener("click", () => {
        num = num+50;
        document.body.style.filter = 'hue-rotate(' + num + 'deg)';
});
// CHANGE COLOR end


// REVERSE bars option
var btnReverse = document.getElementById('button-reverse');
var barContainer = document.querySelector('.bar-container');

btnReverse.addEventListener("click", () => {
   barContainer.classList.toggle('reverse');
});
// REVERSE bars end



// RESET bars option
var btnReset = document.getElementById('button-reset');
 
btnReset.addEventListener("click", () => {

    for (let index = 1; index <= 5; index++) {

        // delete added text
        document.getElementById('added-txt-' + index).innerHTML = "";  

        // reset input text
        document.getElementById('step-name-' + index).value = null;

        // bring the form back
        document.getElementById('form-' + index).style.display = "block";

        // remove validation for empty input 
        document.getElementById('validation-' + index).style.display = "none";

        // remove validation for too long input
        document.getElementById('validation-lenght-' +index).style.display = "none";

        // change selected index from dropdown
        document.getElementById("step-number-" + index).selectedIndex = index-1;

        //change bar width
        changeVmin(index);
    }
    
    //delete added bars
    var fourth = document.querySelector('.four');
    fourth.style.display = "none";
    
    var fifth = document.querySelector('.five');
    fifth.style.display = "none";
    
    n = 1;

    // remove title validation for empty input 
    document.getElementById('validation-title').style.display = "none";

    // remove title validation for too long input 
    document.getElementById('validation-title-lenght').style.display = "none";
    
    //remove the h1 form
    document.getElementById("form-title").style.display = "none";

    //remove validation message from h1
    document.getElementById('validation-title').style.display = "none";

    
    //reset h1 to original title
    if (screen.width < 600) {   
            nameH.innerHTML = "Tap to add a name";

        } else {
           
            nameH.innerHTML = "Click to add name";
        }

    nameH.style.display = "block";


    //reset color with initial hue rotate
    num = 0;
    document.body.style.filter = 'hue-rotate(' + num + 'deg)';


    //remove reverse order
    barContainer.classList.remove('reverse');

 });
//  RESET option end 


