//EventItem Component
import React from 'react'

function EventItem({name,phone}) {
  return (
    <div>
        <div>Name:-{name}</div>
        <div>Phone:-{phone}</div>
    </div>
  )
}

export default EventItem