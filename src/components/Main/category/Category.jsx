import React from 'react'
import './category.css'

export default function Category({ category }) {

    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {category.map((item, i) => <dd key={i}>{item}</dd>)}
        </dl>
    )
}
