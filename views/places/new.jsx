const React = require('react')
const Default = require('../default')

function New() {
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <br/>
                <form method='POST' action='/places'>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Name</label>
                            <input
                                className="form-control" 
                                id="name" 
                                name="name" 
                                type="text"
                                required />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Picture</label>
                            <input
                                className="form-control" 
                                id="pic" 
                                name="pic" 
                                type="url" />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control" 
                                id="city" 
                                name="city" 
                                type="text" />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control" 
                                id="state" 
                                name="state" 
                                type="text" />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                className="form-control" 
                                id="cuisines" 
                                name="cuisines" 
                                type="text" 
                                required />
                        </div>
                        <br/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New
