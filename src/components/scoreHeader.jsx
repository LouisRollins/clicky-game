import React, { Component } from 'react';
class Score extends Component {
render() {
return (
<div className="row">
    <div className="col-md-12">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click on an image to start, but don't click on the same image twice!
                </p>
            </div>
        </div>
    </div>
</div>

);
}
}

export default Score;