import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import CardComponent from './Card-Component';
import reportWebVitals from './reportWebVitals';


const App = () => {
  return (
    <div className="ui container comments">
      <CardComponent>
        <CommentDetail author="Sam" date="Today at 11:00AM" text="Great Job"/>
      </CardComponent>
      <CardComponent>
        <CommentDetail author="Joey" date="Today at 4:00PM" text="Yeah I had fun!"/>
      </CardComponent>
      <CardComponent>
        <CommentDetail author="Sarah" date="Today at 6:00PM" text="Me too!"/>
      </CardComponent>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
