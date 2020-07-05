// React imports
import React, { useState, useRef, useMemo } from 'react'

// Third imports
import { debounce } from 'lodash'
import { FiCamera } from 'react-icons/fi'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// Local imports
import '../../static/css/product.scss'


export default function ProductRegistration() {

  const animatedComponents = makeAnimated()

  const [thumbnail, setThumbnail] = useState(null)
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const timer = 500

  const options = [
    { value: 'Desapega', label: 'Desapega' },
    { value: 'Xlo', label: 'Xlo' },
    { value: 'SlP', label: 'SlP' },
    { value: 'Big preço', label: 'Big preço' },
    { value: 'Vendas Fast', label: 'Vendas Fast' }
  ]

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  const delayedQueryText = useRef(
    debounce(e => {
      setText(e)
    }, timer)
  ).current
  const delayedQueryDescription = useRef(
    debounce(e => {
      setDescription(e)
    }, timer)
  ).current
  const delayedQueryPrice = useRef(
    debounce(e => {
      setPrice(e)
    }, timer)
  ).current

  function handleChangeTitle(e) {
    delayedQueryText(e.target.value)
  }
  function handleChangeDescription(e) {
    delayedQueryDescription(e.target.value)
  }
  function handleChangePrice(e) {
    delayedQueryPrice(e.target.value)
  }

  return (
    <div className='container-main'>
      <div className='product-subcontainer'>
        <div className='form-new-register'>
          <form>
            <label className='thumbail'>
              <FiCamera size={50} />
              <input className='input-photo' type='file' onChange={event => setThumbnail(event.target.files[0])} />
              <p className='placeholder-to-indicate-the-image'>Click aqui para selecionar a foto do seu produto</p>
            </label>

            <label className='title' htmlFor='name-product'>Nome do roduto</label>
            <input type='text' id='name-product' required onChange={handleChangeTitle} />

            <label className='title' htmlFor='description-product'>Descrição</label>
            <textarea id='description-product' required onChange={handleChangeDescription} />

            <label className='title' htmlFor='platform-product'>Pataformas</label>
            <Select
              className='select-platform'
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              placeholder='selecione as plataformas'
              options={options}
            />

            <label className='title' htmlFor='price-product'>Preço</label>
            <input type='text' id='price-product' required onChange={handleChangePrice} placeholder='R$999.00' />

            <div className='content-btn'>
              <button className='confirm-btn'>Cadastrar</button>
              <button className='cancel-btn'>Cancelar</button>
            </div>
          </form>
        </div>
        <div className='container-product'>
          <div className='product'>
            <img className='photo-product' src={preview} />
            <p className='title'>{text}</p>
          </div>
          <div className='content-product'>
            <p className='price'>{price}</p>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}