//equations with be
//equations with linking verbs
//intransitives
//transitives 



function toBe(noun,anothernoun,verb="be"){
   return `${noun} ${verb} ${anothernoun}`;

}

function linking(noun, anothernoun, verb="become") {
    return `${noun} ${verb} ${anothernoun}`;
}


function intransitives(noun, verb="settled") {
    return `${noun} ${verb}`;

}

function transitives(noun, anothernoun, verb="saw", object="cow") {
    return `${noun} ${verb} ${anothernoun} ${object}`;

    
}

function allShortSentences(noun1, noun2, noun3, verb){
console.log(toBe(noun1, noun2));
console.log(linking(noun1, noun2));
console.log(intransitives(noun1));
console.log(transitives(noun1, noun2,verb,noun3));
}

allShortSentences("car", "bar", "tar");