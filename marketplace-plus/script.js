function selecionar(id){
    const elemento = document.getElementById(id)
    if(elemento.className == "marcado"){
        elemento.className = ""
    }
    else{
        elemento.className="marcado"
    }
}