// Anna está jugando a un juego que comienza con nubes numeradas consecutivamente. Algunas nubes son cúmulos y otras son cabezas de trueno. 
// Puede saltar sobre cualquier cúmulo que tenga un número igual al de la nube actual más 1 o 2. 
// Debe evitar las cabezas de trueno. 
// Determina el número mínimo de saltos que necesitará Anna para saltar desde su posición inicial hasta la última nube. Siempre es posible ganar el juego.
// Para cada juego, Anna obtendrá una matriz de nubes numeradas con 0 si son seguras o con 1 si deben ser evitadas. 
// Por ejemplo, C=[0,1,0,0,0,1,0] indexadas desde 0...6. 
// El número de cada nube es su índice en la lista, por lo que debe evitar las nubes de los índices 1 y 5. Podría seguir los dos caminos siguientes: 0-> 2->4->6 
// o 0->2->3->4->6. El primer camino requiere 3 saltos mientras que el segundo requiere 4.

const Cloud = [0, 1, 0, 0, 0, 1, 0]

const jumpOnClouds = (arr) => {

    let amountJump = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (i + 2 < arr.length && arr[i + 2] == 0) {
            i++;
        }
        amountJump++
    }
    console.log("She jumped " + amountJump + " times")
    return amountJump;
}

jumpOnClouds(Cloud)