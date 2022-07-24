const React = require('react')
const Def = require('../default')

function show(data) {
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
                        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                    </div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/place/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>

                </div>
                <div>
                    <h2>Comments</h2>
                    <p>comments unavailable</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show