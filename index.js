const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },

]

  

// creo l'event listener per il bottone che serve per proseguire alla prossima domanda:
let nextQuestionButton = document.querySelector(".next_question_button")
nextQuestionButton.addEventListener("click", NextQuestionFunction)


// Dichiaro la funzione che convalida il checkbox al button della pagina iniziale.
function enable() {
  let check = document.getElementById("check");
  let buttonNextToQuiz = document.getElementById("buttonNextToQuiz");
  if (check.checked) {
    buttonNextToQuiz.removeAttribute("disabled");
  } else {
    buttonNextToQuiz.disabled = "true";
  }
}

// dichiaro la variabile che mi conta ogni volta che clicco la risposta giusta
let RightAnswerCounter = 0




// creo un array che si mischia ogni volta, lo utilizzerò  per la formazione casuale delle domande

let IndiceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];


//questa è la funzione che serve per mischiare l'array
function shuffleArray(inputArray){
   inputArray.sort(()=> Math.random() - 0.5);
}

shuffleArray(IndiceArray);



// creo una variabile per prendere il div dove poi andrà il paragrafo della domanda e le risposte
  let questionDiv = document.querySelector(".question")
  let choicesDiv = document.querySelector(".choices")

 //creo il paragrafo con dentro la domanda 
 let question = document.createElement("p")
 questionDiv.appendChild(question)


// creo una variabile count che utilizzerò come contatore delle domande nella stringa question e come indice dell'array casuale
  let count = 0
  
 
 //creo un count2, che mi servirà come indice dell'array questions
  let count2 = IndiceArray[count] 
  

  // estrapolo dall'html il <p> "question1/10"
  let spanCounter= document.querySelector('#counter')
   



  // itero la prima domanda al caricare della pagina(casuale)
  question.innerText = questions[count2].question
  
   // creo un array unico con correct_answer e incorrect_answers per poter fare un ciclo for  e creare i radio

   let arrIncorrect = questions[count2].incorrect_answers
   let strCorrect = questions[count2].correct_answer
   arrIncorrect.push(strCorrect) 

 
   // creo il ciclo for per i radio
   for (let i = 0; i < arrIncorrect.length; i++) {

      //creo il div del radio 
      let inputDiv= document.createElement('div')
      inputDiv.classList.add('radio-button')
      choicesDiv.appendChild(inputDiv)
      // creo il radio 
      let radio = document.createElement("input")
       radio.classList.add('form-style')
       radio.setAttribute("type", "radio")
       radio.setAttribute("name", "answers")
       inputDiv.appendChild(radio)
      // creo un array di radio per poter usare un ciclo for e far cambiare l'id
      let arrRadio = document.querySelectorAll("input[type='radio']")
     for (let i = 0; i < arrRadio.length; i++) {
       arrRadio[i].setAttribute("id", [i])
       
      }
     // creo un label e lo appendo al Div
     let label = document.createElement("label")
       label.classList.add('form-style')  
       inputDiv.appendChild(label)
     // creo un array di label per poter usare un ciclo for e far cambiare il for
       let arrLabel = document.querySelectorAll("label")
       for (let i = 0; i < arrLabel.length; i++) {
         arrLabel[i].setAttribute("for", [i])
         arrLabel[i].addEventListener("click", function CheckRightAnswer(event){
          let Answer = event.target.innerText
          if (Answer === strCorrect){
             RightAnswerCounter++
             arrLabel[i].removeEventListener("click", CheckRightAnswer)
             console.log(RightAnswerCounter)
           }
           })
        
         

        } 
         
        // inserisco le risposte plausibili 
     label.innerHTML = arrIncorrect[i]

       }

       const divHidden = document.querySelector('#hidden')
       divHidden.setAttribute('id', 'hidden')

