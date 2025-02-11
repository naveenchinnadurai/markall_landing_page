import React from 'react'

function Features(props) {
  return (
    <div className="w-full sm:w-2/3 md:w-7/12 lg:w-1/2">
      <h3 className='text-xl md:text-2xl font-bold'>{props.head1}</h3>
      <h1 className='font-bold md:leading-[61px] py-2 text-3xl md:text-5xl w-fit border-b border-black'>{props.head2} {props.head3}</h1>
    </div>
  )
}

export default Features