import React from 'react';

function Article({label, image, title, price}) {
    return (
        <>
            <article>
                <span>{label}</span>
                <img src={image} alt={title} />
                <p>{title}</p>
                <h4>{price}</h4>
            </article>
        </>
    );
}

export default Article;