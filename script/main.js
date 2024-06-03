

function ModalAppear(){
    let modal = document.getElementById("modal").style.display = "flex"
}

function ModalDisAppear(){
    let modal = document.getElementById("modal").style.display = "none"
}

function MakeChoice(choice){
    if (choice == "rock"){
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

onclick