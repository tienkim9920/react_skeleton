import React, { useEffect, useState } from 'react';
import SkeletonArticles from '../skeleton/SkeletonArticles';

function Articles(props) {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            console.log(data)
            setArticles(data)
        }, 3000)
    }, [])

    return (
        <div className="articles">
            <h3>Articles</h3>

            {
                articles && articles.map((value) => (
                    <div className="profile">
                        <h3>{value.title}</h3>
                        <p>{value.body}</p>
                    </div>
                ))
            }

            {
                !articles && [1,2,3,4,5].map((n) => <SkeletonArticles key={n} theme="light" />)
            }
        </div>
    );
}

export default Articles;