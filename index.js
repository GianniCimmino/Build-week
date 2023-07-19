
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
];



// creo una variabile per prendere il div dove poi andrà il paragrafo della domanda
  let questionDiv = document.querySelector(".question")

  let InputDiv = document.querySelector(".input")

// creo l'event listener per il bottone che serve per proseguire alla prossima domanda:
  let nextQuestionButton = document.querySelector(".next_question_button")
  nextQuestionButton.addEventListener("click", NextQuestionFunction)
// creo una variabile count 
  let count = 0
  
  // estrapolo dall'html il <p> "question1/10"
  let counterQuestions = document.querySelector(".counter")
 
  function NextQuestionFunction(event) { // ad ogni click itera la prossima domanda 
      //la variabile count aumenta ad ogni click 
      count ++
    console.log(count)

    // ad ogni click il counterQuestions conta la domanda (ho aggiunto il +1 perchè count parte da 0, altrimenti il conteggio delle domande sarebbe indietro di uno)

    counterQuestions.innerText = "QUESTION " + (count + 1)  + " / 10"


    
    // ad ogni click pulisco il paragrafo della domanda e i radio
      questionDiv.innerHTML = ""
      InputDiv.innerHTML= ""


      

     // ad ogni click creo il paragrafo con dentro la domanda 
      let question = document.createElement("p")
      questionDiv.appendChild(question)

      // se count è diverso da 10 allora crea la domanda e le diverse opzioni
      if (count !== 10) {
        
      
      //uso la variabile count per iterare ogni volta la domanda successiva
      question.innerText = questions[count].question

      // creo un array unico con correct_answer e incorrect_answers per poter fare un ciclo for  e creare i radio

      let arrIncorrect = questions[count].incorrect_answers
      let strCorrect = questions[count].correct_answer
      arrIncorrect.push(strCorrect) 

      
      // creo il ciclo for per i radio
      for (let i = 0; i < arrIncorrect.length; i++) {

        // creo un label e lo appendo al Div
        let label = document.createElement("label")
        InputDiv.appendChild(label)
        label.innerHTML = arrIncorrect[i]

        // creo il radio e lo "appendo" al label 
        let radio = document.createElement("input")
            radio.setAttribute("type", "radio")
            radio.setAttribute("name", "a")
            
            label.appendChild(radio)

            
        
      }

    } else  { // se count === 10 allora mostra altra pagina
      /*
      question.innerHTML = ""
      InputDiv.innerHTML= ""
      let footer = document.querySelector("footer")
      footer.innerHTML = ""
      question.innerText = "Ottimo hai passato l'esame!"
      */
    }




      

     

    
      
      /* DA IMPLEMENTARE:
      - quando count = 10 allora mostra pagina dei risultati e varia inner text bottone con "invia esame" o simile
      - ad ogni click varia il testo nei bottoni e il numero dei bottoni  FATTO
     
      - creare una let che tenga conto delle risp giuste e delle risp sbagliate 
      */
  }

  