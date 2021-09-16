import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import dashboard from "./dashboard";
import createPosts from "./createPosts";
import EditPosts from "./EditPosts";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" exact component={dashboard} />
                <Route path="/addPosts" exact component={createPosts} />
                <Route path="/edit/:id" exact component={EditPosts} />
            </Switch>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>

//                         <div className="card-body">I'm an example component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }