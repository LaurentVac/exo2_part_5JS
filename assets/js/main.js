function button(){
    let mdp = document.getElementById("mdp");
    let validation= document.getElementById("validation");

      document.getElementById("mdp").classList.remove("boxGreen","boxRed");
      document.getElementById("validation").classList.remove("boxGreen","boxRed");
    if (mdp.value == validation.value) {
        mdp.classList.add("boxGreen");
        validation.classList.add("boxGreen");
    } else {
      mdp.classList.add("boxRed");
       validation.classList.add("boxRed");

    }
}

