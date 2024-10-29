const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O esporte é uma linguagem universal. Em um mundo com uma população de <span>${dados.total_pessoas_mundo}</span> de pessoas onde, cerca de <span>${dados.total_pessoas_que_praticam_esportes_regularmente}</span>
    praticam esportes regularmente, uma quantidade impressionante
                que revela como essa atividade faz parte da vida de aproximadamente 40% da população mundial. Esses
                praticantes dedicam, em média, <span>${dados.tempo_medio_semana_praticando_esportes}</span> horas horas por semana às suas atividades físicas, o que reflete uma busca
                por saúde, lazer e bem estar.
                Por outro lado, a paixão pelo esporte não se limita apenas à prática.
                Aproximadamente <span>${dados.total_pessoas_que_assistem_esportes}</span> de pessoas assistem a eventos esportivos, seja por meio de transmissões ao
                vivo, TV ou plataformas de streaming. Isso significa que mais da metade da população mundial é atraída
                pelo espetáculo esportivo, consumindo competições em diversos formatos, seja para torcer por seus times
                favoritos ou acompanhar grandes eventos globais.
`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()