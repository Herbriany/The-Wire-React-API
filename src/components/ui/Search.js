import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                    type='text' 
                    placeholder="Search characters" 
                    className="form-control" 
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autofocus 
                />
            </form>
        </section>
    )
}

export default Search
