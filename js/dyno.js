let textAlt = [document.getElementsByClassName("text-alt1"),
              document.getElementsByClassName("text-alt2"),
              document.getElementsByClassName("text-alt3"),
              document.getElementsByClassName("text-alt4"),
              document.getElementsByClassName("text-alt5"),
              document.getElementsByClassName("text-alt6")];

let contenedor = [document.getElementsByClassName("li1"),
                  document.getElementsByClassName("li2"),
                  document.getElementsByClassName("li3"),
                  document.getElementsByClassName("li4"),
                  document.getElementsByClassName("li5"),
                  document.getElementsByClassName("li6")];

for( let id in contenedor)
{
  // console.log(id) 
  // console.log(contenedor[id])
  contenedor[id][0].addEventListener("mouseenter", mostrarText);
}
for( let id in contenedor)
   contenedor[id][0].addEventListener("mouseleave", ocultarText);   
  
   
function mostrarText(e){
  // console.log(e);
  let indice = transformarEleANUm(e.srcElement.classList[0]);
  console.log(textAlt[indice][0]);
  if (indice>=0){
    textAlt[indice][0].classList.add("is-active");
  }
  // console.log(textAlt[indice][0]);
  // console.log(e.target.children[3].children[0].classList.add("is-active"));
}

function ocultarText(e){
  // console.log(e.srcElement.classList[0]);
  let indice = transformarEleANUm(e.srcElement.classList[0]);
  // console.log(textAlt[indice][0].classList)
  if (indice>=0){
    if(textAlt[indice][0].classList.contains("is-active")){
      // console.log(textAlt[indice][0].classList);
      textAlt[indice][0].classList.remove("is-active");
      // console.log(textAlt[indice][0].classList);
    }
  }
}

function transformarEleANUm(ele){
  // console.log(ele);
  switch(ele){
    case "li1":
      return 0;
    case "li2":
      return 1;
    case "li3":
      return 2;
    case "li4":
      return 3;
    case "li5":
      return 4; 
    case "li6":
      return 5;
    default:
      return -1;
  }
}

function hideShow(menu){
    if(menu.classList.contains("is-active"))
      menu.classList.remove("is-active");
    else
      menu.classList.add("is-active");
  } 