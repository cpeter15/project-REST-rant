const React = require('react');
const Def = require('../default');

const index = (data) => {
    let placesFormatted = data.places.map((place,) => {
        return (
            <div className="col-sm-6">
                <a href={`/places/${place.id}`}>
                    {place.name}
                </a>
                <p className="tex-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index;