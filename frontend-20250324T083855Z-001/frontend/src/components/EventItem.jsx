//EventItem Component
import React from 'react'

function EventItem({name,phone}) {
  return (
    <div>
        <div>Note:-</div>
        <div><strong>Click on  register Event to register for event </strong></div>
        <div>{name}</div>
        <div>{phone}</div>
    </div>
  )
}

export default EventItem