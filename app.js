/**
 * DATE: 23-08-2024
 * Plain To Bold Text Gen Application
 * AUTHOR: ABDUL MALIK
 */

window.onload = ()=>{
    main()
}

// TAKING FONT FAMILYS 
const bnFontFamily = [
    `Noto Sans Bengali`,
   ` Hind Siliguri`,
    `Atma`,
    `Galada`
]
const arEnFontFamily = [
    `El Messiri`,
   ` Baloo Bhaijaan 2`,
    `Rubik`
]

// TAKING DOM REFERANCE
const inputFiled = document.getElementById('inputFiled')
const outputBox = document.getElementById('output')
const outputBoxChild = document.querySelectorAll('.outputText')

// VALITATING UNICODE
const englishRegex = /^[A-Za-z0-9\s.,!?'"|()-]*$/;
const arabicRegex = /^[\u0600-\u06FF\s.,!?'"|()-]*$/;
const banglaRegex = /^[\u0980-\u09FF\s.,!?'"|()-।]*$/;

function main(){

    // CHECKING INPUT FILED CHANGES
    inputFiled.addEventListener('input',outputTextHandelar)

     // Text copy
     outputBox.addEventListener('click', function(e) {
       navigator.clipboard.writeText(e.target.innerHTML)
    });
}


// EVENT HENDALAR

function outputTextHandelar(e){
    const textInput = e.target.value

    // CHECKING INPUT LANGUAGE & IMPLEMENT PUTPUT FONT FAMILY

    if(banglaRegex.test(textInput)){
        // VALIDATING BANGLA TEXT
        bnFontFamily.forEach((fontFamily,index) => {
            updateOrCreateDomElement(textInput,fontFamily,index)
        })

        console.log('hello BANGLA')
    }else if(englishRegex.test(textInput)){
        // VALIDATING ENGLISH TEXT
        arEnFontFamily.forEach((fontFamily,index) => {
            updateOrCreateDomElement(textInput,fontFamily,index)
        })
        console.log('hello ENGLISH')
    }else if(arabicRegex.test(textInput)){
        // VALIDATING ARABIC TEXT
        arEnFontFamily.forEach((fontFamily,index) => {
            updateOrCreateDomElement(textInput,fontFamily,index)
        })
        console.log('hello ARABIC')
    }else{
        alert('Langulage style is not matched')
    }

    // console.log(textInput)
}

// UTILITIES

function updateOrCreateDomElement(text, fontFamily, index){
    let li = document.querySelector(`#resultOutput-${index}`);

    if (!li) {
        li = document.createElement('li');
        li.id = `resultOutput-${index}`;
        li.classList = 'outputText';
        
        // li.appendChild(i);
        outputBox.appendChild(li);
    }

    // Update the content and font family
    li.style.fontFamily = fontFamily;
    li.innerHTML = text;  

    return li;

}
