const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    return (
        <Def>
            <main>
                <img src={data.place.pic}></img>
                <div>
                    <h1>{data.place.name}</h1>
                    <div>
                        <h2>Rating</h2>
                        <p>Unrated</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>

                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <form method="POST" action={`/places/${data.id}/comment`}>
                    <div className='form-group'>
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="content">Comment</label>
                        <textarea className="form-control" id="content" name="content" rows='4' col='50' required >

                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="starRating">Star Rating</label>
                        <input type='number' step='0.5' className="form-control" id="starRating" name="starRating" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="rant">Rant</label>
                        <input type='checkbox' id="rant" name="rant" required />
                    </div>
                    <input type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show
