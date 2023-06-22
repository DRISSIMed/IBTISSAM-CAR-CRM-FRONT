import React, { useEffect ,useState} from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import audi from '../../Imgaes/audi.png'
import house from '../../Imgaes/house.png'
import tourIcon from '../../Imgaes/tour.png'
import like from '../../Imgaes/like.png'
import arrow  from '../../Imgaes/arrow.png'
import noLike from '../../Imgaes/noLike.png'
import user from '../../Imgaes/user.png'
import fuel from '../../Imgaes/fuel.png'
import location from '../../Imgaes/location.png'
import speed from '../../Imgaes/speed.png'
import { Formik } from 'formik';
import PageLayout from '../common/PageLayout'
import {toast } from 'react-toastify';
import { UrlApi } from '../common/Util'
export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataList,setDataList]=useState([]);
  const navigate = useNavigate();
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  useEffect(()=>{

  })
  const handleSelectInput =(e:any)=>{
    console.log(e)
    setSelectedOption(e)
  }
  const handleSearch=()=>{
    const check = document.getElementById("car") as HTMLInputElement
    console.log("TYPE OF  ",typeof(check.value))
      console.log("Val  ",check.value)
    fetch(UrlApi+'search/get/avialable?type='+check.value, {
      
    })
    .then(response => response.json())
    .then(response => {
        console.log('RESPONSE ',response)  
        setDataList(response) 
    })
    .catch(function (error) {
      console.error(error)
    })

  }

  const handleLike =(id:string)=>{
   
    const element= document.getElementById(id) as HTMLInputElement
    console.log("ELEMENT",element)
     if(element.src==='http://localhost:3000'+noLike ){
       toast.success("Thank you !",{className: 'toast-message'});
       element.src=like
      }else{
       element.src=noLike
      }
   
   console.log('Liked')
  }


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
                        <Select
                                        value={selectedOption}
                                        onChange={(e)=>handleSelectInput(e)}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              borderColor: state.isFocused ? 'white' : 'white',
                                              border:'none',
                                              width:'400px',
                                              outline:'none'

                                            }),
                                          }}
                                        isSearchable={true}
                                        options={options}
                                        placeholder="Country"
                                    />
                        </div>

                        <div className='Form__Element'>
                        <Select
                                        value={selectedOption}
                                        onChange={(e)=>handleSelectInput(e)}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              borderColor: state.isFocused ? 'white' : 'white',
                                              border:'none',
                                              width:'400px',
                                              outline:'none'

                                            }),
                                          }}
                                        isSearchable={true}
                                        options={options}
                                        placeholder="Country"
                                    />
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

                        <div className='CheeckBox'>
                                                <input
                                                    id="car"
                                                    type="checkbox"
                                                    name="check"
                                                    value="car"
                                              
                                                />
                                                  <label>
                                                    Car
                                                </label>
                                      </div>
                        </div>

                        <div className='Form__Element'>

                          <div className='CheeckBox'>
                                                  <input
                                                      id="yes"
                                                      type="checkbox"
                                                      name="check"
                                                      value="true"
                                                
                                                  />
                                                    <label>
                                                      Appartement
                                                  </label>
                                        </div>
                          </div>

                          <div className='Form__Element'>

                          <div className='CheeckBox'>
                                                  <input
                                                      id="yes"
                                                      type="checkbox"
                                                      name="check"
                                                      value="true"
                                                
                                                  />
                                                    <label>
                                                     Tours
                                                  </label>
                                        </div>
                          </div>

                      
                    
                        <div className='Form__Element'>
                        <button type="submit" onClick={handleSearch}>
                          Search Now
                        </button>
                        </div>
                      </form>
                    )}
          </Formik>

          </div>


          <div className="Body__Element__Container__Search">
       
              {
                
                    dataList && dataList.length>0 ?
                 
                    dataList.map(function(e:{
                      id:any 
                      libelle:any
                      price:any
                      picture:any
                      code:any
                
                    }):any{
                      return (
                          <div className="Body__Element" key={e.id}>
                          <div className="Image">
                              <img src={'./Cars/'+e.picture+'.png'} />
                          </div>
                          <div className="Description">
                              <div className="Info__Car__Index">
                                  <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>${e.price}</p>
                                  <p style={{fontWeight:'bold'}}>
                                    {e.libelle}
                                  </p>
                              </div>
                              <div className="Action">
                                  <div className='Action__Elment'>
                                      <img src={noLike} id={e.libelle} onClick={()=>handleLike(e.libelle)} />
                                  </div>
                                  <div className='Action__Elment'>
                                      <img src={arrow} alt="" onClick={()=> navigate('/details-car/'+e.id)} />
                                  </div>
                              </div>
                          </div>
                          <div className="Detail__Car">
                              <div className="Detail__Element">
                                  <img src={location} />  
                                  <p>Marrakech</p>
                              </div>

                              <div className="Detail__Element">
                                  <img src={speed} />
                                  <p>239 km</p>
                              </div>

                              <div className="Detail__Element">
                                  <img src={fuel} />
                                  <p>Hybrid</p>
                              </div>

                              <div className="Detail__Element">
                                  <img src={user} />
                                  <p>4</p>
                              </div>

                          </div>
                      </div>
                      )
                    })
                 
                    :
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
              }

        </div>
          </div>
          </div>

    </PageLayout>
       
  )
}
