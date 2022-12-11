import React  , { useState } from 'react'
import house from '../../Imgaes/house.png'
import fuel from '../../Imgaes/fuel.png'
import location from '../../Imgaes/location.png'
import speed from '../../Imgaes/speed.png'
import user  from '../../Imgaes/profile.png'
import calendar from '../../Imgaes/calendar.png'
import ageIcon from '../../Imgaes/adultAge.png'
import emailIcon from '../../Imgaes/mail.png'
import phoneIcon from '../../Imgaes/telephone.png'
import identityIcon from '../../Imgaes/card.png'
import drivingIcon from '../../Imgaes/driving.png'
import PageLayout from '../common/PageLayout'
import { useFormik } from 'formik';
import './DetailAppartement.css'
export default function DetailsAppartement() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
   <PageLayout>
             <div style={{height:'100%',paddingTop:'100px'}}>

<div className='Container__Detail'>

         <div className="Left__Side">
                 
                 <div className="Title__Left__Side">
     
                         <h2> Villa</h2>
                 
                     
                 </div>

                 <div className="Global__Image">
                     <img src={house} alt="" />
                 </div>
                 
                 <div className="Secondaire__Images__House">

                             <div className="Secondaire__Image__House">
                                 <img src={house} alt="" />
                             </div>

                             <div className="Secondaire__Image__House">
                                 <img src={house} alt="" />
                             </div>
                             <div className="Secondaire__Image__House">
                                 <img src={house} alt="" />
                             </div>

                 </div>

          
         </div>

         <div className="Right__Side">

                         <div className="Container__Right">

                                 <div className="Image__Right">
                                     <img src={house} alt="" />
                                 </div>

                                 <div className="Price__Car">
                                     <h3>124 $/Day</h3>
                                 </div>

                                 <div className="Container__Detail__Car">

                                 <div className="Info__Car">
                                         <div className="Info__Car__Description">
                                                 <img src={location} /> 
                                         </div>
                                         <div className="Info__Car__Description">
                                         <div className="Text__Description"><p>Marrakech</p></div>

                                             
                                         </div>     
                                 </div>
                                 
                          

                                 <div className="Info__Car">
                                         <div className="Info__Car__Description">
                                             <img src={user} />
                                         </div>
                                         <div className="Info__Car__Description">
                                         <div className="Text__Description"> <p>4</p></div>

                                         
                                         </div>
                                 
                                 
                                 </div>

                                 <div className="Info__Car">
                                         <div className="Info__Car__Description">
                                             <img src={calendar} />
                                             <div className="Button__Counter">
                                                 <button>+</button>
                                                 <button>-</button>
                                             </div>
                                         </div>
                                         <div className="Info__Car__Description">
                                         <div className="Text__Description"> <p>1 Day</p></div>

                                         
                                         </div>
                                 
                                 
                                 </div>

                                 


                     </div>
                     <button>Reserve it now</button>

                 </div>

         </div>
</div>

<div className="Form__Reservation">
              <div className="Form__Title">
                     <h1>Take Your House Now !</h1>
                 </div>
             <form onSubmit={formik.handleSubmit}>

                <div className="Title__Information">
                    <h3>Information about you</h3>
                    <p>Enter the fields below to reserve your house</p>
                </div>
            
              
              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={user} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>
         
       
         
              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={emailIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>

              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={phoneIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>

              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={ageIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>

              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={user} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>

              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={identityIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>


              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={identityIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>

              <div className="Input__View_Detail">
                    <div className="Input__Icon__Detail">
                        <img src={drivingIcon} alt="" />

                    </div>
                    <div className="Input__Pad">
                         <input
                         id="firstName"
                         name="firstName"
                         type="text"
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                     />
                    </div>

              </div>
         
             <button type="submit">Save</button>
             </form>

</div>

</div>
   </PageLayout>
  )
}
