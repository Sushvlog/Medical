import React from 'react'

function Home() {
  return (
    <>
    <div class="container" >
    <br></br>
  <div class="row sect">
  <div class=" col log-img ">
                    <img src="./pho/bg.png" alt="image" />
                </div>
                    <div class=" col"><h1>  Blood Test  @Home</h1> 
                    <i>counseling is to help the patient amplify the vision of the specific situation and discover the proper potential
                          in dealing with the conditions of disease, in order
                           to promote a better quality of life.</i>
                     </div>
                </div>
          <div className="sec1">
              <div className="agent">
                  <div className="para">
                   <h4>Medical Councling</h4>
                      <p>counseling is to help the patient amplify the vision of the specific situation and discover the proper potential
                          in dealing with the conditions of disease, 
                          in order to promote a better quality of life.</p>

                  </div>
              </div>


              <div className="agent">
                  <div className="para"> 
                    <h4>Oxygen therapy</h4>
                      <p>Oxygen therapy unique mix of treatments helps us in catering various ailments. We are committed to quality as an integral part of our
                          total operations with the goal of achieving clinical excellence
                      </p>
                  </div>
              </div>

              <div className="agent">
                  <div className="para">  <h4>Emergency Services</h4>
                      <p>(EMS) is a branch of emergency services dedicated to providing out-of-hospital acute
                          medical care and transport to definitive care, to patients with illnesses and injuries
                          which the patient</p>

                  </div>
              </div>
          </div>

          <div className="sec4">
              <div className="title">
                  <h1>BEST TREATMENT</h1>
              </div>

              <div className="agent">
                  <img src="./pho/d1.jpeg" alt="" className=" pho" />
                  <div className="para"> <h5>Medical Councling</h5>
                      <p>counseling is to help the patient amplify the vision of the specific situation and discover
                          the proper potential
                          to promote a better quality of life.</p>
                  </div>
              </div>


              <div className="agent">
                  <img src="./pho/d2.jpeg" alt="" className=" pho" />
                  <div className="para"> <h5>Oxygen therapy</h5>
                      <p> treatments helps us in catering various ailments. We are committed to
                          total operations with the goal of achieving clinical excellence.
                      </p>
                  </div>
              </div>

              <div className="agent">
                  <img src="./pho/d4.jpg" alt="" className=" pho" />
                  <div className="para">  <h5>Emergency Services</h5>
                      <p>(EMS) is a branch of emergency services  providing out-of-hospital acute
                          medical care and transport to definitive care with medical emergency.</p>
                  </div>
              </div>

              <div className="agent">
                  <img src="./pho/b2.jpeg" alt="" className=" pho" />
                  <div className="para"> <h5>Qulified Doctors</h5>
                      <p>A qualified doctor is a medical professional who has a degree recognized by the Medical of India and is registered by the Medical Council of any state.
                      </p>
                   </div>
              </div>
        </div>


                <div class="row sec5 ">
                    
                        <div class="col-sm-6">
                            <iframe class="embed-responsive-item" autoplay loop muted src="./video/healthcare.mp4" style={{ height: "280px",  border: "1px solid blue", borderRadius: "20px 20px", boxShadow: "2px 2px black" }}></iframe>

                            {/* <video autoplay loop muted src="./video/healthcare.mp4"  > health care </video> */}
                        </div>

                        <i class="col-sm-5" >

                            <h4>Qulified Doctors</h4>
                            <i>A qualified doctor is a medical professional who has a degree recognized by the Medical Council
                                of India and is registered by the Medical Council of any state. </i>
                        </i>
                    </div>




          <div class="row  mb-5 container-fluid m-4">
              <div class="col-12 col-md-4">
                  <h3>1+ MILLION</h3>
                  <p>Sq Ft Of Development</p>
              </div>
              <div class="col-12 col-md-4">
                  <h3>4+ DECADES</h3>
                  <p>Of Legacy</p>
              </div>
              <div class="col-12 col-md-4">
                  <h3>1000+</h3>
                  <p>Happy Customers</p>
              </div>
          </div>

         


              <div class="container-fluid text-center">
                  <div class="row">
                     
                      <div class="col-12 col-md-12">
                          <img src="./images/Anarock.png" alt="" />
                          <p> MAHARASTRA Registration no.
                              A51900000108.</p>
                      </div>
                  </div>
              </div>
          {/* </di
          v> */}
          </div>
         </>

  );
};

export default Home;
