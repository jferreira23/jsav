
class NegociacaoController{

    //capturar os elementos do DOM no construtor é uma boa prática que visa melhorar performance, os 
    //objetos são capturados apenas uma vez
    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event){

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNovaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);

    }

    _criaNovaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value,
            this._inputValor.value);

    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

}