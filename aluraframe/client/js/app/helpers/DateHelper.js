class DateHelper{

    constructor(){
        throw new Error("DateHelper nao pode ser instanciado");
    }

    //com static nao eh necessario instanciar um objetos para usar os métodos da classe

    static dataParaTexto(data){

        //return data.getDate() + '/' + (data.getMonth() +1) + '/' + data.getFullYear();
        console.log('passei aqui');
        return `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`;

    }

    static textoParaData(texto){

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve estar no padrao YYYY-mm-dd');
     
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));

    }
}