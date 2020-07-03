// React imports
import React from 'react'

// Third imports
import {
  FaStar,
  FaSuitcase
} from 'react-icons/fa'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Local imports
import '../../static/css/details-screen.scss'
import Tv from '../../static/images/tv.png'
import Beto from '../../static/images/beto.png'
import Betinho from '../../static/images/betinho.png'
import Girl from '../../static/images/girl.png'
import Gil from '../../static/images/gil.png'


export default function DetailsScreen() {

  const options = {
    chart: {
      styleMode: true,
      backgroundColor: 'transparent',
      marginTop: 5,
      height: 300,
      width: 600,
      spacingLeft: 10
    },
    title: '',
    xAxis: {
      lineColor: '#fff',
      lineWidth: 1,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago'],
      labels: {
        style: {
          color: '#fff'
        }
      },
    },
    yAxis: {
      gridLineWidth: 0,
      lineColor: '#fff',
      lineWidth: 1,
      min: 500,
      max: 1700,
      title: {
        enabled: false
      },
      labels: {
        style: {
          color: '#fff'
        }
      },
    },
    series: [{
      color: '#B1E1FC',
      type: 'column',
      data: [1600, 700, 1200, 980, 1000, 960, 1100, 1600]
    }],
    legend: '',
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 17,
        borderWidth: 0,
      }
    }
  }

  const optionsPie = {
    series: [{
      data: [
        {
          y: 10,
          color: '#f9a94b'
        },
        {
          y: 10,
          color: '#eb6666'
        },
        {
          y: 10,
          color: '#43db9b'
        },
        {
          y: 10,
          color:  '#52B6EE'
        },
      ]
    }],
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: 210,
      width: 200,
      spacingLeft: 10
    },
    plotOptions: {
      pie: {
        size: 200,
        borderWidth: 0,
        dataLabels: {
          enabled: false,
        },
      },
    },
    title: '',
    credits: {
      enabled: false
    },
  }

  const renderStars = () => {
    let elements = []

    for (let i = 0; i < 5; i++) {
      elements.push(
        <FaStar
          key={i}
          color='#ffc107'
          size={14} />
      )
    }

    return elements
  }

  return (
    <div className='container-main'>
      <div className='container-graphic'>
        <p className='title-graphic'>Quantitativo de vendas por mês</p>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>

        <div className='container-graphic-pie'>
          <div className='graphic-pie'>
            <p>Plataformas com maiores vendas</p>
            <div>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsPie}
              />
            </div>
          </div>

          <div className='graphic-pie'>
            <p>Plataformas com menores vendas</p>
            <div>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsPie}
              />
            </div>
          </div>
        </div>

      </div>

      <div className='container-product'>
        <div className='product'>
          <img className='photo-product' src={Tv} />
          <p className='title'>Televisão SmartTV 40 polegadas Samsung</p>
        </div>
        <div className='content-product'>
          <div>
            <p className='price'>R$1570,89</p>
            {renderStars()}
          </div>
          <div className='info-platform'>
            <FaSuitcase color='#7d490d' className='bag-icon' />
            <p>3 plataformas</p>
          </div>
        </div>
        <div className='description'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='feedback'>
          <p className='title-content-user'>Top comentários</p>

          <div className='content-user'>
            <img src={Beto} />
            <div>
              <p className='name-user'>username</p>
              <p className='comment-user'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            {renderStars()}
          </div>

          <div className='content-user'>
            <img src={Betinho} />
            <div>
              <p className='name-user'>username</p>
              <p className='comment-user'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            {renderStars()}
          </div>

          <div className='content-user'>
            <img src={Girl} />
            <div>
              <p className='name-user'>username</p>
              <p className='comment-user'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            {renderStars()}
          </div>

          <div className='content-user'>
            <img src={Gil} />
            <div>
              <p className='name-user'>username</p>
              <p className='comment-user'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            {renderStars()}
          </div>

        </div>
      </div>
    </div>
  )
}