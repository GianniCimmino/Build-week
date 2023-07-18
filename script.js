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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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

// 1 - utente clicca su inizia
// 2 - compare prima domanda
// 3 - parte il tempo ( per ora opzionale - da fare alla fine) 
// 4 - se la risposta è corretta assegna un punto memorizzato in variabile globale che registra punteggio altrimenti 0
// 5 - se l'utente non risponde in tempo assegna zero
// 6 - l'utente clicca su avanti
// 7 - quando il numero di domande "questionNumber" termina, viene visualizzato il risultato ( per ora opzionale - da fare alla fine)



// definire funzione che visualizza domanda random con risposte random
// definire funzione che riconosce la risposta esatta, assegna il punteggio e lo memorizza in una variabile
// funzione che mostra il punteggio.








// -------------FUNZIONE CHE RESTITUISCE DOMANDA RANDOM-------------
// function queryRandom() {
//         const queryText= document.querySelector('#query')

//   let queryRandom=[]
//   let allAswers=[]
//   let popped=''
//   for (const question of questions ) {
//     queryRandom=[question.question]
//     popped= queryRandom.shift()
//     // allAswers.push(question.correct_answer + question.incorrect_answers)
//     queryText.innerHTML= popped
//     // console.log(popped)
//     // }      return queryRandom[Math.floor( Math.random()* queryRandom.length)]
//   }     
//   // return popped



// }
// console.log(queryRandom())


// const button= document.querySelector('button')

// function queryRandom() {

//           // const queryText= document.querySelector('#query')
  
//     let queryRandom=[]
//     let allAswers=[]
//     let printElement
//     for (const question of questions ) {
//       printElement= queryRandom.shift()
      
//       queryRandom.push(question.question)
//       allAswers.push((question.correct_answer), (question.incorrect_answers))
//       //queryText.innerText= 
//       return{
//         queryRandom,
//         allAswers
  
  
//       }

//     }       

    
  
    
    
    
//   }

// queryRandom()
    
    let array= []
    let correctText= document.querySelector('label#a')
    let incorrectText= document.querySelector('label#b')
    let incorrectText= document.querySelector('label#b')
    let incorrectText= document.querySelector('label#b')



  function query(){
    let queryTitle= document.querySelector('#query')
    for (const question of questions){
      array.push({question: question.question,correct_answer: question.correct_answer, incorrect_answers: question.incorrect_answers})
    }
    for (let i = 0; i < array.length; i++) {
       let stampa = array[i];
queryTitle.innerText= stampa.question
correctText.innerText= stampa.correct_answer

  }
  }
query()



//-------------------FUNZIONE CHE RESTITUISCE TUTTE LE RISPOSTE IN ORDINE CASUALE--------------

// function answerRand() {
//   let answers=[]
//   for (const allAnswers of questions) {
//     answers.push(answers.incorrect_answers + answers.correct_answer)
//     return answersRandom
  
//   }      

// }

// console.log(answerRandom())