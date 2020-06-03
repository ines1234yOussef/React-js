import React,{Component} from 'react';
import axios from 'axios';
import e from 'cors';
import {Link} from 'react-router-dom';


class AjoutProduits extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
             	data:[],
	            Catégories:[],
				sku: "",
				name: "",
				price: "",
				qty:"",	
				value:"",
				attribute_code:"description",
				category_id:"",	

			    attribute_set_id: 10
				// Est ce que tu as essayé de mettre la variable de vendeur_id?oui mais tjrs la mm erreur
				 
			}}
			    componentDidMount(){
				const config = {
				 headers: {
				 'Content-Type': 'application/json',
				 'Authorization':'Bearer w3vjkzzpy7jrn2cs77wmbgjcegdoirgq'
				 },
				 }
				 
			 axios.get(`http://projetmagento.com/rest/V1/categories`,config)
			 .then(response => { 
				 console.log(response.data)
	                  this.setState({
					 data:response.data.children_data
				 })
			 })
			 .catch(error => {
				 console.log(error.response)
			 });
		 }


		 
			
		login = (e) =>{
		e.preventDefault() 
		const user = {
			product: {

				sku:this.state.sku,
				name:this.state.name,
				price:this.state.price,
				attribute_set_id:this.state.attribute_set_id,
				
				extensionAttributes:{
					stockItem:{
						qty:this.state.qty
					}
					
				},

                customAttributes:{
					vendeur_id: window.localStorage.getItem('id'),

					4:{
					attribute_code:this.state.attribute_code,
					value:this.state.value,
					},
					7:{
						attribute_code:this.state.attribute_code,
						value:this.state.value,
						
						},
					5:{
							attribute_code:this.state.attribute_code,
							value:this.state.value,
							},


						},
						
					},
}
			
             const config = {
			headers: {
			'Content-Type': 'application/json',
			'Authorization':'Bearer lah7h1mzbdutxeljvokni9638itttoas'
			},
			}
	   axios.post('http://projetmagento.com/rest/V1/products',  user,config)
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
						<input type="text" name="name" onChange={this.onChange} placeholder="name"/>
							<input type="text" name="sku" onChange={this.onChange} placeholder="sku"/>
							<input type="float" name="price" onChange={this.onChange} placeholder="price"/>
							<input type="text" name="qty" onChange={this.onChange} placeholder="qty"/>
							<input type="text" name="value" onChange={this.onChange} placeholder="Description"/><br/>
							
					
						<select name="category_id"  onChange={this.handleChange} >                 
                            {this.state.data.map((el,index)=> 
							<option value={el.category_ids}>{el.name}</option>)}
						    </select>

                    	<button type="submit" onClick={(e)=>this.login(e)} class="btn btn-default">Ajouter</button>
                  	</form>
					</div>
				</div>
				
				</div>
			</div>
	
	</section>
	
	
	
	
</div>
				 
        

            
        )}

}
export default AjoutProduits;