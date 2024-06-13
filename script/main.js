game_choice = [
  {
    'choice':'rock', 
    'html':`<div class="rock_button_border button_border">
            <button class="play_button">
              <img
                src="/images/icon-rock.svg"
                alt="bouton pierre"
                class="play_button_img"
              />
            </button>
          </div>`
  },
  {
    'choice':'paper', 
    'html':`<div class="paper_button_border button_border">
            <button class="play_button">
              <img
                src="/images/icon-paper.svg"
                alt="bouton pierre"
                class="play_button_img"
              />
            </button>
          </div>`
  },
  {
    'choice':'scissors', 
    'html':`<div class="scissors_button_border button_border">
            <button class="play_button">
              <img
                src="/images/icon-scissors.svg"
                alt="bouton pierre"
                class="play_button_img"
              />
            </button>
          </div>`
  },
]

function ModalAppear(){
    let modal = document.getElementById("modal").style.display = "flex"
}

function ModalDisAppear(){
    let modal = document.getElementById("modal").style.display = "none"
}

function MakeChoice(choice){
    console.log(choice)
    choice_display = document.getElementById('choice').style.display = "none"
    duel = document.getElementById('duel').style.display = "flex"

    if( choice >= 0 && choice <= 3){
      displayPlayerChoice(choice)
    }
    else (
      alert('Erreur: Vous Devez choisir Pierre, Feuille ou ciseaux')
    )

    letsDuel(choice)
}

function displayPlayerChoice(choice){
    let player = document.getElementById('player')
    console.log(game_choice[choice].choice)
    html = game_choice[choice].html
    player.innerHTML += html
}

function displayBotChoice(choice){
    let player = document.getElementById('bot')
  empty_undisplay = document.getElementById('bot_empty').style.display = "none"
    console.log(game_choice[choice].choice)
    html = game_choice[choice].html
    player.innerHTML += html
}

function letsDuel(player_choice){
  bot_choice = getRandomChoice()

  displayBotChoice(bot_choice)

  if (player_choice > bot_choice){
    
    if (player_choice == 2 && bot_choice == 0){
      console.log("you lose")
    }
    else (
      console.log("you win")
    )
  }
  else if (bot_choice > player_choice_choice){
    
    if (bot_choice == 2 && player_choice == 0){
      console.log("you win")
    }
    else (
      console.log("you lose")
    )
  }
}

function getRandomChoice() {
  return Math.floor(Math.random() * 3);
}