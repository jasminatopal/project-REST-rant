const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div>
                    <h1>{data.place.name}</h1>
                    <img src="https://www.omnihotels.com/-/media/images/hotels/ausctr/restaurants/presidents-house/ausctr-omni-austin-hotel-downtown-presidents-house-coffee-shop.jpg?w=992" alt="cafe" width="600" height="400" />
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Comments</h2>
                    <p>No comments yet</p>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>

                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>



                </div>
            </main>
        </Def>
    )
}



module.exports = show
