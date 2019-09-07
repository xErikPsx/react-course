import React, {useState, useEffect, Fragment} from 'react'
import Button from './Buttons/Button';

const Users = () => {
    
		const [users, setUsers] = useState([])
		
    // useEffect(() =>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(jsonReponse => setUsers(jsonReponse))
		// }, [])
		
		const fetchUser = () => {
			fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(jsonReponse => setUsers(jsonReponse))
		}
    
    return(
			<Fragment>
				<ul>
				{
					users.map((user,index) => {
						return (
							<li key = {index}>
								{user.name}
							</li>
						)
						})
				}
				</ul>
				<Button className="btn" text="Load Users" type="button" onClick={fetchUser}/>
				
			</Fragment>
			

    )
}

export default Users