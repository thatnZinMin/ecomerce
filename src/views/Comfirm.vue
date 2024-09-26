<template>
    <body>
        
   
    <header>
        <nav>
          
        <div class="nav-bar" style="display:flex;height: 100px;width: 700px; justify-content: space-around;align-items: center;  " >  
            <ul style="display: flex; list-style-type: none;justify-content: space-around;height: 120px;width: 600px;align-items: center; ">
<li><a href="#watches">Watches</a></li>
<li> <a href="#Eyewear">Eyewear</a></li>
<li><a href="#Accessories">Accessories</a></li>
<li><a href="#News">News</a></li>
</ul>
</div>
<div class="icon-nav" style="display: flex;">
<div class="nav1" style="display: flex;justify-content: space-around;align-items: center;gap: 12px;">
<a href="#">
   
</a>
<a href="#">
    <img src="/src/views/image/user (1).png" alt="user" style="height: 24px;width: 24px;">
</a>
<a href="#login">login</a>
</div>
<div class="nav2" style="display: flex;">
<div class="img-oo">
<a href="#">
    <img src="/src/views/image/cart.png" alt="cart" class="img-o">
</a>
</div>
</div>
</div>
</nav>
    </header>

    
    <main id="mai">
        <section id="section-1">
         
            <div class="section1  ">
            <Router-link to="/or">
                <div class="llly2">
                    
                    <img src="/src/views/image/checkout.png" alt="cl">
                    <p style="width :320px">1. Checkout</p>
                   </div>
                </Router-link>

                    <span>_____</span>
                    <Router-link to="/d">
                    <div class="llly2">
                       
                        <img src="/src/views/image/payment.png" alt="cl">
                        <p style="width :320px">2. Payment </p>
                      
                       </div>
                         </Router-link>
    
                        <span>_____</span>
                    <Router-link to="/co">
                        <div class="llly2">
                            <img src="/src/views/image/confirm.png" alt="cl">
                            <p style="width :320px"> 3. Confirmation</p>
                           </div>
                        </Router-link>

            </div>
            <div class="section2 gridonly">
                <div class="paly1">
                    <img src="/src/views/image/undraw_completing_6bhr 1.png" alt="ph">
                    <p style="font-size: 24px;color:#333333">Order Confirmed</p>
                    <p style="">Your order have been confirmed, please wait and</p>
                    <p style="padding-bottom:20px;">track your order</p>
                <RouterLink to="/d">
                    <button class="paly-btn"><p>Go to track page</p></button>
                </RouterLink>
                </div>
                <div class="paly2">
                    <div class="order-summary-pl">
                      
                        <div class="shipping-info">
                            <div class="div1">
                            <img src="/src/views/image/time.png" alt="time">
                           <p> 10 days Delivery Time</p>
                          </div>
                          <div class="div1">
                           <img src="/src/views/image/courier (1).png" alt="car">
                            <p> DHL Express  </p>
                            </div>
                        </div>
                
                      
                        <div class="items">
                            <p>Way Kambas Mini Ebony<br>  2 x IDR 1.024.000 <br>
                            Sikka (Ebony & Maple) <br>1 x IDR 1.264.000</p>
                        </div>
                
                        <!-- Price Details -->
                       
                        <div class="price-details">

                            <div class="detail-row">
                                <div class="ppl-1">
                                <span>Subtotal:</span>
                                <span>Shipping Cost:</span>
                                <span>Packaging:</span>
                            </div>
                            <div class="ppl-1">
                               
                                <span>Rp 2.152.000</span>
                                <span>Rp 500.000</span>
                                <span>Rp 50.000</span>
                            </div>
                               
                            </div>
                           
                            
                            <div class="grand-total">
                                <p>Grand Total</p>
                               <p> Rp 2.702.000</p>
                            </div>
                        </div>
                
                        <!-- Shipping Address -->
                        <h3>Shipping Address</h3>
                        <div class="shipping-address">
                            <p>18 Richardson Drive</p>
                            <p>Fountain Valley, CA 92708</p>
                        </div>
                    </div>

                </div>


            </div>
            </section>
            </main>

          
            
            
            <Footer/>
            
            
            
            
            
              
                  
            </body>
        </template>
<script>
  import Footer from './footer.vue';


export default{
    components : {
        Footer

    },

}
</script>
<style scoped>
.llly2{
    display: grid;
    
    
}
footer{
    margin-top: 500px;
}
.section1 span{
    padding-top: 40px;
    margin: 10px;
} 
    
.section1{
    display:flex;
    gap: 10px;
    
}
.ppl-1{
    display: grid;
    align-content: center;
    gap:10px
 
   
}
.gridonly{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.paly1{
    display: grid;
    align-items: center;
    line-height: 30px;
    background-color:#ffff ;
    height: 500px;
    width: 500px;
    padding: 70px 50px;
}
body{
    background:  #F7F6F4;
    
}
#mai{
   padding-top: 50px;
   display: grid;
   align-items: center;
   height: 500px;
   

}
.div1{
    display: inline-flex;
    align-items: center;
    gap: 10px;
}
.paly-btn{
    background-color:#D84727 ;
    width: 300px;
    height: 50px;
    border: none;
    color: #ffff;
}
.paly-btn:hover{
    background-color:#2ecc71 ;
    width: 300px;
    height: 50px;
    border: none;
    color: #ffff;
}
.order-summary-pl {
    background-color: white;
    padding: 10px 50px;
    border-radius: 8px;
    height: 500px;
    width: 500px;
    line-height: 30px;
}
.paly2{
    display: grid;
    align-items: center;
  
  
}

h2, h3 {
    margin-bottom: 15px;
    color: #333;
}

.shipping-info {
    display: inline-flex;
    margin-bottom: 20px;
    gap: 30px;
}

.items {
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
    line-height: 24px;
}

.items li {
    margin-bottom: 10px;
}

.price-details {
    margin-bottom: 20px;
}

.detail-row {
    display: flex;
    gap: 80px;
  padding-right: 20px;
  
 
   
    
}
.section2{
    padding-top: 100px;
    
}
.grand-total {
    display: inline-flex;
    gap: 70px;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
    border: 1px solid #333;
    border-left: none;
    border-right: none;
    padding: 10px;
    color: #333;
    width: 400px;
}

.shipping-address p {
    margin: 5px 0;
}
</style>