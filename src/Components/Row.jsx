import React from 'react'

export default function Row(props) {
    return (
        <div className="row border-top pt-3 pb-3 border-primary">
            {props.children}
        </div>
    )
}
