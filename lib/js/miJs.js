window.onload = function() {
    var myInput = document.getElementById('cuerpo');
    myInput.onpaste = function(e) {
    e.preventDefault();
    alert("esta acción está prohibida");
  }

    myInput.oncopy = function(e) {
    e.preventDefault();
    alert("Esta acción está prohibida");
    }
}

function removerNttp(){

  document.getElementById("principal_1").classList.remove("principalNttpInicio");
  document.getElementById("btn2").classList.remove("itemNttpInicio_2");
  document.getElementById("btn8").classList.remove("itemNttpInicio_8");

  document.getElementById("principal_1").classList.remove("principalNttpSignos");
  document.getElementById("btn14").classList.remove("itemNttpSignos_14");
  document.getElementById("btn13").classList.remove("itemNttpSignos_13");
  document.getElementById("btn15").classList.remove("itemNttpSignos_15");
  document.getElementById("btn17").classList.remove("itemNttpSignos_17");
  document.getElementById("btn20").classList.remove("itemNttpSignos_20");
  document.getElementById("btn32").classList.remove("itemNttpSignos_32");

  document.getElementById("principal_1").classList.remove("principalNttpRespuestaSignos54");
  document.getElementById("btn18").classList.remove("itemNttpRespuestaSignos18");
  document.getElementById("btn54").classList.remove("itemNttpRespuestaSignos54");

  document.getElementById("principal_1").classList.remove("principalNttpInicioLesion");
  document.getElementById("btn38").classList.remove("itemNttpInicioLesion_38");
  document.getElementById("btn44").classList.remove("itemNttpInicioLesion_44");

  document.getElementById("principal_1").classList.remove("principalNttpLesion");
  document.getElementById("btn50").classList.remove("itemNttpLesion_50");
  document.getElementById("btn49").classList.remove("itemNttpLesion_49");
  document.getElementById("btn51").classList.remove("itemNttpLesion_51");
  document.getElementById("btn56").classList.remove("itemNttpLesion_56");

  document.getElementById("principal_1").classList.remove("principalNttpInicioMecanismo");
  document.getElementById("btn74").classList.remove("itemNttpInicioMecanismo_74");
  document.getElementById("btn80").classList.remove("itemNttpInicioMecanismo_80");

  document.getElementById("principal_1").classList.remove("principalNttpMecanismoLesion");
  document.getElementById("btn85").classList.remove("itemNttpMecanismoLesion_85");
  document.getElementById("btn86").classList.remove("itemNttpMecanismoLesion_86");
  document.getElementById("btn92").classList.remove("itemNttpMecanismoLesion_92");
  document.getElementById("btn87").classList.remove("itemNttpMecanismoLesion_87");

  document.getElementById("principal_1").classList.remove("principalNttpRespuestaMecanismo");
  document.getElementById("btn90").classList.remove("itemNttpRespuestaMecanismo_90");

 document.getElementById("principal_1").classList.remove("principalNttpEspecialI");
 document.getElementById("btn110").classList.remove("itemNttpEspecialI_110");
 document.getElementById("btn116").classList.remove("itemNttpEspecialI_116");

  document.getElementById("principal_1").classList.remove("principalNttpEspecial");
  document.getElementById("btn121").classList.remove("itemNttpEspecial_121");
  document.getElementById("btn122").classList.remove("itemNttpEspecial_122");
  document.getElementById("btn128").classList.remove("itemNttpEspecial_128");
  document.getElementById("btn125").classList.remove("itemNttpEspecial_125");
  document.getElementById("btn123").classList.remove("itemNttpEspecial_123");

  document.getElementById("principal_1").classList.remove("principalNttpRespuestaEspecial");
 document.getElementById("btn126").classList.remove("itemNttpRespuestaEspecial_126");

 document.getElementById("principal_1").classList.remove("principalNttpProtocolo");

 document.getElementById("btn128").classList.remove("itemNttpProtocolo_128");
 document.getElementById("btn140").classList.remove("itemNttpProtocolo_140");
 document.getElementById("btn146").classList.remove("itemNttpProtocolo_146");

  
}

// INICIO
document.getElementById('btn2').addEventListener('click', () =>{

  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpInicio");
  document.getElementById("btn2").classList.toggle("itemNttpInicio_2");
  document.getElementById("btn8").classList.toggle("itemNttpInicio_8");
});

// VALORAR SIGNOS Y SINTOMAS

document.getElementById('btn14').addEventListener('click', () =>{

  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpSignos");
  document.getElementById("btn14").classList.toggle("itemNttpSignos_14");
  document.getElementById("btn13").classList.toggle("itemNttpSignos_13");
  document.getElementById("btn15").classList.toggle("itemNttpSignos_15");
  document.getElementById("btn17").classList.toggle("itemNttpSignos_17");
  document.getElementById("btn20").classList.toggle("itemNttpSignos_20");
  document.getElementById("btn32").classList.toggle("itemNttpSignos_32");
});

// RESPUESTA DE SI DE LA VALORACIÓN DE SIGNOS Y SÍNTOMAS
document.getElementById('btn16').addEventListener('click', () =>{
  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpRespuestaSignos54");
  document.getElementById("btn18").classList.toggle("itemNttpRespuestaSignos18");
  document.getElementById("btn54").classList.toggle("itemNttpRespuestaSignos54");

});

