import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// redux
import { callAPI } from '../../store/example/action'

const Main = (props) => {
  useEffect(() => {
    props.callAPI({ teste: 'Olá' })
  }, [])

  useEffect(() => {
    console.log(props.example)
  }, [props.example])

  return (
    <h2>Olá mundo</h2>
  )
}

const mapStateToProps = ({ example }) => {
  return {
    example
  }
}
export default connect(
  mapStateToProps, {
    callAPI
  }
)(Main)