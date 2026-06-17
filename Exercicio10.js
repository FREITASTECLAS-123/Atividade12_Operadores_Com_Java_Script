let salariobruto=Number(prompt("Digite o salário bruto do cliente (R$): "))
let valorparcela=Number(prompt("Digite o valor da parcela solicitada (R$): "))
let limitemaximo=salariobruto*0.30

if(valorparcela<=limitemaximo){
    console.log(`Crédito Aprovado`)
    alert("Crédito Aprovado")
    
}else{
    console.log(`Crédito Recusado`)
    alert("Crédito Recusado")
}