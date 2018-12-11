class Negociacao{

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); //Programacao defensiva: criando outra instancia de data para não correr o risco da data ser sobrescrita *1
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // congela a instância do objeto
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime()); //*1
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}