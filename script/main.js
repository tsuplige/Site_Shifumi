

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
    if (choice == 1){
        ChooseRock()

    }
    else if (choice == "paper"){
        ChoosePaper()
    }
    else if (choice == ""){
        ChooseScissors()
    }
    else {
        console.log('Erreur !!!')
    }
}

function ChooseRock(){
    let player = document.getElementById('player')
    html = `
    <div class="rock_button_border button_border">
            <button class="play_button">
              <img
                src="/images/icon-rock.svg"
                alt="bouton pierre"
                class="play_button_img"
              />
            </button>
          </div>
    `
    player.innerHTML += html
}