<template>
    <body>
      
          <header>
              <nav>
                  <div class="logo">
                    <router-link to="/image" ><img src="/src/views/image/image 5.png" alt="logo" ></router-link>
                  </div>
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
              <div class="cover-container" style="height: 100vh;margin-top: 80px;">
                  <div class="cover-containermain">
                  <div class="main-container" style="width:1110px;height: 500px;background: #F1DDC9;display: flex;position: relative;">
                      <div class="container1" style="height:467px ;width:325px ;display: flex;position: absolute;left: 10px;top:200px ;">
                          <img src="../views/image/image 6 (1).png" alt="watch">
                      </div>
                      <div class="container2" style="display: grid;align-items: center;padding-left: 470px;justify-items: center;">
                          <div class="tittle" style="padding-top:60px ;">
                          <h1 style="padding-right:200px;font-size:48px">WAY KAMBAS<br>
                              MINI EBONY</h1>
                          
                      </div>
                      <div class="ple" style="width:500px ;height:120px;letter-spacing: 3%;line-height: 27px;padding-top: 28px;">
                          <p style="font-size: 16px ;padding-right:150px;width:610px ">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                      </div>
                      <div class="Dis" style="display:inline-flex;padding-right:400px;margin-bottom:40px">
                          <p style="border:1px solid #333;border-top:none;border-left:none;border-right:none;padding-right:14px" ><strong>Discover</strong></p>
                         
                      </div>
                      <div class="btn" style="display: flex;gap: 30px;; margin-bottom: 60px;margin-right:130px;">
                        
                            <button class="btn1" style="height:62px ;width:208px ;display: flex;align-items: center;"><img src="/src/views/image/add-cart (1).png" alt="addcart"><p style="font-size: 20px;">Add to cart</p></button>
                      
                          <button  class="btn2" style="height:62px ;width:104px ;"><img src="/src/views/image/logo-cicil-white 1.png" alt="cli"></button>
                      </div>
                      <div class="btn-Arr" style="display: flex;gap: 15px;position: absolute; right: 70px;top: 469px;">
                          
                        <button class="Arr1">＜</button>
                        <RouterLink to="/search">
                          <button class="Arr2">＞</button>
                        </RouterLink>
                      </div>
                      </div>
                  </div>
                  </div>
  
                  </div>
                  <section>
                      <div class="covercontainer" >
                      <div class="section-box" style=" display: flex;margin-bottom:20px;gap:50px;" >
                          <div class="msection-box1" style="width: 540px;height: 270px;border: 1px solid#000;background-color: #ffff;border:none;">
                              <div class="mbox1" style="margin: 30px;line-height: 30px;">
                              <h2>Luxurious Eyewear</h2>
                              <p style="line-height: 24px;font-size: 16px;">See the beauty of exotic world with the luxurious glasses</p>
                              <p><strong>Discovered Now</strong></p>
                           </div>
                           <div class="swatch1" style="display: flex;margin-left: 300px;">
                              <img src="/src/views/image/image 7.png" alt="watch" style="height:120px ;width: 180px;">
  
                           </div>
                          </div>
                          <div class="msection-box2" style="width: 540px;height: 270px;border: 1px solid#000;background-color: #ffff;line-height: 30px;border:none;">
                              <div class="mbox1-2" style="margin: 30px;">
                              <h2>Comfortable Watches</h2>
                              <p style="line-height: 24px;font-size: 16px;">Feels the balancing function and beauty in our wooden watches</p>
                              <p><strong>Discovered Now</strong></p>
                           </div>
                           <div class="swatch2-2">
                              <img src="/src/views/image/image 8.png" alt="watch" style="height: 120px;width: 180px;margin-left: 330px;">
  
                           </div>
                          </div>
  
                      </div>
                  </div>
                  <div class="lesec">
                  <div class="seaction-main" style="width: 1200px;padding:100px 10px">
                  <div class="molt" style="display: flex;padding-bottom: 30px;padding-right:130px ;"><h3 style="text-decoration: underline;display: flex;margin-left: 30px;;">Monthly  Deals</h3>
                      
                  </div>
                  <div class="seaction1" style="display: flex;gap:20px;">
                      <div class="img-section" style="display: flex;width: 255px;height: 381px;justify-content: center; ">
                          <div class="img-section" style="background-color: #ffff;display:flex;justify-content: center; ">
                          <div class="img-4se" style="display: grid;line-height: 25px;gap: 10px;" >
                              <img src="/src/views/image/Mask Group (7).png" alt="watch" style="width: 207px;height: 221px;">
                              <div class="leo1" style="display: grid;margin-right:130px ; "><h4 style="display: flex;margin-left: 15px">Singo Maple</h4>
                              <p>20% Off</p>
                          <p>Rp 1.500.000</p>
                      </div>
  
                      <div class="heartmain-1" style="display: flex;gap: 10px;">  
                           
                           <div class="heart-1" style="display: flex;color:none;font-size: 24px;border: 1px red"><button style="background-color:#ffff;border: 1px solid #D84727;height:39px ;"><img src="c:\Users\User\Desktop\ecomerce\src\views\image\love.png" alt="heart"></button></div>
                           <div class="heart-btn1" style="display: flex;width: 158px;height: 39px;border: 1px solid #D84727;background-color: #D84727;align-items: center;justify-content: center;">
                               <p>Add to cart</p>
  
                           </div>
                     
                   </div>
                          </div>
                      </div>
                      </div>
                      <div class="img-section" style="width: 255px;height: 381px;background-color: #ffff; border:none;">
                          <div class="img-2se" style="display: grid;line-height: 25px;gap: 10px" >
                              <img src="/src/views/image\Mask Group (6).png" alt="watch" style="width: 207px;height: 221px;">
                              <div class="leo1" style="display: grid;margin-right:140px ; "><h4>Singo Ebony</h4>
                            <p>20% Off</p>
                          <p>Rp 1.500.000</p>
                      </div>
  
                      <div class="heartmain-1" style="display: flex;gap: 10px;">  
                           
                           <div class="heart-1" style="display: flex;color:none;font-size: 24px;border: 1px red"><button style="background-color:#ffff;border: 1px solid #D84727;height:39px ;"><img src="c:\Users\User\Desktop\ecomerce\src\views\image\love.png" alt="heart"></button></div>
                           <div class="heart-btn1" style="display: flex;width: 158px;height: 39px;border: 1px solid #D84727;background-color: #D84727;align-items: center;justify-content: center;">
                               <p>Add to cart</p>

                           </div>
                     
                   </div>
                      
                          </div>
                      </div>
                      <div class="img-section" style="width: 255px;height: 381px;background-color: #ffff; ">
                          <div class="img-3se" style="display: grid;line-height:  25px;gap: 10px;" >
                              <img src="/src/views/image/Mask Group (8).png" alt="watch" style="width: 207px;height: 221px;">
                              <div class="leo1" style="display: grid;margin-right:140px ; "><h4>Rakai Ebony</h4>
                              <p>20% Off</p>
                          <p>Rp 1.500.000</p>
                      </div>
  
                      <div class="heartmain-1" style="display: flex;gap: 10px;">  
                           
                           <div class="heart-1" style="display: flex;color:none;font-size: 24px;border: 1px red"><button style="background-color:#ffff;border: 1px solid #D84727;height:39px ;"><img src="\src\views\image\love.png" alt="heart"></button></div>
                           <div class="heart-btn1" style="display: flex;width: 158px;height: 39px;border: 1px solid #D84727;background-color: #D84727;align-items: center;justify-content: center;">
                               <p>Add to cart</p>
  
                           </div>
                     
                   </div>
                          </div>
                      </div>
                      <div class="img-section" style="width: 255px;height: 381px;background-color: #ffff; ">
                        <div class="img-3se" style="display: grid;line-height:  25px;gap: 10px;" >
                            <img src="/src/views/image/Mask Group (9).png" alt="watch" style="width: 207px;height: 221px;">
                            <div class="leo1" style="display: grid;margin-right:140px ; "><h4>Rakai Ebony</h4>
                            <p>20% Off</p>
                        <p>Rp 1.500.000</p>
                    </div>

                    <div class="heartmain-1" style="display: flex;gap: 10px;">  
                         
                         <div class="heart-1" style="display: flex;color:none;font-size: 24px;border: 1px red"><button style="background-color:#ffff;border: 1px solid #D84727;height:39px ;"><img src="/src/views/image/love.png" alt="heart"></button></div>
                         <div class="heart-btn1" style="display: flex;width: 158px;height: 39px;border: 1px solid #D84727;background-color: #D84727;align-items: center;justify-content: center;">
                             <p>Add to cart</p>

                         </div>
                   
                 </div>
                        </div>
                    </div>
  
                  </div>
                  </div>
                  </div>
                  <div class="section2-main" style=" height: 100vh; ">
                  <div class="rec" style="display:flex; margin-right: 1000px;margin-bottom: 100px;">
                      <h2 style="text-decoration: underline;">Recent News</h2>
                  </div>
                  <div class="where-lay" style="display: flex;  justify-content: center; ">
                  
                  <div class="wher-1" style="margin-top: 200px;line-height: 40px;padding-right:300px">
                      <p>Where To Travel</p>
                      <h2 style="width: 300px;">Matoa Where To Travel? Yogyakarta</h2>
                      <button class="wherebtn">Discover</button>
                  </div>
                  <div class="wher-2" style="padding-bottom:500px">
                      <div class="bg" style="height: 500px;width: 500px;background-color: #F1DDC9;position: relative;margin-bottom:300px">
                      <img src="/src/views/image/image 13.png" alt="pho" style="height:500px;width:500px;position: absolute;top: 70px;right: 130px;">
                      </div>
                  </div>
                  </div>
                  </div>
  
                  <div class="allsec" style="height: 100vh;">
                      <div class="alls" style="display:flex ; justify-content:center;gap:80px">
                          <div class="all-1" style="display: grid ; gap:80px;">
                              <h2>Maple Series</h2>
                              <div class="all1-lo" style="display: flex; gap: 50px;">
                                  <img src="/src/views/image/image 15.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div class="padding" style="display:grid">
                                  <P style="width:100px">Way Kambas Maple</P>
                                  <h3>Rp 1.280.000</h3>
                                  </div>
                              </div>
                              
                              <div class="all1-lo" style="display: flex; gap: 50px">
                                  <img src="/src/views/image/image 21.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div class="padding1"  style="display:grid">
                                  <P style="width:100px">Kaili</P>
                                  <h3>Rp 950.000</h3>
                                  </div>
                              </div>
                              
                              <div class="all1-lo" style="display: flex; gap: 50px">
                                  <img src="/src/views/image/image 16 (1).png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div class="padding2" style="display: grid;">
                                      <p style="width:100px">Sunda</p>
                                  <h3>Rp 1.170.000</h3>
                                  </div>
                              </div>
                              </div>
                          <div class="all-1" style="display: grid ; gap: 80px;">
                              <h2>Ebony Series</h2>
                              <div class="all1-lo" style="display: flex; gap: 50px;">
                                  
                                  <img src="/src/views/image/image 20.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div class="padding3" style="display:grid;">
                                  <P style="width:100px">Tomia Ebony</P>
                                  <p style="font-size: 14px;">Rp 1.280.000</p>
                                  <h3>Rp 960.000</h3>
                                  </div>
                              </div>
                              
                              <div class="all1-lo" style="display: flex; gap: 50px;">
                                  <img src="/src/views/image/image 22.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div class="padding4" style="display:grid">
                                  <P style="width:100px">Mori</P>
                                  <h3>Rp 950.000</h3>
                                  </div>
                              </div>
                              
                              <div class="all1-lo" style="display: flex;  gap: 50px;">
                                  <img src="/src/views/image/image 23.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <div>
                                  <P style="width:100px">Lorem ipsum dolor sit amet, consectetur?</P>
                                  </div>
                              </div>
                              </div>
                              <div class="all-1" style="display: grid ; gap: 80px;">
                              <h2 >Featured</h2>
                              <div class="all1-lo" style="display: flex;  gap: 50px;">
                                  <img src="/src/views/image/image 17.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <P style="width:100px">Lorem ipsum dolor sit amet, consectetur?</P>
                              </div>
                              
                              <div class="all1-lo" style="display: flex;  gap: 50px;">
                                  <img src="/src/views/image/image 18.png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <P style="width:100px">Lorem ipsum dolor sit amet, consectetur?</P>
                              </div>
                              
                              <div class="all1-lo" style="display: flex;  gap: 50px;">
                                  <img src="/src/views/image/image 19 (1).png" alt="ph" style="height: 100px;width: 100px;background-color:#F1DDC9">
                                  <P style="width:100px">Lorem ipsum dolor sit amet, consectetur?</P>
                              </div>
                              </div>
                      </div>
                      <div class="btn-alls">


                      
                        <button  class="btnlev" ><p>See More</p></button>
                                  
                              </div>
  
                  </div>
              
                  <div class="section2-main" style=" height: 100vh; ">
                  <div class="where-lay" style="display: flex;  justify-content: center;padding:50px 0px;gap:300px; flex-direction: row-reverse;
    ">
                  
                  <div class="wher-1" style="margin-top: 200px;line-height: 40px;">
                    <h1 style="font-size:34px;"> <span style="border:1px solid #000;border-top:none;border-left:none;border-right:none;">Test</span>imonials</h1>
                      <p style="line-height:30px;font-size:16px;padding-top:50px">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                   <h4 style="font-size:20px;padding-top:30px;margin-top:50px">Gita Savitri</h4>
                   <p >Content Creator/Influencer</p>
                     
                  </div>
                  <div class="wher-2">
                      <div class="bg" style="height: 500px;width: 500px;background-color: #F1DDC9;position: relative;">
                      <img src="/src/views/image/Mask Group (11).png" alt="pho" style="height:500px;width:500px;position: absolute;top: 70px;left: 130px;">
                      </div>
                  </div>
                  </div>
                  <div class="test-btn"><a href="#" style="text-decoration: none;color: #000;">← →</a></div>
                  </div>
  
                  <div class="indtergram" style="display: grid;width: 1200px;gap: 50px;height:100px">
                    <h2 style="display: flex;padding-left: 200px"><span style="border:1px solid #000;border-top:none;border-right:none;border-left:none;">Inster</span>gram</h2>
                    <div class="llgg">
                      
                      <div class="ig-img" style="display: flex;justify-content: center;padding-left:200px; ">
                          <img src="/src/views/image/Rectangle 38.png" alt="ph1" style="width: 200px;height: 200px;">
                          <img src="/src/views/image/Rectangle 39.png" alt="ph1" style="width: 200px;height: 200px;">
                          <img src="/src/views/image/Rectangle 40 (1).png" alt="ph1" style="width: 200px;height: 200px;">
                          <img src="/src/views/image/Rectangle 41.png" alt="ph1" style="width: 200px;height: 200px;">
                          <img src="/src/views/image/Rectangle 42.png" alt="ph1" style="width: 200px;height: 200px;">
                      </div>
                    </div>
                  </div>
                  </section>
                         </main> 
                                         <Footer/>

      </body>

  </template>

