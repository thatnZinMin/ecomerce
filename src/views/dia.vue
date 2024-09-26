<template>
    <div class="main-bor">
    

        <div class="porbor">
          <div class="onebor">
            <!-- <img src="/src/views/image/image 37 (1).png" alt="watch" style="background-color: #F1DDC9;padding:17px"> -->
           <div class="lat">
            <P>Way Kambas Mini Ebony</P>
            <p>Rp 1.280.000</p>
            <h3>Rp 1.024.000</h3>
            <p>Custom Engrave</p>
            <p>“Happy | Birthday | from”</p>
           </div>
          </div>
           <div class="twobor ">
           <div class="layll">
           <p>Choose Courier</p>
            <select id="courier" name="courier">
                <option value="dhl">DHL</option>
                <option value="fedex">FedEx</option>
                <option value="ups">UPS</option>
            </select>
        </div>
            <div class="btn-lay1" style="display:inline-flex;">
                <button @click="decrease"  class="btn-ch1">-</button>
                <p style="padding:4px">1</p>
                 <button   @click="increase" class="btn-ch2">+</button>
                 <p>Rp 2.048.000</p>
    
                  <img src="" alt="">
                 
            </div>
                
           </div>
           
        </div>
       <hr style="width:1100px;margin-left:40px;background-color:#333">
        <div class="porbor">
          <div class="onebor">
            <img src="/src/views/image/image 37 (1).png" alt="watch" style="background-color: #F1DDC9;padding:17px">
           <div class="lat">
           <p>Sikka (Ebony & Maple)</p>
           <h3>Rp 1.264.000</h3>
           </div>
          </div>
           <div class="twobor ">
           <div class="layll">
           <p>Choose Courier</p>
            <select id="courier" name="courier">
                <option value="dhl">D</option>
                <option value="fedex">FedEx</option>
                <option value="ups">UPS</option>
            </select>
        </div>
            <div class="btn-lay1" style="display:inline-flex;">
                <button  class="btn-ch1">-</button>
                <p style="padding:4px">2</p>
                 <button class="btn-ch2">+</button>
                 <p>Rp 2.048.000</p>
    
                  <img src="" alt="">
                 
            </div>
                
           </div>
           
        </div>
        <hr style="width:1100px;margin-left:40px;background-color:#333">
    
        <div class="bor-last">
          <div class="bbl">
            <div class="bbla">
            <p>Kode Promo</p>
            <input type="text" id="indo" name="indo" placeholder="INDONESIA" >
    <p>35% OFF</p>
    </div>
    <div class="bbe">
    <p style="">Rp 3.312.000</p>
    <h3>Rp 2.152.000</h3>
    </div>
          </div>
          <div class="ch-bwn"> 
            <button class="bwn"><p style=" font-weight: lighter;font-size:18px">Checkout</p></button>
          </div>
    
        </div>
     </div>
</template>
<script>
export default {
  data() {
    return{
      count:0,
    };
  },
  methods : {
    increase(){
      this.count++;
    },
    decrease(){
      this.count--;
    }
  }
}
</script>
<style scoped>
.main-bor{
    display: grid;
    gap: 10px;
    align-items: center;
  justify-content: center;
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
   .bbla{
     display: inline-flex;
     gap:20px
   }
   .bbl{
     display: flex;
     justify-content: center;
     gap: 450px;
    
 
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