// React import
import React from 'react'

// Local import
import '../../static/css/leads.scss'
import backgroundInfo from '../../static/images/config.png'

export default function configLead() {
  return (
    <div className='container-main-leads'>
      <div className='content-form'>
        <div className=''>
          <p className='title'>Url para envio dos leads capturados</p>
          <p className='url-content'>http://omnisales.com/api/leads-capture</p>
        </div>
        <div className=''>
          <p className='title'>Token para autenticação</p>
          <p className='url-content'>6AEA3E546B81B119F08F708F691E00A76D</p>
        </div>
        <div className='info-token'>
          <p className='token-title'>Configuração das chaves dos dados da requisição</p>
          <p className='description'>Você precisa definir quais as chaves que irão vir na requisição dos leads que serão armazenados</p>
        </div>

        <form>
          <label htmlFor='chaveEmail'>Chave do email</label>
          <input type='text' id='chaveEmail'/>

          <label htmlFor='chaveNome'>Chave do Nome</label>
          <input type='text' id='chaveNome'/>

          <label htmlFor='chaveCell'>Chave do celular</label>
          <input type='text' id='chaveCell'/>
        </form>
        <button>Salvar</button>
      </div>
      <div className='content-img-info'>
        <img src={backgroundInfo} />
      </div>
    </div>
  )
}
