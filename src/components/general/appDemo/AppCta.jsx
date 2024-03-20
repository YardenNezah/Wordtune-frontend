import React from 'react'
import UrlLink from '../../layout/UrlLink'

const AppCta = () => {
    return (
        <section className="app-cta">
            <div className="cta-content">
                <h1><span className="font-general-sans">Get a feel for what </span>Wordtune can do</h1>
            </div>
            <UrlLink location="https://app.wordtune.com/auth/signup" title="Try Wordtune for free" />
        </section>
    )
}

export default AppCta