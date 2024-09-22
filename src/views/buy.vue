<template>

  <body>
   <div class="bulr">
    
    <header>
      
        <nav>
            <div class="logo">
              <img src="/src/views/image/image 5.png" alt="logo" >
            </div>
        <div class="nav-bar" style="display:flex;height: 100px;width: 700px; justify-content: space-around;align-items: center;  " >  
            <ul style="display: flex; list-style-type: none;justify-content: space-around;height: 120px;width: 600px;align-items: center; ">
<li><a href="#watches">Watches</a></li>
<li> <a href="#Eyewear">Eyewear</a></li>
<li><a href="#Accessories">Accessories</a></li>
<router-link to="/or" ><li><a href="#News">News</a></li>  </router-link>
</ul>
</div>
<div class="icon-nav" style="display: flex;position:relative;">
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
<div class="hpw" ><p>Home / Product / Watches / <span class="W2">Way Kambas Mini Ebony</span> </p></div>
</nav>
   </header>
    <main>
        <section >
        <div class="main-herocontainer grid-2--main"  >
            <div class="cl1-main">
                <div class="watches-colu">
                    <img src="c:\Users\User\Desktop\ecomerce\image 37.png" alt="watch">
                    <img src="c:\Users\User\Desktop\ecomerce\image-removebg-preview 1 (1).png" alt="watch">
                    <img src="c:\Users\User\Desktop\ecomerce\image-removebg-preview1 1.png" alt="watch">
                    <img src="c:\Users\User\Desktop\ecomerce\image-removebg-preview2 1.png" alt="watch">
                  
                </div>
                <img src="c:\Users\User\Desktop\ecomerce\image 6 (3).png" alt="watch" class="img-cl1">

            </div>
            <div class="cl2-main" >

                <div class="layout-cl2main" >
                  
                  
                <h1 style="padding-bottom:10px">WAY KAMBAS <br>
                    MINI EBONY</h1>
                <p>Rp 1.280.000</p>
                <h4>Rp 1.024.000</h4>
                <p><strong>Choose Model</strong></p>
               
                   
                <div class="cho">
                    <div class="ch1" style="border-radius:50%;"><img src="/src/views/image/ch1.png" alt="ch1img" style="height:30px;width:30px"></div>
                    <div class="ch2" style="border-radius:50%; "><img src="/src/views/image/ch2.png" alt="ch2img" style="height:30px;width:30px"></div>
                </div>
                <div class="btn-ch"  style="display: flex;padding-top:20px;gap:10px ">
                    <div class="btn-lay1" style="display:flex;">
                   <button  class="btn-ch1">-</button>
                   <p style="padding:4px">1</p>
                    <button class="btn-ch2">+</button>
                    </div>
                        <div class="btn-lay2" >
                            <!-- <Router-link to="/d">
                                <button class="btn1-s"><img src="/src/views/image/add-cart (1).png" alt="addcart"><p style="font-size: 16px;">Add to cart</p></button>
                              
                            </Router-link> -->
                            <v-dialog max-width="1200">
                                <template v-slot:activator="{ props: activatorProps }">
                                  <v-btn
                                    v-bind="activatorProps"
                                    color="surface-variant"
                                    text="Add to cart"
                                    variant="flat"
                                    class="dia-btn"
                                  ></v-btn>
                                </template>
                              
                                <template v-slot:default="{ isActive }">
                                  <v-card title="Dialog">
                                    <v-card-text>
                                      
                                      <Dial/>
                                      
                                    </v-card-text>
                              
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                              
                                      <v-btn
                                        text="Close Dialog"
                                        @click="isActive.value = false"
                                      ></v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </template>
                              </v-dialog>
                            <Router-link to="/search">
                              <button  class="btn2-s" ><img src="/src/views/image/logo-cicil-white 1.png" alt="cli"></button>
                            </Router-link>
                          </div>
                          
                </div>
                   
                </div>

            </div>
        

        </div>
        
            <div class="secontainer-1-grid">
                
                  <nav style="padding-right:200px;"> 
                    <ul>
                      <li><a href="#watches">Watches</a></li>
                      <li><a href="#Warranty">Warranty</a></li>
                      <li><a href="#Custom Engrave">Custom Engrave</a></li>
                      <li><a href="#How to Adjust">How to Adjust</a></li>
                      <li><a href="#How to Care">How to Care</a></li>
                      <li><a href="#Gallery">Gallery</a></li>
                    </ul>
                  </nav>
                  </div>
                  </section>
                  </main>
                  </div>
 
          

                  </body>


              

  </template>
  
  
  <script>
  
import Dial from './dia.vue'
export  default{
    components : {
        Dial
  },
}
 

  
  </script>
  
  <style scoped>
  .main-bor{
   display: grid;
   gap: 10px;
  }
  
  .porbor{
    display:flex;
    justify-content: center;
    gap: 500px;
  }
  .ch-bwn{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bor-last{
    display: grid;
gap:50px  ;
padding: 10px 5px;   

  }
  header{
    display: flex;
    justify-content: center;
 }
  .bbla{
    display: inline-flex;
    gap:20px
  }
  .bbl{
    display: flex;
    justify-content: center;
    gap: 450px;
   

  }
  .dia-btn{
    color: #fff;
    background-color: #D84727;
  }
.onebor{
  display: inline-flex;
  gap: 70px;
}
.bbe{
  display: inline-flex;
}
.twobor{
display: grid;
}
.chat-box{
 display: grid;
}
#indo{
  border: 1px solid #848484;
  
}
.btn2-s{
  display: inline-flex;
  align-items: center;
  width: 200px;
  height: 52px;
  background-color: #F1DDC9;
  justify-content: center;
 }
.bwn{
  background-color:#D84727;
  width: 1030px;
  color: white;
  height: 58px;
  align-items: center;
  justify-content: center;
}
.bwn:hover{
  background-color:#2ecc71;
  width: 1030px;
  color: white;
  height: 58px;
  align-items: center;
  justify-content: center;
 
}
</style>