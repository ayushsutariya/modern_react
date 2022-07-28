import React from 'react';

function Sample(props) {
  console.log(props);
  return (
    <div>
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <a className="avatar">
            <img src={props.faker} />
          </a>
          <div className="content">
            <a className="author">{props.author}</a>
            <div className="metadata">
              <span className="date">{props.time}</span>
            </div>
            <div className="text">
              HOW ARTISTIC !
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sample;