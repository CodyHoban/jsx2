import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45"
          post="Green man Rules!"
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Frank" 
          timeAgo="Today at 3:17" 
          post="Red man Loses!" 
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 9:02" 
          post="Blue man Wins!" 
          avatarImage={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
