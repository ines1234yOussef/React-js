import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Header extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
			
		
		}
	}
	componentDidMount(){
		const config = {
			headers: {
			'Content-Type': 'application/json',
			'Authorization':'Bearer lah7h1mzbdutxeljvokni9638itttoas'
			},
			}
		axios.get('http://projetmagento.com/rest/V1/categories',config)
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
	


    render() {
        return (
 <div>

<header id="header"> 
		<div class="header_top">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="social-icons pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> {/*<!--/header_top-->*/}
		
                 <div class="header-middle"> {/* <!--header-middle--> */}
			<div class="container">
				<div class="row">
					<div class="col-md-4 clearfix">
						<div class="logo pull-left">
							<a href=""><img src="assets/images/home/logo.png" alt="" /></a>
						</div>
						<div class="btn-group pull-right clearfix">
							<div class="btn-group">
								
									<span class="caret"></span>
								<ul class="dropdown-menu">
								</ul>
							</div>
							
							<div class="btn-group">
								
								<ul class="dropdown-menu">
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-8 clearfix">
						<div class="shop-menu clearfix pull-right">
							<ul class="nav navbar-nav">
								<li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Panier</a></li>
								<li><Link to="/Login"><i class="fa fa-lock"></i> Espace Client </Link></li>
								<li><Link to="/LoginFournisseur"><i class="fa fa-lock"></i> Espace Fournisseur </Link></li>

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="header-bottom"> {/*<!--header-bottom-->*/}
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
							
								<li><a href="" class="active">Home</a></li>
								{ (this.state.data )? this.state.data.map((el, index) => 
								 <li key={el.name} class="dropdown">
									<a>{el.name}<i class="fa fa-angle-down"></i></a>
								<ul role="menu" class="sub-menu">
									{(el)?el.children_data.map((ell,index)=>
									<li>
									<Link to={`/Catégories/${ell.id}`}>{ell.name}</Link>
									</li>):
									<em></em>}
									 </ul>
							     </li> 
							     ) : <em></em>}



								
								 
								 
								 
								


								
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>


 </div>

        )
    }}
    export default Header;
