import React from 'react'

export default function Wrapper(props) {
    return (
        <div className="container-fluid">
            <div className="row" style={{ minHeight: "100vh" }}>
                {props.children}
            </div>
        </div>

    )
}
