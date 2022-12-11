import React, { useEffect } from 'react'
import './Home.css'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Select,DatePicker } from 'antd';

import pic from '../../Imgaes/profile.png'
import audi from '../../Imgaes/audi.png'
import house from '../../Imgaes/house.png'
import tourIcon from '../../Imgaes/tour.png'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import PageLayout from '../common/PageLayout'
const { Option } = Select;
export default function Home() {
  const city=[{label:'test'}]
  const handleSubmit =()=>{

  }
  useEffect(()=>{

  })

  return (
    <PageLayout>
        < div style={{height:'100%',paddingTop:'100px'}}>
      
          <div className="Container__Home">

          <div className="Title__Home">
              <h2>Car Rental in Morocco - Search & Save</h2>
          </div>

          <div className="Form">
          <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                      const errors = {};
                    
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit} >
                        <div className='Form__Element'>
                        {/* <Select defaultValue="lucy" style={{ width: 320 ,borderColor:'white'}} >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select> */}
                        <input type="text" placeholder='Aireport,City ...' />
                        </div>

                        <div className='Form__Element'>
                        <input
                        type='date'
                        id='dateStart'
                        />
                        </div>

                          <div className='Form__Element'>
                          
                          <input
                        type='date'
                        
                      
                        />
                        </div>


                        <div className='Form__Element'>
                        
                        <input
                        type='number'
                        placeholder='Number person'
                        />
                        </div>
                        <div className='Form__Element'>

                        
                        <input
                        type='text'
                        placeholder='Coupon'
                        />
                        </div>

                      
                    
                        <div className='Form__Element'>
                        <button type="submit" disabled={isSubmitting}>
                          Search Now
                        </button>
                        </div>
                      </form>
                    )}
          </Formik>

          </div>

          <div className="Services__Container">
            <h3>Our services </h3>
            <div className="Services">

                <div className="Service__Element">
                <div className="Service__Element__Image">

                          <img src={house} />
                </div>
                    
                    <div className="Service__Element__Container">
                    <h3>Rent Appartement</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>
                </div>
                <div className="Serivce_Element__Button">
                    <button>Take your app</button>
                </div>
                </div>

                <div className="Service__Element">
                  <div className="Service__Element__Image">
                        <img src={audi} />
                  </div>
                      
                      <div className="Service__Element__Container">
                        <h3>Rent Car</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>
                        
                      </div>
                      <div className="Serivce_Element__Button">
                            <button>Take your car</button>
                    </div>
                </div>

                <div className="Service__Element">
                  <div className="Service__Element__Image">
                        <img src={tourIcon} />
                  </div>
                      
                      <div className="Service__Element__Container">
                        <h3>Tour</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>
                        
                      </div>
                      <div className="Serivce_Element__Button">
                            <button>Take your Tour</button>
                    </div>
                </div>
            </div>

          </div>



          </div>
          </div>

    </PageLayout>
       
  )
}
