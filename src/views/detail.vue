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
    <img src="/src/views/image/search (1).png" alt="search" style="height:32px;width: 32px;">
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

    
    <main>
        <section id="section-1">
            <div class="section1 ">
            <Router-link to="/or">
                <div class="llly2">
                    <img src="c:\Users\User\Desktop\ecomerce\checkout.png" alt="cl">
                    <p style="width :320px">1. Checkout</p>
                   </div>
                </Router-link>
                    <span style="padding-top: 50px;">_____</span>
                <Router-link to="/d">
                    <div class="llly2">
                        <img src="c:\Users\User\Desktop\ecomerce\payment (3).png" alt="cl">
                        <p style="width :320px">2. Payment </p>
                       </div>
                    </Router-link>
                        <span style="padding-top: 50px;">_____</span>
                    <Router-link to="/co">
                        <div class="llly2">
                            <img src="c:\Users\User\Desktop\ecomerce\confirm (3).png" alt="cl">
                            <p style="width :320px">3. Confirmation</p>
                           </div>
                        </Router-link>


            </div>

           <div class="lay-main">
            <div class="section2 ">
                <div class="order-summarylay">
                    <h2>Detail Order</h2>
                    <div class="order-row">
                        <span>Subtotal</span>
                        <span>Rp 2.152.000</span>
                    </div>
                    <div class="order-row">
                        <span>Shipping Cost</span>
                        <span>Rp 500.000</span>
                    </div>
                    <div class="order-row">
                        <span>Promo Code</span>
                        <span>INDONESIA</span>
                    </div>
                    <div class="order-row">
                        <span>Packaging</span>
                        <span>Rp 50.000</span>
                    </div>
                    <div class="order-row-total ">
                        <span>Grand Total</span>
                        <span style="color: black;font-size:20px;">Rp 2.702.000</span>
                    </div>
                </div>
              
    

               </div>
               <div class="section3">
                <h3 style="padding:25px 20px;">Order Detail</h3>
                <div class="three ">
                <div class="s3con1">
                    <p>Order Number</p>
                    <p style="padding-top:20px;margin-top:10px">Purchase Date</p>
                    <p style="margin-bottom:50px">Items</p>
                    <p style="padding-top:21px;margin-top:10px">Name</p>
                    <p style="padding-bottom:10px">Phone</p>
                    <p>Email</p>
                    <p style="width:130px">Shipping Address</p>

                </div>
                <div class="s3con2">
                    <p>MTAWEB-3A86D4DB <br><span style="color:#777777;font-size:14px">Always remember Order Number for easy tracking</span></p>
                    <p>2019-11-07 14:01:48</p>
                    <p>Way Kambas Mini Ebony <br><span style="color:#777777;font-size:14px">2 x IDR 1.024.000</span></p>
                    <p>Sikka (Ebony & Mapple) <br><span style="color:#777777;font-size:14px">1 x IDR 1.264.000</span></p>
                    <p>Rasyidin Arsyad Nasution</p>
                    <p>+18911188899</p>
                    <p>rasyid.arsyad@gmail.com</p>
                    <p>18 Richardson Drive
                        Fountain Valley, CA 92708</p>

                </div>
                </div>
                
            </div>  
            </div>  
            <div class="main-past">
            <div class="past">
                <div class="past-1">
                <h5 style="padding-top:20px">Payment Detail</h5>
                <p  style="padding-top:20px">11:55:55</p>
                </div>
                <p >Please make a payment according with the limit time specified, starting from now</p>
               </div>     
            </div>
            
     
           
        
         
            <div class="container-main ">
                <div class="s3lay">
                <div class="tit">
                    <h2 style="padding-bottom:50px;font-size:24px,">Payment Method</h2>
                    </div>
               <div class="grid ">
                    <div class="item-1">   
                        <div class="cell"><input type="radio"><p>BNI Cicilan 0%</p></div>
                        <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 46.png">
                        </div>
                    <div class="item">  
                        <div class="cell"> <input type="radio">
                        <p>Mandiri Cicilan 0%</p></div>
                        <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 38.png" alt="img"></div>
                    <div class="item">  <div class="cell"> <input type="radio"><p>Bank Transfer</p></div>
                    <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 45.png" alt="img">
                </div>
                    <div class="in1">   <div class="cell"><input type="radio"><p>Credit Card</p>
                    <img src="" alt=""></div>
                    <div class="djff" style="display:flex;">
                <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 44.png" alt="img"><img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 37 (2).png" alt="img"></div></div>
              
                    <div class="item"> <div class="cell"> <input type="radio"><p>Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</p></div>
                    <div class="djffs" style="display:inline-flex;gap:20px;">  <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 43.png" alt="img"><img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 40 (1).png" alt="img"><img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 42.png" alt="img"></div></div>
                    <div class="itemsc" style="">  <div class="celll"> <input type="radio"><p>GO-PAY</p></div> <img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 41 (1).png" alt=""></div>
                    <div class="item"> <div class="celll"> <input type="radio"><p>Krdivo</p></div><img src="c:\Users\User\Desktop\ecomerce\src\views\image\image 39.png" alt="img"></div>
                    
               </div>
              
            
                </div>
               

            </div>
            <Router-link to="/or">
            <button class="btnit">
                <p>Proceed Payment</p>

            </button>
        </Router-link>

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


