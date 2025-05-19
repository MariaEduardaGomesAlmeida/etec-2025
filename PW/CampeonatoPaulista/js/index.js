import { times } from './times.js';

console.log(times)



let trs = document.querySelectorAll('tr');

for (let i = 1; i < trs.length && i - 1 < times.length; i++) {
    let filhos = trs[i].children;
    let time = times[i - 1]; 

    filhos[0].textContent = time.time;
    filhos[1].textContent = time.pontos;
    filhos[2].textContent = time.jogos;
    filhos[3].textContent = time.vitorias;
    filhos[4].textContent = time.empates;
    filhos[5].textContent = time.derrotas;
    filhos[6].textContent = time.gols_pro;
    filhos[7].textContent = time.gols_contra;
    filhos[8].textContent = time.saldo_gols;
    filhos[9].textContent = time.porcentagem + '%';
}
