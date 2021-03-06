import React from 'react';

const CardComponent = ({ children }) => {
    return (
        <div className="ui card">
            <div className="content">{children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;