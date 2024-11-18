import { getCSS,tickConfig } from "./common.js"

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
        type: 'bar',
        marker: {
          color: getCSS('--cor-primaria')
        }
      }
    ]

    const layout = {
      plot_bgcolor:getCSS('--bg-color'),
      paper_bgcolor:getCSS('--bg-color'),

      title : {
        text : "Esportes Preferidos em Todo o Mundo",
        font: {
        family: getCSS('font'),  
        size: 30,
        color: getCSS('--cor-primaria'),
        }
      },
      xaxis:{
        tickFont:tickConfig,
        title:{
          text: "Nome dos Esportes",
          font:{
            color: getCSS('--cor-secundaria'),
            size: 20,
          }
        }
      },
      yaxis:{
        tickFont:tickConfig,
        title:{
          text: "Bilhões de pessoas",
          font:{
            color: getCSS('--cor-secundaria'),
            size: 20,
          }
        }
      },

    }
  



    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data,layout)

}

quantidadeUsuarios()