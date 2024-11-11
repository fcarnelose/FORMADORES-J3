async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeEsporte = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
          x: nomeEsporte,
          y: quantidadeUsuarios,
          type: 'bar'
        }
      ]

      const grafico = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('graficos-container').appendChild(grafico)
      Plotly.newPlot(grafico, data)

}

quantidadeUsuarios()