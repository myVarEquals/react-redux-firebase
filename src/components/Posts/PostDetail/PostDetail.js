import React from 'react'

const postDetail = props => {

    const id = props.match.params.id;

    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Post Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in aliquam nesciunt sequi, reiciendis ratione. Pariatur perferendis atque animi tempora. Laborum at sequi quasi quis ex praesentium commodi. Numquam, ratione?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Rog</div>
                    <div>11:30 AM</div>
                </div>
            </div>
        </div>
    )
}

export default postDetail
