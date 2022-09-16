import React from 'react';

const CommentApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extraContent">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default CommentApprovalCard;