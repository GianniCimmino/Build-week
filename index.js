


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
      
      question.innerHTML = ""
      InputDiv.innerHTML= ""
      let footer = document.querySelector("footer")
      footer.innerHTML = ""
      question.innerText = "Ottimo hai passato l'esame!"
      
    }




      

     

    
      
      /* DA IMPLEMENTARE:
      - quando count = 10 allora mostra pagina dei risultati e varia inner text bottone con "invia esame" o simile
      - ad ogni click varia il testo nei bottoni e il numero dei bottoni  FATTO
     
      - creare una let che tenga conto delle risp giuste e delle risp sbagliate 
      */
  }