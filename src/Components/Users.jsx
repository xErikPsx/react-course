import React, {Component} from 'react'

class Users extends Component {

	constructor(props) {
		super(props)

		this.state = {
			users: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users') //Obtener todos los obejetos de a url
			.then(response => response.json())
			.then(jsonResponse => this.setState({users: jsonResponse}))
	}

	render(){

		const {users} = this.state;

		console.log(users)
		return(
			
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
		)
	}
}

export default Users;