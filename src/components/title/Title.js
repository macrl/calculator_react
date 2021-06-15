import React from 'react'
import './Title.css'

const Title=({content,style})=>{
    return(<div className={style}>
            {content}
    </div>)
  }

export default Title