// remover a los originales de signos y síntomas

document.getElementById('btn18').addEventListener('click', () =>{
  removerNttp();
});

// RESPUESTA NEGATIVA A SIGNOS Y SÍNTOMAS

document.getElementById('btn26').addEventListener('click', () =>{
  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpInicioLesion");
  document.getElementById("btn38").classList.toggle("itemNttpInicioLesion_38");
  document.getElementById("btn44").classList.toggle("itemNttpInicioLesion_44");



});

// QUITAR TODOS LAS CLASES DESDE NEGATIVA RESPUESTA DE SINTOMAS

document.getElementById('btn38').addEventListener('click', () =>{
  removerNttp();
});

// PRESENTA ANATOMIA DE LA LESION
document.getElementById('btn50').addEventListener('click', () =>{
  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpLesion");
  document.getElementById("btn50").classList.toggle("itemNttpLesion_50");
  document.getElementById("btn49").classList.toggle("itemNttpLesion_49");
  document.getElementById("btn51").classList.toggle("itemNttpLesion_51");
  document.getElementById("btn56").classList.toggle("itemNttpLesion_56");

});

// RESPUESTA SI DE ANATOMIA DE LA LESIÓN

// RESPUESTA DE SI DE LA VALORACIÓN DE SIGNOS Y SÍNTOMAS
document.getElementById('btn52').addEventListener('click', () =>{
  removerNttp();

  document.getElementById("principal_1").classList.toggle("principalNttpRespuestaSignos54");
  document.getElementById("btn18").classList.toggle("itemNttpRespuestaSignos18");
  document.getElementById("btn54").classList.toggle("itemNttpRespuestaSignos54");
});


document.getElementById('btn54').addEventListener('click', () =>{
  removerNttp();

});

// IR A MECANISMO DE LESIÓN
document.getElementById('btn62').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpInicioMecanismo");
 document.getElementById("btn74").classList.toggle("itemNttpInicioMecanismo_74");
 document.getElementById("btn80").classList.toggle("itemNttpInicioMecanismo_80");

});

//  MECANISMO DE LESIÓN datos encontrados
document.getElementById('btn86').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpMecanismoLesion");
 document.getElementById("btn85").classList.toggle("itemNttpMecanismoLesion_85");
 document.getElementById("btn86").classList.toggle("itemNttpMecanismoLesion_86");
 document.getElementById("btn92").classList.toggle("itemNttpMecanismoLesion_92");
 document.getElementById("btn87").classList.toggle("itemNttpMecanismoLesion_87");


});


// RESPUESTA SI MECANISMO DE ACCIÓN DE LA LESIÓN

document.getElementById('btn88').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpRespuestaMecanismo");
 document.getElementById("btn90").classList.toggle("itemNttpRespuestaMecanismo_90");


});

// borrar las clases de css de la tabla

document.getElementById('btn90').addEventListener('click', () =>{

  removerNttp();

});

document.getElementById('btn98').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpEspecialI");
 document.getElementById("btn110").classList.toggle("itemNttpEspecialI_110");
 document.getElementById("btn116").classList.toggle("itemNttpEspecialI_116");

});

// PACIENTE ESPECIAL HALLAZGO

document.getElementById('btn122').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpEspecial");
 document.getElementById("btn121").classList.toggle("itemNttpEspecial_121");
 document.getElementById("btn122").classList.toggle("itemNttpEspecial_122");
 document.getElementById("btn128").classList.toggle("itemNttpEspecial_128");
 document.getElementById("btn125").classList.toggle("itemNttpEspecial_125");
 document.getElementById("btn123").classList.toggle("itemNttpEspecial_123");

});

// RESPUESTA SI A ESPECIAL

document.getElementById('btn124').addEventListener('click', () =>{

  removerNttp();

 document.getElementById("principal_1").classList.toggle("principalNttpRespuestaEspecial");
 document.getElementById("btn126").classList.toggle("itemNttpRespuestaEspecial_126");

});

// elimina clases de nttp con 126

document.getElementById('btn126').addEventListener('click', () =>{
  removerNttp();
});

// IR A PROTOCOLO REGIONAL

document.getElementById('btn134').addEventListener('click', () =>{

  removerNttp();
  removerNttp();
 document.getElementById("principal_1").classList.toggle("principalNttpProtocolo");

 document.getElementById("btn128").classList.toggle("itemNttpProtocolo_128");
 document.getElementById("btn140").classList.toggle("itemNttpProtocolo_140");
 document.getElementById("btn146").classList.toggle("itemNttpProtocolo_146");
 

});

// LLEGAR AL INICIO CON PROTOCOLO LOCAl 146


document.getElementById('btn146').addEventListener('click', () =>{

  removerNttp();
});


document.getElementById('btn13').addEventListener('click', () =>{

  removerNttp();
});

document.getElementById('btn49').addEventListener('click', () =>{

  removerNttp();
});

document.getElementById('btn85').addEventListener('click', () =>{

  removerNttp();
});

document.getElementById('btn121').addEventListener('click', () =>{

  removerNttp();
});