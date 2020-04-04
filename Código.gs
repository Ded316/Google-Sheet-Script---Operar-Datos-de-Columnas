/** Script de Daniel E Diaz, LCC 17589. 
 * Creado para usar en Estimacion de Tamaño de Software
 * Materia Ing de Sw 3 */


function contarDatosIgualesEnColumna(data,number) {
   
  
  // Los datos son una sola columna
  // como es un arreglo de columnas, será un conjunto de
  // filas con solo un valor en cada fila, es decir
  //                  data = [[5],[8], [9]]
  // entonces    data.length = 3
  // pero        data[0].length = 1
  
  
   
  var count = 0;
  
  for (var i=0; i < data.length; i=i+1)
  {
    if(data[i][0]==number)
    {
      count = count + 1;
    }
    
  }
  return count;
}