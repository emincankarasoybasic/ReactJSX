import React from 'react';
import ReactDom from 'react-dom';
import {faker} from '@faker-js/faker';
import CommentApprovalCard from './CommentApprovalCard';
import CommentDetail from './CommentDetail';
import './style/App.css';

const root = document.getElementById("root");
const reactRoot = ReactDom.createRoot(root);

function App(){
    return (
        <div className="ui container comments">
            <CommentApprovalCard>
                <CommentDetail author={faker.name.fullName()} content={faker.lorem.sentence()} email={faker.internet.email()} avatar={faker.image.avatar()}/>
            </CommentApprovalCard>
            <CommentApprovalCard>
                <CommentDetail author={faker.name.fullName()} content={faker.lorem.sentence()} email={faker.internet.email()} avatar={faker.image.avatar()}/>
            </CommentApprovalCard>
            <CommentApprovalCard>
                <CommentDetail author={faker.name.fullName()} content={faker.lorem.sentence()} email={faker.internet.email()} avatar={faker.image.avatar()}/>
            </CommentApprovalCard>
            <CommentApprovalCard>
                <CommentDetail author={faker.name.fullName()} content={faker.lorem.sentence()} email={faker.internet.email()} avatar={faker.image.avatar()}/>
            </CommentApprovalCard>
            <CommentApprovalCard>
                <CommentDetail author={faker.name.fullName()} content={faker.lorem.sentence()} email={faker.internet.email()} avatar={faker.image.avatar()}/>
            </CommentApprovalCard>
        </div>
    );
}

reactRoot.render(<App/>);
