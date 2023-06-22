import React  , { useState,useEffect, HtmlHTMLAttributes } from 'react'
import audi from '../../Imgaes/audi.png'
import house from '../../Imgaes/house.png'
import fuel from '../../Imgaes/fuel.png'
import location from '../../Imgaes/location.png'
import speed from '../../Imgaes/speed.png'
import user  from '../../Imgaes/man.png'
import calendar from '../../Imgaes/calendar.png'
import ageIcon from '../../Imgaes/adultAge.png'
import emailIcon from '../../Imgaes/mail.png'
import phoneIcon from '../../Imgaes/telephone.png'
import identityIcon from '../../Imgaes/card.png'
import drivingIcon from '../../Imgaes/driving.png'
import countryIcon from '../../Imgaes/country.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import './DetailsCar.css'
import PageLayout from '../common/PageLayout'
import Rate from '../common/Rate'
import { UrlApi } from '../common/Util'
import Select from 'react-select';
import {toast } from 'react-toastify';

export default function DetailsCar() {
    const [email,setEmail]=useState('');
    const [password,setPassord]=useState('')
    const [dataList,setDataList]=useState(Object)
    const [itemId,setItemId]=useState();
    const [isHaveChildren,setIsHaveChildren]=useState<Boolean>(false)
    const [initialCheckedValue,setInitialCheckedValue]=useState<boolean>(true)
    console.log("ITEM ID INSIDE DETAIL ==>",itemId)
    let {id}=useParams();
    const formik = useFormik({
        initialValues: {
          nameComplet:'',
          email: '',
          phoneNumber:'',
          age:0,
          nbrOfChildrens:0,
          identityCard:'',
          driveLicense:'',
          nbrOfPersons:0,
          country:'',
          hasChildren:false,
          rangeCar:{id:id}
        },
        onSubmit: values => {

        //alert(JSON.stringify(values, null, 2))

          fetch(UrlApi+'reservation/create/v2', {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },method:'POST',body:JSON.stringify(values)})
          .then(response  => {
            if(response.status===200){
              toast.success("Reservation added sucsesfully !",{className: 'toast-message'});
              formik.resetForm()
            }
            else if(response.status===404){
                toast.error("Oooops Probleme  !",{className: 'toast-message'});
                }
          
           else if(response.status==406){
            toast.error("This car already reserved  !",{className: 'toast-message'});
           }
          })
          .catch(function (error) {
            console.error(error)
          })
          

          
        },
        validationSchema: Yup.object({
            nameComplet: Yup.string()
                    .required(),
            email: Yup.string()
                    .email()
                    .required(),
            age: Yup.number()
                  .min(18,"You need to be more than 18")
                  .required(),
           phoneNumber: Yup.string()
                    .label('Phone number')
                    
                  .required(),
            nbrOfPersons:Yup.number()
                     .min(1,"More than one person ")
                     .required(),
          identityCard: Yup.string()
                        .label('Identity')
                     .required(), 
             driveLicense: Yup.string()
                     .label('License')
             .required(),  
             country:  Yup.string()
             .label('Country')
          .required()        

          })
      });
  
   
      useEffect(()=>{
        fetch(UrlApi+'range-car/get/'+id, {
            })
            .then(response => response.json())
            .then(response => {
                console.log('RESPONSE ',response)   
                        let data=response
                 setDataList(data)
                 setItemId(data.id)
                // setTimeout(()=>console.log("inisde state", setDataList(json)  ),1000)
                setTimeout(()=>console.log("inisde state", dataList  ),1000)
                setTimeout(()=>console.log("lentgh", dataList.id  ),1000)
            })
            .catch(function (error) {
              console.error(error)
            })
        }
      ,[])

    const onlyOne=(checkbox:string)=> {
        const checkboxes = document.getElementsByName('check')
        const check = document.getElementById(checkbox) as HTMLInputElement
        Array.prototype.forEach.call(checkboxes,function(el){
            el.checked = false;
        });
        check.checked = true;
        console.log("Value checked",check.value=="true")
        if(check.value=="true"){
           setIsHaveChildren(true)
           formik.values.hasChildren=true
           setInitialCheckedValue(false)
           setTimeout(()=>console.log("HAVE CHILDREN STATE ",isHaveChildren))
        }
        else if(check.value=="false"){
            setIsHaveChildren(false)
            formik.values.hasChildren=false
            setInitialCheckedValue(true)
            setTimeout(()=>console.log("HAVE CHILDREN STATE ",isHaveChildren))
        }
     
        }
    const InputAgeChildren=[]   
    for(let i=0;i<formik.values.nbrOfChildrens;i++){
        let subData=<div className="Input__View_Detail">
        <div className="Input__Icon__Detail">
            <img src={ageIcon} alt="" />
        </div>
        <div className="Input__Pad">
             <input
             id="nbrOfPerson"
             name="ageChildren"
             type="number"
             min={1}
             max={18}
             placeholder={'child '+(i+1)+' age'}
            
         />
        </div>

  </div>
   InputAgeChildren.push(subData)

    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [selectedOption, setSelectedOption] = useState(null);

      const handleSelectInput =(e:any)=>{
        console.log(e)
        setSelectedOption(e)
        formik.values.country=e.label
      }

  return (
         <PageLayout>   
         <div style={{height:'100%',paddingTop:'100px'}}>
            {   
               dataList?
               
                       
                            <div className='Container__Detail' key={dataList.id}>

                            <div className="Left__Side">
                                    
                                    <div className="Title__Left__Side">
                        
                                            <h1> {dataList.libelle}</h1>
                                    
                                        
                                    </div>
    
                                    <div className="Global__Image">
                                        <img src={'../Cars/'+dataList.picture+'.png'} />
                                    </div>
                                    
                                    <div className="Secondaire__Images">
    
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'} />
                                                </div>
                                                
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'}  />
                                                </div>
    
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'} alt="" />
                                                </div>
    
                                    </div>
    
                                    <div className="Colors__Car__Container">
                                        
                                        <div className="Color__Car" id='id1' ></div>
                                        <div className="Color__Car" id='id2'></div>
                                        <div className="Color__Car" id='id3'></div>
                                        <div className="Color__Car" id='id4'></div>
                                    </div>
                            </div>
    
                            <div className="Right__Side">
    
                                            <div className="Container__Right">
    
                                                    <div className="Image__Right">
                                                        <img src={'../Cars/'+dataList.picture+'.png'} alt="" />
                                                    </div>
    
                                                    <div className="Price__Car__Detail">
                                                        <h3>{dataList.price} $/Day</h3>
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
                                                                    <img src={speed} />
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                                    <div className="Text__Description">
                                                                                <p>239 km</p>
                                                                    </div>
                                                                    
                                                            </div> 
                                                    </div>
    
                                                    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                <img src={fuel} />
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                                <div className="Text__Description">
                                                                        <p>Hybrid</p>
                                                                </div>
                                                            
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
                                                            <div className="Text__Description"> <p>0 Day</p></div>
    
                                                            
                                                            </div>
                                                    
                                                    
                                                    </div>
    
                                                    
    
    
                                        </div>
                                        <a href="#form"><button style={{alignSelf:'center'}} >Reserve it now</button></a> 
    
                                    </div>
    
                            </div>
                            </div>
                        
               
                :
                'not'
            }
                    
             

               <div className="Form__Reservation">
                             <div className="Form__Title">
                                    <h1>Take your car now !</h1>
                                </div>
                            <form onSubmit={formik.handleSubmit} id="form">
                            <div className="Title__Information">
                                <h3>Information about you</h3>
                                <p>Enter the fields below to reserve your car</p>
                            </div>
            
                             
                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={user} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="nameComplet"   
                                        placeholder='Name'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.nameComplet}
                                    />
                                     {formik.touched.nameComplet && formik.errors.nameComplet && (
                                            <span className='text-red-400'>{formik.errors.nameComplet}</span>
                                          )}
                                   </div>

                             </div>
                        
                      
                        
                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={emailIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="email"
                                        placeholder='Email'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                     
                                    />
                                       {formik.touched.email && formik.errors.email && (
                                            <span className='text-red-400'>{formik.errors.email}</span>
                                          )}
                                   </div>

                             </div>

              

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={countryIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                   <Select
                                        value={selectedOption}
                                        onChange={(e)=>handleSelectInput(e)}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                              ...baseStyles,
                                              borderColor: state.isFocused ? 'white' : 'white',
                                              border:'none',
                                              outline:'none'

                                            }),
                                          }}
                                        isSearchable={true}
                                        options={options}
                                        placeholder="Country"
                                    />
                                   </div>
                                   {formik.touched.country && formik.errors.country && (
                                            <span className='text-red-400'>{formik.errors.country}</span>
                                          )}

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={phoneIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="phoneNumber"
                                        placeholder='Phone Number'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.phoneNumber}
                                    />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                            <span className='text-red-400'>{formik.errors.phoneNumber}</span>
                                          )}
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={ageIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="age"
                                        placeholder='Age'
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.age}
                                    />
                                     {formik.touched.age && formik.errors.age && (
                                            <span className='text-red-400'>{formik.errors.age}</span>
                                          )}
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={user} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="nbrOfPersons"
                                        type="number"
                                        placeholder='Number of person'
                                        onChange={formik.handleChange}
                                        value={formik.values.nbrOfPersons}

                                    />
                                     {formik.touched.nbrOfPersons && formik.errors.nbrOfPersons && (
                                            <span className='text-red-400'>{formik.errors.nbrOfPersons}</span>
                                          )}
                                   
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={identityIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input 
                                        id="identityCard"
                                        type="text"
                                        onChange={formik.handleChange}
                                         placeholder="Identity"
                                        value={formik.values.identityCard}
                                    />

                                        {formik.touched.identityCard && formik.errors.identityCard && (
                                            <span className='text-red-400'>{formik.errors.identityCard}</span>
                                          )}
                                    
                                   </div>

                             </div>

                           


                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={drivingIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="driveLicense"
                                        type="text"
                                        placeholder='Drive license'
                                        onChange={formik.handleChange}
                                        value={formik.values.driveLicense}
                                    />
                                   </div>
                                   {formik.touched.driveLicense && formik.errors.driveLicense && (
                                            <span className='text-red-400'>{formik.errors.driveLicense}</span>
                                          )}

                             </div>
                             
                             <div className='Question__Container'>
                                      <p>Do you have childrens ?</p>
                                      <div className='Option__Answer'>
                                                <input
                                                    id="yes"
                                                    type="checkbox"
                                                    name="check"
                                                    value="true"
                                                   onClick={()=>onlyOne("yes")}
                                                />
                                                  <label>
                                                    Yes
                                                </label>
                                      </div>

                                      <div className='Option__Answer'>
                                                <input
                                                    id="no"
                                                    type="checkbox" 
                                                    name="check"
                                                    value="false"
                                                    checked={initialCheckedValue}
                                                    onClick={()=>onlyOne("no")}
                                                />
                                                <label>
                                                    No
                                                </label>
                                      </div> 

                             </div>
                              {isHaveChildren?<>
                                 <div className="Input__View_Detail">
                                 <div className="Input__Icon__Detail">
                                     <img src={user} alt="" />

                                 </div>
                                 <div className="Input__Pad">
                                      <input
                                      id="nbrOfPerson"
                                      name="nbrOfChildrens"
                                      type="number"
                                      value={formik.values.nbrOfChildrens}
                                      placeholder='Number of childrens'
                                      onChange={formik.handleChange}
                                     
                                  />
                                 </div>

                           </div>
                            
                            { (InputAgeChildren && InputAgeChildren.length>0)?InputAgeChildren.map(e=>e):''}
                           </>
                              
                              
                              :''}


                          
                        
                            <button type="submit" onClick={()=>formik.handleSubmit}>Submit</button>
                            </form>

               </div>

               <Rate itemId={itemId} subject="car"/>

         </div>
         </PageLayout>
     )
}
