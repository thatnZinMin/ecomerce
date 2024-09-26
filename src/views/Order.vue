<template>
    <body>
    <header>
        <nav>
          
        <div class="nav-bar" style="display:flex;height: 100px;width: 700px; justify-content: space-around;align-items: center;  " >  
            <ul style="display: flex; list-style-type: none;justify-content: space-around;height: 120px;width: 600px;align-items: center; ">
<li><a href="#watches">Watches</a></li>
<li> <a href="#Eyewear">Eyewear</a></li>
<Router-link to="/">
<li><a href="#Accessories">Accessories</a></li>
</Router-link>
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
    <img src="/src/views/image/cart.png" alt="cart" class="img-o" style="">
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
                    <img src="/src/views/image/checkout (1).png" alt="cl">
                    <p style="width :320px">1. Checkout</p>
                   </div>
                </Router-link>

                    <span style="padding-top:50px;">_____</span>
                <Router-link to="/d">
                    <div class="llly2">
                        <img src="/src/views/image/payment (2).png" alt="cl">
                        <p style="width :320px">2. Payment </p>
                       </div>
                    </Router-link>
                        <span  style="padding-top:50px;">_____</span>
                    <Router-link to="/co">
                        <div class="llly2">
                            <img src="/src/views/image/confirm (4).png" alt="cl">
                            <p style="width :320px"> 3. Confirmation</p>
                           </div>
                        </Router-link>
            </div>


<div class="sectionmains">
    <div class="order-summary">
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
        <div class="order-row total">
            <span>Grand Total</span>
            <span>Rp 2.702.000</span>
        </div>
    </div>


    <div class="checkout-form">
        <h2>Billing Address</h2>
        <form action="#" method="post">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Ex: Rasyidin Arsyad Nasution" required>

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Ex: rasyid.arsyad@gmail.com" required>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Ex: 089111888999" required>

            <h2>Shipping Address</h2>

            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman" required>

            <label for="country">Country</label>
            <input type="text" id="country" name="country" placeholder="Ex: United States of America (USA)" required>

            <label for="state">State/Province</label>
            <input type="text" id="state" name="state" placeholder="Ex: California" required>

            <label for="city">City</label>
            <input type="text" id="city" name="city" placeholder="Ex: San Francisco" required>

            <label for="zipcode">Zip Code</label>
            <input type="text" id="zipcode" name="zipcode" placeholder="Ex: 94024" required>

            <label for="courier">Choose Courier</label>
            <select id="courier" name="courier">
                <option value="dhl">DHL</option>
                <option value="fedex">FedEx</option>
                <option value="ups">UPS</option>
            </select>

            <div class="buttons">
                <Router-link to="/"><button type="button" class="btn-continue">Continue Shopping</button> </Router-link>
            <RouterLink to="/co">
                <button type="submit" class="btn-order">Place My Order</button>
            </RouterLink>
            </div>
        </form>
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
.order-summary {
    background-color: #fff;
    padding: 20px;
    border-radius: 2px;
    
    width: 500px;
    height: 350px;
   
}
.sectionmains{
    display: flex;
    justify-content: center;
    gap: 100px;
    padding-top: 30px;

}
header{
    display: flex;
    justify-content: center;
 }
.order-summary h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
}
.sectionmain{
    padding-top:50px;
}
.order-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #555;
}

.order-row.total {
    font-weight: bold;
    border-top: 1px solid #ddd;
    padding-top: 15px;
    margin-top: 10px;
    color: #000;
}
.flex{
    display:flex;
   justify-content: center;
}
.order-row span {
    flex-basis: 50%;
}

.order-row.total span:last-child {
    color: #e74c3c;
}
.section1 {
    display: inline-flex;
    gap :6px;
}
.checkout-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 2px;
  
    width: 500px;
    height: 1000px;
}

.checkout-form h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
}

.checkout-form label {
    font-size: 1rem;
    color: #555;
    margin-bottom: 5px;
    display: block;
}

.checkout-form input,
.checkout-form select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ddd;
    font-size: 1rem;
    color: #333;
}

.checkout-form input::placeholder {
    color: #888;
}

.checkout-form .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn-continue, .btn-order {
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #e74c3c;
    border-radius: 5px;
    cursor: pointer;
}

.btn-continue {
    background-color: #F7F6F4;
    color:#e74c3c;
  
}

.btn-order {
    background-color: #e74c3c;
    color: #fff;
 
}

.btn-continue:hover {
    background-color:#2ecc71 ;
    color: #fff;
    border: none;
}

.btn-order:hover {
    background-color: #2ecc71;
    border-color: #2ecc71;
}
body{
    background-color: #F7F6F4;
 }
 header{
    display: flex;
    justify-content: center;
 }
 
</style>