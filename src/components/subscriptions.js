import React, { Component } from 'react';

export class Subscriptions extends Component {
	constructor(props){
		super(props)

		this.state = {
			email:'',
			error:false,
			success:false
		}
	}

	clearMessages = () => {
		setTimeout(function(){
			this.setState({
				error:false,
				success:false
			})
		}.bind(this), 3000)
	}

	saveSubscription = (email) => {
		const URL_EMAIL = `http://localhost:3004/subcriptions`
		fetch(URL_EMAIL,{
			method:'POST',
			headers:{
				'Accept' : 'application/json',
				'Content-Type':'application/json',
			},
			body:JSON.stringify({email})
		}).then(res => res.json())
		.then(() => {
			this.setState({
				email:'',
				success:true
			})
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let email = this.state.email
		let regex = /\S+@\S+\.\S+/

		if(regex.test(email))
		{
			this.saveSubscription(email)
		}
		else
		{
			this.setState({error:true})
		}

		this.clearMessages()
	}

	onChangeInput = (event) => {
		this.setState({
			email:event.target.value
		})
	}


	render() {
		return (
			<div className="subscribe_panel">
				<h3>Subscribe to us</h3>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input 
						placeholder="YourEmail@email.com"
						type="text" 
						value={this.state.email}
						onChange={this.onChangeInput}/>

						<div className={this.state.error ? "error show":"error" }>Check Your Email</div>
						<div className={this.state.success ? "success show":"success" }>Thank You</div>
					</form>
				</div>

				<small>
					Hello, I'm David and this is just an example,
					a simple project to rpactice react and no, even if you 
					put your email you are not going to receive anything
				</small>
			</div>
		)
	}
}

export default Subscriptions