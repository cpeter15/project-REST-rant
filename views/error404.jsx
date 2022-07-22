const React = require('react');
const Def = require('./default');

const error404 = () => {

    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="images/404-image.jpg"/>
            <div>
            Photo by <a href="https://unsplash.com/es/@theodorrr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Theodor Vasile</a> on <a href="https://unsplash.com/s/photos/horizion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
            </div>
        </main>
    )
}

module.exports = error404