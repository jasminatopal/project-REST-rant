const React = require('react')
const Def = require('../default')

function show(data) {
    let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
            <main>
                <div>
                    <h1>{data.place.name}</h1>
                    {message}
                    <img src="https://www.omnihotels.com/-/media/images/hotels/ausctr/restaurants/presidents-house/ausctr-omni-austin-hotel-downtown-presidents-house-coffee-shop.jpg?w=992" alt="cafe" width="600" height="400" />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <h5>Rating</h5>
                    <p>Not Rated</p>
                    <h5>Comments</h5>
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
