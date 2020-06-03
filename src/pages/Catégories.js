import React, {
    Component
} from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';
import e from 'cors';

class Catégories extends React.Component {

        constructor(props) {

            super(props);
            this.state = {
                name: "",
                category_id: "",
                sku: "",
                label: "Image",
                media_type: "Image",
                position: "",
                base64EncodedData: "",
                type: "image/jpg",
                image: "",
                small_image: "",
                Thumbnail: "",
                disabled: "",
                file: "",
                id: "",

                data: [],
            }
        }



        componentDidMount() {

            const user = {

                category_id: this.state.category_id,
                sku: this.state.sku,
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer fwa2dq5vl6l6cp1cqc6j8ogkvrd2coad'
                },
            }

            axios.get(`http://projetmagento.com/rest/V1/categories/${this.props.id}/products`, config, user) // OK
                .then(response => {
                    console.log(response.data);

                    this.test = response.data;


                    this.setState({
                        data: response.data,
                    })
                })
                .catch(error => {
                    console.log(error.response)
                });
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.file == this.state.sku)   {               
                    const user = {

                        entry: {
                            media_type: this.state.media_type,
                            label: this.state.label,
                            position: this.state.position,
                            disabled: this.state.disabled,
                            id: this.state.id,
                            sku: this.state.sku,

                            types: {
                                image: this.state.image,
                                small_image: this.state.small_image,
                                thumbnail: this.state.thumbnail,

                            },
                            content: {
                                base64EncodedData: this.state.base64EncodedData,
                                type: this.state.type,
                                name: this.state.name,

                            },

                        },


                    }
                    const config = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer fwa2dq5vl6l6cp1cqc6j8ogkvrd2coad'
                        },
                    }

                    console.log(this.state);
                    this.state.data.forEach(element => {

                      var url = 'http://projetmagento.com/rest/all/V1/products/' + element.sku + '/media';
                        axios.get(url, config, user)
                            .then(response => {


                                console.log(response.data);
                                this.setState({
                                    data2: response.data
                                })


                            })
                            .catch(error => {
                                console.log(error.response)
                            })
                    });
                }
            }
	
	
				

	

 render(){
	
		return ( 
			<div >
				{ (this.state.data )? this.state.data.map((el, index) => 
				<ul >
                    
					{ (this.state.data2 )? this.state.data2.map((el2, index) => 
                     <li>
                         <div class="col-sm-3">
									<div class="product-image-wrapper">
										<div class="single-products">
											<div class="productinfo text-center">
                                            <img src={`http://projetmagento.com/pub/media/catalog/product/${el2.file}`} alt=" " />

												<h2>$120</h2>


                                                <li><Link to={`/Products/${el.sku}`}>  <h2>{el.sku}</h2>  </Link> <br/></li> <br/> <br/>

												<button type="button" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
                                
                      
					</li>
					):<em></em>}
                </ul>
				):<em></em>}							
            </div>
        
				
						
			 
)}}


export default Catégories ;