<style>
.celll{
    display: flex;
    align-content:center ;
}
.order-summarylay {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    width: 360px;
    height: 300px;
    line-height: 28px;
   
}
.section1{
    display: flex;
  justify-content: space-evenly;
   
    
   background-color: #F7F6F4;
   
}
.llly2{
    display: grid;
    padding: 0px 10px;
    width: 100px;
   
}

.btnit{
    position: absolute;
   
    background-color:#d84729 ;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 10px 10px;
    border: none;
    right: 120px;
    top: 90rem;
    margin-bottom: 10px;
}
footer{
    margin-top:30px ;
}
.btnit:hover{
    position: absolute;
    background-color:#2ecc71 ;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 10px 10px;
    border: none;
    right: 120px;
   
   
   
    
}
.s3lay{
    background-color: #ffffff;
   height: 550px;
   width: 1100px;
 margin-bottom: 100px;
   display:grid;
   align-items: center
   

}
.tit{
    padding: 15px 50px ;
    display: inline-flex;
}
.grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
   gap:70px;
   align-items: center;
   padding-bottom:70px;
   padding-left: 50px;
   
   
}
.cell{
    display: inline-flex;
    gap: 10px;
}

.item:nth-child(5) {
    grid-column: 1 / span 2; 
}

.item:nth-child(6), .item:nth-child(7) {
    grid-column: span 1; }
.grid--1--cols{
    grid-template-columns: 1fr;
}
.grid--2--cols{
    grid-template-columns: repeat(2,1fr);
}
.grid--3--cols{
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto; 
}
.grid--4--cols{
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: -1;
}
.section1{
    display: flex;
    justify-content: center;
   padding: 20px 450px;
   gap :3px;
    
}
.container-main{
 margin-top: 100px;
    
    display: flex;
    align-items: center;
    justify-content: center;
   
}

#section-1{
    padding: 10px 30px;
    

}

body{
    background-color: #F7F6F4;
}

.section2{
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 40px 50px;
    gap :20px;
    

}
header{
    display: flex;
    justify-content: center;
 }
.section3{
   
    background-color: #ffffff;
    height: 400px;
    width: 500px;
    margin-top: 100px;
}

 body{
    background-color: #F7F6F4;
 }
 .con-box1{
    display: inline-flex;
    gap: 50px;
    line-height: 30px;
   
 }
.hr{
    padding: 10px 0;
    display: inline-flex;
    gap:50px;
    margin-top: 20px;
    position: relative;
}
.past{
    display: grid;
   justify-content: center;
    background-color: #ffffff;
    width: 360px;
    height: 140px;
    padding: 0 10px;
   
   
   
}
.past-1{
    display: flex;
   justify-content: center;
    gap :180px;
   
}




.lay-main{
    display: flex;
    justify-content: center;
}
.main-past{
    display: flex;
    position: absolute;
    left: 250px;
    top: 690px;
    align-items: center;
    
}
.tit{
    

}

.three{
    display:inline-flex;
    gap: 10px;
    padding: 0px 40px;
    line-height: 20px;
}
.s3con1{
    line-height: 27px;
}
.s3con2{
    line-height: 24px;
}
.section1 p{
    color: black;
    
}
.section1 p:hover{
    color:#d84729;
    
}
.order-row-total{
display: flex;
gap: 40px;
    padding-top: 10px;
    border-top: 1px solid #333;
    margin-top: 10px;

}
</style>
