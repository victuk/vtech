/* <!-- Product Item -->
							<div class="product_item is_new">
								<div class="product_border"></div>
								<div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""></div>
								<div class="product_content">
									<div class="product_price">N225<span>N300</span></div>
									<div class="product_name"><div><a href="#" tabindex="0">Canon STM Kit...</a></div></div>
								</div>
								<div class="product_fav"><i class="fas fa-heart"></i></div>
								<ul class="product_marks">
									<li class="product_mark product_discount">-25%</li>
									<li class="product_mark product_new">new</li>
								</ul>
							</div>
*/


document.addEventListener("DOMContentLoaded", function() { 
    

fetch('js/functionalities/productsData.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let products = document.getElementById("the-main-products");
    data.forEach(function(product){
    
    let ifItsNew = (product.isNew == "yes") ? `<li class="product_mark product_new">New</li>` : ``;
    
    products.innerHTML += `<!-- Product Item -->
							<div class="product_item is_new"><a href="#">
								<div class="product_border"></div>
								<div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="${product.image}" alt=""></div>
								<div class="product_content">
									<div class="product_price">N${product.discountPrice}<span>N${product.price}</span></div>
									<div class="product_name"><div><a href="#" tabindex="0">${product.productName}</a></div></div>
								</div>
								
								<ul class="product_marks">
									
									${ifItsNew}
									<!--<li class="product_mark product_new">New</li>-->
									
								</ul>
								</a><a href="#" class="btn btn-primary">View</a>
							</div> `;
							
    
							
							
    });
});

});
