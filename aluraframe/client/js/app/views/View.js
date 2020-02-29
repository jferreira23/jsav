class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        //Essa estrategia garante que as classes que herdarem view 
        //vao saber que eh obrigatorio a implementado deste metodo 
        throw new Error("O metodo template deve ser implementado");
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }


}