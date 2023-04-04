const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/intercontinental-san-diego/media/cache/ISD-Dining-Vistal-5bce3fba2e93a-670x530.jpg" width="600" height="400" alt="oceanview-restaurant" />
        </div>
        
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>

      </main>
    </Def>
  )
}


module.exports = home
