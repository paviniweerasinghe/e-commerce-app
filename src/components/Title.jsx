import React from 'react'

export default function Title({name, title}) {
    return (
        <div>
            <div className="row">
                <div className="col-10 mx-auto text-center text-title py-3">
                    <h1 className="text-capitalize font-weight-bold">{name} <span className='text-blue'> <strong> {title} </strong> </span> </h1>
                </div>
            </div>
        </div>
    )
}
