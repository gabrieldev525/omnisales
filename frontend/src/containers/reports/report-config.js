import React from 'react'

// static
import imageConfig from '../../static/images/Setup-amico.png'
import '../../static/css/report.scss'

const ReportConfig = () => {
  return (
    <div className='report-container'>
      <div className='content left'>
        <h3>Configurações do relatório mensal</h3>
        <p>Aqui você pode selecionar qual a plataforma e com quais meses você deseja realizar a criação do relatório</p>

        <div className='input'>
          <label>Plataforma</label>
          <select>
            <option>Plataforma X</option>
            <option>Plataforma Y</option>
            <option>Plataforma Z</option>
          </select>
        </div>
        <div className='input'>
          <label>Data período</label>
          <select>
            <option>07/04/2020 - 04/05/2020</option>
            <option>07/05/2020 - 04/06/2020</option>
            <option>07/06/2020 - 04/07/2020</option>
          </select>
        </div>

        <button>Gerar</button>
      </div>
      <div className='content right'>
        <img src={imageConfig} className='image-config' />
      </div>
    </div>
  )
}
export default ReportConfig