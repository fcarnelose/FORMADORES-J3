const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const PessoasnoMundo = (dados.total_pessoas_mundo) / 1e9;
    const PraticaEsportes = (dados.total_pessoas_que_praticam_esportes_regularmente) / 1e9
    const Porcentagem = ((PraticaEsportes/PessoasnoMundo)*100).toFixed (2)
    const TempoHoras = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const TempoMinutos = Math.round((dados.tempo_medio_semana_praticando_esportes - TempoHoras) * 100)
    const AssisteEsportes= (dados.total_pessoas_que_assistem_esportes) / 1e9
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O esporte é uma linguagem universal. Em um mundo com uma população de <span>${PessoasnoMundo}</span> bilhões de pessoas onde, cerca de <span>${PraticaEsportes}</span>
    bilões praticam esportes regularmente, uma quantidade impressionante
                que revela como essa atividade faz parte da vida de aproximadamente <span>${Porcentagem}%</span>  da população mundial.<br> Esses
                praticantes dedicam, em média, <span>${TempoHoras}</span> horas e <span>${TempoMinutos}</span> minutos por semana às suas atividades físicas, o que reflete uma busca
                por saúde, lazer e bem estar.
                <br>Por outro lado, a paixão pelo esporte não se limita apenas à prática.
                Aproximadamente <span>${AssisteEsportes}</span> bilões de pessoas assistem a eventos esportivos, seja por meio de transmissões ao
                vivo, TV ou plataformas de streaming. Isso significa que mais da metade da população mundial é atraída
                pelo espetáculo esportivo, consumindo competições em diversos formatos, seja para torcer por seus times
                favoritos ou acompanhar grandes eventos globais.
`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()