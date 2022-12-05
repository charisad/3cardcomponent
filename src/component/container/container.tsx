import React from 'react'
import Card from '../ui/Card'
import '../ui/styles.css'
import {details} from '../data/data'
import   Icon1 from '../../assets/icon-sedans.svg'
import   Icon2 from '../../assets/icon-suvs.svg'
import  Icon3 from '../../assets/icon-luxury.svg'
const container = () => {

  const first = details.cardDetails[0] 
  const second = details.cardDetails[1] 
  const third = details.cardDetails[2] 

  return (
    <div className="container">
        <Card id="first" header={first.header} icons={Icon1} children={first.paragraph} />
         
        <Card id="second" header={second.header} icons={Icon2} children={second.paragraph} />

        <Card id="third" header={third.header} icons={Icon3} children={third.paragraph} />
    </div>
  )
}

export default container