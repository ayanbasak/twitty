import React from 'react'
import { LoaderRoot, Spinner } from './Loader.styles'

export const Loader = ({size, color}) => {
  return (
    <LoaderRoot>
       <Spinner size={size} color={color}/>
    </LoaderRoot>
  )
}

// <Loader size="90px"/>