import React,{Component} from 'react';
import axios from 'axios';
import e from 'cors';
import {Link} from 'react-router-dom';


class DashbordFournisseur extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
			
		}
	}




	login = (e) =>{
		e.preventDefault() 
		const user = {
			
				
         
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
						<h2>Profil Vendeur</h2>
						<form action="#">
						<button type="submit" class="btn btn-default"><Link to="/AjoutProduits"> Ajout Produit </Link></button><br/>
						<button type="submit" class="btn btn-default"><Link to="/ModifierProduit"> Modifier Produit </Link></button><br/>
						<button type="submit" class="btn btn-default"><Link to="/SupprimerProduit"> Supprimer Produit </Link></button>


            
							
						</form>
					</div>
				</div>
				
				</div>
			</div>
	
	</section>
	
	
	
	
</div>
				
        

            
        )}

}
export default DashbordFournisseur;
