import React from 'react'

export default function Box(props) {
    return (
        <div className="border-top border-bottom mt-1 mb-3 pt-1 pb-1">
            {props.children}
        </div>
    )
}
