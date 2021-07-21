export const removeDatasRepetidas = (datas) => {

//algoritmo vai passar para remove datas repetidas o localstorage
    const datasUnicas = []
    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas
}

// ordenação da data
export const ordenaDatas = (data) => {
    data.sort(a => {



    })


}

//ler indexOf https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort