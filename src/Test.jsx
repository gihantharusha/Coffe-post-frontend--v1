import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
    const params = useParams()
    const name = params.username
    const id = params.id
  return (
    <div>{name}, {id}</div>
  )
}

export default Test