let arrRadio = document.querySelectorAll("input[type='radio']")
for (const radioButton of arrRadio) {
  radioButton.addEventListener("click", function (event) {
    if (radioButton.checked) {
      divHidden.removeAttribute('id')
    }else{
      divHidden.setAttribute('id', 'hidden')

    }
  
})
}
       
      
     
     

    // creo una varibile per rendere dinamico il counter dele domande, se aumentano le domande nell'array aumenta in automatico il counter
     let span = document.querySelector("#tenAnswers")
     spanCounter.innerText = (count + 1) + " / "
     span.innerText = questions.length

     

 // attivo la funzione del click
  function NextQuestionFunction(event) { // ad ogni click itera la prossima domanda 
      //la variabile count aumenta ad ogni click 

      
      divHidden.setAttribute('id', 'hidden')

      count ++
      count2 = IndiceArray[count] 
      
      
      
      
    // ad ogni click il counterQuestions conta la domanda (ho aggiunto il +1 perchè count parte da 0, altrimenti il conteggio delle domande sarebbe indietro di uno)
    spanCounter.innerText = (count + 1) + " / "
    span.innerText = questions.length


    
    // ad ogni click pulisco il paragrafo della domanda e i radio
      questionDiv.innerHTML = ""
      choicesDiv.innerHTML= ""


      // ad ogni click creo il paragrafo con dentro la domanda 
      let question = document.createElement("p")
    questionDiv.appendChild(question)
    
     
      // se count è diverso da 10 allora crea la domanda e le diverse opzioni
      if (count !== 10) {

        //se l'utente è all'ultima domanda cambia testo button 
        if (count === 9){
          nextQuestionButton.innerText = "SEND TEST"
        }
      
        //uso la variabile count per iterare ogni volta la domanda successiva
        question.innerText = questions[count2].question

        // creo un array unico con correct_answer e incorrect_answers per poter fare un ciclo for  e creare i radio

        arrIncorrect = questions[count2].incorrect_answers
        strCorrect = questions[count2].correct_answer
        arrIncorrect.push(strCorrect) 

      
        // creo il ciclo for per i radio
        
      for (let i = 0; i < arrIncorrect.length; i++) {

    //creo il div del radio
    let inputDiv= document.createElement('div')
    inputDiv.classList.add('radio-button')
    choicesDiv.appendChild(inputDiv)
    // creo il radio 
    let radio = document.createElement("input")
        radio.classList.add('form-style')
        radio.setAttribute("type", "radio")
        radio.setAttribute("name", "answers")
        inputDiv.appendChild(radio)
    // creo un array di radio per poter usare un ciclo for e far cambiare l'id
      let arrRadio = document.querySelectorAll("input[type='radio']")
      for (let i = 0; i < arrRadio.length; i++) {
        arrRadio[i].setAttribute("id", [i])
      }
      
 
      // creo un label e lo appendo al Div
      let label = document.createElement("label")
        label.classList.add('form-style')
        inputDiv.appendChild(label)
 
      // creo un array di label per poter usare un ciclo for e far cambiare il for
        let arrLabel = document.querySelectorAll("label")
        for (let i = 0; i < arrLabel.length; i++) {
          arrLabel[i].setAttribute("for", [i])
          arrLabel[i].addEventListener("click", function CheckRightAnswer(event){
            let Answer = event.target.innerText
            if (Answer === strCorrect){
               RightAnswerCounter++
               arrLabel[i].removeEventListener("click", CheckRightAnswer)
               console.log(RightAnswerCounter)
             }
             })
          
           
        }
        
      label.innerHTML = arrIncorrect[i]
      }

      const divHidden = document.querySelector('#hidden')
      

    let arrRadio = document.querySelectorAll("input[type='radio']")
for (const radioButton of arrRadio) {
 radioButton.addEventListener("click", function (event) {
   if (radioButton.checked) {
     divHidden.removeAttribute('id')
   }else{
     divHidden.setAttribute('id', 'hidden')

   }
 
})
}
      
        
          

      } else { // se count === 10 allora mostra altra pagina

       // cancellA TUTTO E MOSTRA IL PARAGRAFO 
      let buttonNext = document.querySelector(".buttonNext")
      buttonNext.innerHTML = ""
        question.innerHTML = ""
        //InputDiv.innerHTML= ""
        let footer = document.querySelector("footer")
        footer.innerHTML = ""
        if (RightAnswerCounter >= 6 ) {
          question.innerText = "Grande!! L'hai passato!"
          let TagP =  document.createElement("p")
          question.appendChild(TagP)
          TagP.innerText = "Hai risposto correttamente a " + RightAnswerCounter + " domande su 10 :)"
          
        } else {
          question.innerText = "Oops, non l'hai passato!"
          let TagP =  document.createElement("p")
          question.appendChild(TagP)
          TagP.innerText = "Hai risposto correttamente a " + RightAnswerCounter + " domande su 10 :/"
        }
        

        console.log(RightAnswerCounter)
  }

  


}