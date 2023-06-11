/*
Titulo: Tablas de multiplicar
Autor: Jesus Fernando Carvajal Anacona 
Fecha de creacion: 10/06/2023
Hora: 9:17 pm 
*/

window.onload = function(){
    /** 
    document.getElementById('botonCalcular').onclick = function(){
        var tabla = document.getElementById('txtNumeroTabla').value;
        var resultado= "";
        var contador=0; 
        var i= 0; 

        while(i<tabla){
            i++; 
            resultado+= "<div class='caja-hija'>"
            contador= 0
                while(contador < 10){
                    contador++; 
                    resultado+= "<div class='celda-resultado'>";
                    resultado+= i + " " + "x " + contador + "  ="+ i * contador;
                    resultado+= "</div>";
                }
            resultado+= "</div>";
        }

        document.getElementById('caja-contenedor').innerHTML= resultado;

    }  */

    document.getElementById('botonCalcular').onclick = function(){
        var tablas = document.getElementById('txtNumeroTabla').value;
        var resultado= ""; 
        var i;
        for(i= 1; i<=tablas; i++){
            resultado+= "<div class='caja-hija'>";
            var  contar; 
            for(contar= 1; contar<10; contar++){
                resultado+= "<div class='celda-resultado'>";
                resultado+= i + " x " + contar + " = " + (i * contar);
                resultado+= "</div>"; 
            }

            resultado+= "</div>"; 

            document.getElementById('caja-contenedor').innerHTML= resultado;
        }
    }
}


/**  contador
function contador(){
    var i = 0; 
    var resultado= ""; 
    while(i < 10){
        i= i + 1;
        resultado+= i +  ","  ;
    }
    "<></>"
    alert(resultado)
} */