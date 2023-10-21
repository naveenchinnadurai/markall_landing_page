import React from 'react'
import '../styles/features.css'

function Features(props) {
  return (
    <div className="features-div-1">
      <h3>{props.head1}</h3>
      <h1>{props.head2} <br /> {props.head3}</h1>
    </div>
  )
}

export default Features