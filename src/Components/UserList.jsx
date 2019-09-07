import React, {Fragment} from 'react'

const UserList = (props) => {

  const {name, age} = props;
  
  return (
    <div>

      <Fragment>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </Fragment>

    </div>
  )
}

export default UserList
