function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')



    // }else {

    // html.classList.add('light')
    // }
    // substitui pelo abaixo

    // pegar a tag img 
    const img = document.querySelector("#profile img")

        if (html.classList.contains('light')){
        img.setAttribute("src", "./assets/profile-light.png")
    }else {

        img.setAttribute("src", "./assets/profile-dark.png")
    }

  
}


