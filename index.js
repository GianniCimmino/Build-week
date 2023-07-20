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

// Dichiaro la funzione che convalida il checkbox al button della pagina iniziale.
let demoArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function shuffleArray(inputArray){
   inputArray.sort(()=> Math.random() - 0.5);
}

shuffleArray(demoArray);
console.log(demoArray);

function enable() {
  let check = document.querySelector("#check");
  let buttonNextToQuiz = document.querySelector("#buttonNextToQuiz");
  if (check.checked) {
    buttonNextToQuiz.removeAttribute("disabled");
  } else {
    buttonNextToQuiz.disabled = "true";
  }
}





// creo una variabile per prendere il div dove poi andrà il paragrafo della domanda
  let questionDiv = document.querySelector(".question")
  let choicesDiv = document.querySelector(".choices")


// creo l'event listener per il bottone che serve per proseguire alla prossima domanda:
  let nextQuestionButton = document.querySelector(".next_question_button")
  nextQuestionButton.addEventListener("click", NextQuestionFunction)

// creo una variabile count 
  let count = 0
  
  //creo il paragrafo con dentro la domanda 
  let question = document.createElement("p")
  questionDiv.appendChild(question)


 //creo un count2, che mi servirò per iterare domande casuali
  let count2 = demoArray[count] 
  console.log(count2)

  
  question.innerText = questions[count2].question
  
  
  // estrapolo dall'html il <p> "question1/10"
  // let counterQuestions = document.querySelector(".counter")
  let spanCounter= document.querySelector('#counter')



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
   // creo il radio e lo "appendo" al label 
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
       }
       
     label.innerHTML = arrIncorrect[i]
     }

    
     let span = document.querySelector("#tenAnswers")
     spanCounter.innerText = (count + 1) + " / "
     span.innerText = questions.length
 
  function NextQuestionFunction(event) { // ad ogni click itera la prossima domanda 
      //la variabile count aumenta ad ogni click 
      count ++
      count2 = demoArray[count] 
      console.log(questions[count2])
      
      
      console.log(count2)
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
         // creo il ciclo for per i radio
   for (let i = 0; i < arrIncorrect.length; i++) {

    //creo il div del radio
    let inputDiv= document.createElement('div')
    inputDiv.classList.add('radio-button')
    choicesDiv.appendChild(inputDiv)
    // creo il radio e lo "appendo" al label 
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
        }
        
      label.innerHTML = arrIncorrect[i]
      }

        

            
        
          

      } else { // se count === 10 allora mostra altra pagina

       // cancellA TUTTO E MOSTRA IL PARAGRAFO 
      let buttonNext = document.querySelector(".buttonNext")
      buttonNext.innerHTML = ""
        question.innerHTML = ""
        //InputDiv.innerHTML= ""
        let footer = document.querySelector("footer")
        footer.innerHTML = ""
        question.innerText = "Ottimo hai passato l'esame!"
  }
}