<script>
import { RouterLink } from 'vue-router';

import Footer from '../views/footer.vue'
  export default{
    components: {
        Footer
  },
  }




</script>

<style scoped>
.cover-container{
  display: flex;
  justify-content: center;
}
.cover-containermain{
    display: flex;
}
.covercontainer{
    display: flex;
    justify-content: center;
    
}
body{
    background-color: #F7F6F4;

}
header{
   display: flex;
   justify-content: center;
}
.seaction-main{
    display:grid ;

}
.lesec{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left:100px;

}
.allsec{
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 80px 10px;
}
.btn-alls{
   display: flex;
   justify-content: center;
   padding-left:430px;
   padding-top: 70px;
  
  }
 
  .btn-alls{  display: inline-block;
    position: relative;
    color :#D84727;
    cursor: pointer;
    transition: 0.4s all ease;
  }
.btn-alls:hover{
    color: #000000;
    transition: 0.4s all ease;
  }
.btn-alls:after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }
.btn-alls:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
.llgg{
    display:flex;
    justify-content: center;
}
footer{
    margin-top: 300px;
}
.wherebtn{
    width: 160px;
    height: 58px;
    color: #D84727;
    border: 1px solid #D84727;
    margin-top: 30px;
    background-color: #F7F6F4;

}

.wherebtn:hover{
    width: 160px;
    height: 58px;
    margin-top: 30px;
    border: 1px solid #D84727;
    color:#000 ;
    background-color:#D84727 ;
}
.wher-1{
  
}
</style>