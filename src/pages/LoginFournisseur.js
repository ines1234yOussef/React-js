import React, {
    Component
} from 'react';
import axios from 'axios';
import e from 'cors';
import {
    Link
} from 'react-router-dom';


class LoginFournisseur extends React.Component {
        constructor(propos) {
            super(propos);
            this.state = {
                email: "",
                firstname: "",
                lastname: "",
                password: "",
                group_id: 2,
                id: "",
                username: "",
                token: null

            }
        }




        login = (e) => {
            e.preventDefault()
            const user = {

                username: {
                    email: this.state.email,
                    id: this.state.id
                },
                customer: {
                    email: this.state.email,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    group_id: this.state.group_id,

                },
                password: this.state.password,
            };

            console.log(user)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer lah7h1mzbdutxeljvokni9638itttoas'
                },
            }

            axios.post('http://projetmagento.com/rest/V1/customers', user, config)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                })
        };

        Authentification = (e) => {
            e.preventDefault()
            const user2 = {


                username: this.state.username,
                password: this.state.password




            };
            console.log(user2)
            const config = {
                headers: {
                    'Authorization': 'Bearer lah7h1mzbdutxeljvokni9638itttoas'
                },
            }




            axios.post('http://projetmagento.com/rest/V1/integration/customer/token', user2, config)
                .then(response => {
                    console.log(response)
                    if (response.data) {

                        this.setState({
                            token: response.data
                        })
                        window.localStorage.setItem('token', response.data)
                        const config2 = {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer " + response.data
                            },
                        }
                        axios.get('http://projetmagento.com/rest/V1/customers/me', config2)
                            .then(response => {
                                //window.localStorage.
                                window.localStorage.setItem('name', response.data.firstname)
                                window.localStorage.setItem('lastname', response.data.lastname)
                                window.localStorage.setItem('id', response.data.id)
                            }).catch(error => {
                                console.log(error.response)
                            });




                    }
                })
                .catch(error => {
                    console.log(error.response)
                });

        }
        onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })

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
							<input type="email" name="username"  onChange={this.onChange} placeholder="username" />
							<input type="password" name="password" onChange={this.onChange}  placeholder="password" />
							<button type="submit" onClick={this.Authentification}  class="button" >
								<Link to="/DashbordFournisseur"> Login </Link>
							</button>
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
							<button type="submit" onClick={this.login} class="btn btn-default"> Signup </button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
				
        

            
        )}

}
export default LoginFournisseur;