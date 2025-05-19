import { times } from './times.js';

console.log(times)

let trs = document.querySelectorAll('tr')
let filhosDaLinha1 = trs[1].children

let col1_1 = filhosDaLinha1[0]
let col1_2 = filhosDaLinha1[1]
let col1_3 = filhosDaLinha1[2]
let col1_4 = filhosDaLinha1[3]
let col1_5 = filhosDaLinha1[4]
let col1_6 = filhosDaLinha1[5]
let col1_7 = filhosDaLinha1[6]
let col1_8 = filhosDaLinha1[7]
let col1_9 = filhosDaLinha1[8]
let col1_10 = filhosDaLinha1[9]



col1_1.textContent = times[0].time
col1_2.textContent = times[0].pontos
col1_3.textContent = times[0].jogos
col1_4.textContent = times[0].vitorias
col1_5.textContent = times[0].empates
col1_6.textContent = times[0].derrotas
col1_7.textContent = times[0].gols_pro
col1_8.textContent = times[0].gols_contra
col1_9.textContent = times[0].saldo_gols
col1_10.textContent = times[0].porcentagem

