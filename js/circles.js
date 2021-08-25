for (i=0; i < 3000; i++){
    let wrapper = document.querySelector('#wrapper')
    let div = document.createElement('div')
    div.id = i
    div.classList.add('circle-item')
    wrapper.append(div)
    makeCircleRed(i)
    makeCircleTransparent(i)
    /* let circle = document.getElementById(i)
    circle.addEventListener("mouseover", () => {
        circle.classList.add('red')
        //setTimeout(() => circle.classList.remove('red'), 3000)
    }) */
    }
    
    function makeCircleRed(elId){
        document.getElementById(elId).addEventListener('mouseover', () => {
            document.getElementById(elId).classList.add('red')
        })
    }
    
    function makeCircleTransparent(elId){
        document.getElementById(elId).addEventListener('mouseover', () => {
            setTimeout(() => document.getElementById(elId).classList.add('transparent'), 500)
            
        })
    }