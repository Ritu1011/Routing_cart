function Footer(){
    return (
        <>
          <div id="footerMain">
     <div id="footerTop">
        <div id="serverBox">
            <div>
           <h2  className="h2">Client Service</h2>
                 <ul  className="list">
                        <li>My Account</li>
                        <li>Track My Order</li>
                        <li>Returns &amp; Exchanges</li>
                        <li>shipShipping &amp; Payments</li>
                        <li>Size &amp; Alterations</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                        </ul>
                </div>
            </div>
            <div id="connectBox">
                <div  className="box">
                    <h2  className="h2">Connect</h2>
                    <ul className="list">
                        <li>
                            For international orders, please click here</li>
                    </ul>
                </div>
                <div className="box">
                    <h2 className="h2">Shop</h2>
                    <ul className="list">
                        <li>New Arrivals</li>
                        <li>Women</li>
                        <li>Men</li>
                      
                    </ul>
                </div>
            </div>
         <div id="singUpBox">
        <div id="upperBox">
<h2 className="h2">Email Sign-Up</h2>
<div id="fOrder">Sign upto receive our latest updates and enjoy 20% off your first order.</div>
<div id="myForm">
    <div id="forEmail">
   
        <input id="input1" type="text" placeholder="Enter Email Address" />
    </div>
    <div id="forCheckBox">
        <div id="checkboxBox">
            <input  id="checkbox" type="checkbox" />
        </div>
        <div id="containt">
            By entering your information above, you agree to receive emails about our latest collections exclusive offers, and more. You can withdraw your consent at any time. Read our Privacy Policy. for more details. Offer Valid in the U.S. only. Not valid for existing email subscribers. Exclusions apply.
        </div>
        
    </div>
    <button id="button"><h5 id="subscribe">SUBSCRIBE</h5></button>
</div>
            
     </div>
            
         </div>
        </div>
        <hr />
        <div id="footerBottom">
            <div id="fb">
                    <div className="fb1">© 2021 Theory</div>
                    <div className="fb1">Terms of Use
                    </div>
                    <div className="fb1">Privacy Policy</div>
                    <div className="fb1">Exclusions
                    </div>
                    <div className="fb1">Site Map</div>
            </div>
        </div>
         
     </div>
    

        </>
    )
}

export default Footer