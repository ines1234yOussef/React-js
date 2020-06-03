import React,{Component} from 'react';
import axios from 'axios';
import e from 'cors';

class Login extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
			email:"",
			firstname:"",
			lastname:"",
			password:""
		}
	}




	login = (e) =>{
		e.preventDefault() 
		const user = {
			
				customer: {
					email:this.state.email,
                    firstname: this.state.firstname,
					lastname: this.state.lastname ,
                  },
				  password: this.state.password 

         
		        };
		  console.log(user)
		  const config = {
			headers: {
			'Content-Type': 'application/json',
			'Authorization':'Bearer lah7h1mzbdutxeljvokni9638itttoas'
			},
			}
		  
	   axios.post('http://projetmagento.com/rest/V1/customers',  user,config)
		.then(response => { 
			console.log(response.data.website_id)
			
			
		})
		.catch(error => {
			console.log(error.response)
		});
		
           
	}
	onChange=(e)=>{
		this.setState({[e.target.name]:e.target.value })
		
	}
	
    render(){

		
        return (
            <div>
        
		<section id="form">
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form">
						<h2>Login to your account</h2>
						<form action="#">
            
							<input type="text" name="username"  onChange={this.onChange} placeholder="username" />
							<input type="password" name="password" onChange={this.onChange}  placeholder="password" />
							<span>
								
							</span> <br/> <br/>
							<button type="submit" class="button" >Login</button>
						</form>
					</div>
				</div>
				<div class="col-sm-1">
					<h2 class="or">OR</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form">
						<h2>New User Signup!</h2>
						<form action="#">
						<input type="email" name="email" onChange={this.onChange} placeholder="email"/>
							<input type="text" name="firstname"  onChange={this.onChange} placeholder="firstname"/>
							<input type="text" name="lastname"onChange={this.onChange} placeholder="lastname"/>
							<input type="password" name="password"onChange={this.onChange} placeholder="password"/>


							

							<button type="submit" onClick={this.login} class="btn btn-default">Signup</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	
	
</div>
				
        

            
        )}

}
export default Login;
