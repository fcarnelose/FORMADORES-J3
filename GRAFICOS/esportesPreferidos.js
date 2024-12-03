import { getCSS,tickConfig } from "./common.js"

async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeEsporte = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)


  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  const colors = nomeEsporte.map(() => getRandomColor());

  const data = [
      {
        x: nomeEsporte,
        y: quantidadeUsuarios,
        type: 'bar',
        marker: {
          color: colors,
         
        }
      }
    ]

    const layout = {
      plot_bgcolor:getCSS('--bg-color'),
      paper_bgcolor:getCSS('--bg-color'),

      title : {
        text : "Esportes Preferidos em Todo o Mundo",
        x:0,
        font: {
        family: getCSS('font'),  
        size: 30,
        color: getCSS('--cor-primaria'),
        }
      },
      xaxis:{
        tickfont:tickConfig,
        title:{
          text: "Nome dos Esportes",
          font:{
            color: getCSS('--cor-primaria'),
            size: 20,
          }
        }
      },
      yaxis:{
        tickfont:tickConfig,
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