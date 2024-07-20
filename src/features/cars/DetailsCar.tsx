import React, { useState, useEffect, HtmlHTMLAttributes } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import './DetailsCar.css'
import PageLayout from '../common/PageLayout'
import Rate from '../common/Rate'
import { UrlApi,getPublicImagePath } from '../common/Util'
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import StepperComponent from '../common/StepperComponent'
import { useNavigate } from "react-router-dom";
export default function DetailsCar() {
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('')
    const [dataList, setDataList] = useState(Object)
    const [recommendationList,setRecommendationList]=useState(Object)
    const [itemId, setItemId] = useState();
    const[countDays,setCountDays]=useState(1);
    const [isHaveChildren, setIsHaveChildren] = useState<Boolean>(false)
    const [initialCheckedValue, setInitialCheckedValue] = useState<boolean>(true)
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    console.log("ITEM ID INSIDE DETAIL ==>", itemId)
    let { id } = useParams();
    const formik = useFormik({
        initialValues: {
            nameComplet: '',
            email: '',
            phoneNumber: '',
            age: 0,
            nbrOfChildrens: 0,
            identityCard: '',
            driveLicense: '',
            nbrOfPersons: 0,
            country: '',
            hasChildren: false,
            rangeCar: { id: id }
        },
        onSubmit: values => {

            //alert(JSON.stringify(values, null, 2))

            fetch(UrlApi + 'reservation/create/v2', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, method: 'POST', body: JSON.stringify(values)
            })
                .then(response => {
                    if (response.status === 200) {
                        toast.success("Reservation added sucsesfully !", { className: 'toast-message' });
                        formik.resetForm()
                    }
                    else if (response.status === 404) {
                        toast.error("Oooops Probleme  !", { className: 'toast-message' });
                    }

                    else if (response.status == 406) {
                        toast.error("This car already reserved  !", { className: 'toast-message' });
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
                .min(18, "You need to be more than 18")
                .required(),
            phoneNumber: Yup.string()
                .label('Phone number')

                .required(),
            nbrOfPersons: Yup.number()
                .min(1, "More than one person ")
                .required(),
            identityCard: Yup.string()
                .label('Identity')
                .required(),
            driveLicense: Yup.string()
                .label('License')
                .required(),
            country: Yup.string()
                .label('Country')
                .required()

        })
    });


    useEffect(() => {
        loadItem();
    }
        , [])

const loadItem=()=>{
            fetch(UrlApi + 'range-car/get/' + id, {
            })
                .then(response => response.json())
                .then(response => {
                    console.log('RESPONSE ', response)
                    let data = response
                    setDataList(data)
                    setItemId(data.id)
                    // call the recommendation gamme
                    fetch(UrlApi + 'range-car/get/by-gamme/' + data.gamme, {
                    })
                        .then(response => response.json())
                        .then(response => {
                            console.log('RESPONSE ', response)
                            let data = response
                            setRecommendationList(data)   
                        })
                        .catch(function (error) {
                            console.error(error)
                        })
                })
                .catch(function (error) {
                    console.error(error)
                })
        }

    const onlyOne = (checkbox: string) => {
        const checkboxes = document.getElementsByName('check')
        const check = document.getElementById(checkbox) as HTMLInputElement
        Array.prototype.forEach.call(checkboxes, function (el) {
            el.checked = false;
        });
        check.checked = true;
        console.log("Value checked", check.value == "true")
        if (check.value == "true") {
            setIsHaveChildren(true)
            formik.values.hasChildren = true
            setInitialCheckedValue(false)
            setTimeout(() => console.log("HAVE CHILDREN STATE ", isHaveChildren))
        }
        else if (check.value == "false") {
            setIsHaveChildren(false)
            formik.values.hasChildren = false
            setInitialCheckedValue(true)
            setTimeout(() => console.log("HAVE CHILDREN STATE ", isHaveChildren))
        }

    }
    const InputAgeChildren = []
    for (let i = 0; i < formik.values.nbrOfChildrens; i++) {
        let subData = <div className="Input__View_Detail">
            <div className="Input__Icon__Detail">
                <img src={getPublicImagePath('ageIcon.png')} alt="" />
            </div>
            <div className="Input__Pad">
                <input
                    id="nbrOfPerson"
                    name="ageChildren"
                    type="number"
                    min={1}
                    max={18}
                    placeholder={'child ' + (i + 1) + ' age'}

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

    const handleSelectInput = (e: any) => {
        console.log(e)
        setSelectedOption(e)
        formik.values.country = e.label
    }
  const minceDays=()=>{
       if(countDays > 1 ){
         setCountDays(countDays-1)
       }
       else{
        return;
       }
  }
  const cheeckOffre=(id:any)=>{
     navigate('/details-car/'+id)
     
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // //loadItem();
    window.scrollTo(0, 0);
    window.location.reload();
    
    // Scroll to the top of the page

    
   
 ;
  }    
    return (
        <PageLayout>
            <div style={{ height: '100%',padding:'20px' }}>
                {
                    dataList ?
                        <div className='Container__Detail' key={dataList.id}>

                            <div className="Left__Side">

                                <div className="Title__Left__Side">


                                    <h2> Votre {dataList.libelle} à partir du <span className='Price_Left_Side'>{dataList.price} $/Day</span></h2>


                                </div>

                                <div className="Global__Image">
                                    <img src={'../Cars/' + dataList.picture + '.png'} />
                                </div>

                                <div className="Secondaire__Images">

                                    <div className="Secondaire__Image">
                                        <img src={'../Cars/' + dataList.picture + '.png'} />
                                    </div>

                                    <div className="Secondaire__Image">
                                        <img src={'../Cars/' + dataList.picture + '.png'} />
                                    </div>

                                    <div className="Secondaire__Image">
                                        <img src={'../Cars/' + dataList.picture + '.png'} alt="" />
                                    </div>

                                </div>

                                <div className="Colors__Car__Container">

                                    <div className="colors" >
                                        <h3>{t("taviableColors")}</h3>                                 
                                    </div>

                                    <div className="colors">
                                        <div className="Color__Car"  style={{backgroundColor:dataList.colorOne}} ></div>
                                        <div className="Color__Car" style={{backgroundColor:dataList.colorTwo}} ></div>
                                        <div className="Color__Car" style={{backgroundColor:dataList.colorThree}} ></div>
                                        <div className="Color__Car" style={{backgroundColor:dataList.colorFor}} ></div>
                                    </div>
                                 
                                </div>

                                <div className="Colors__Car__Container">

                                    <div className="colors" >
                                        <h3>{t("tavailableQuantity")} <span style={{marginLeft:"10px",fontWeight:'bold'}}>{dataList.qantity}</span></h3>                                 
                                    </div>                             
                                </div>
                                {dataList.isReserved ? 
                                    <div className="Message_Reserved">
                                        <div className="item"><img src={getPublicImagePath('alert.png')}/></div>
                                        <div className="item"><h4>{t("tAlredyReserved")}</h4></div>
                                        
                                    </div> 
                                :
                                ''
                                }

                                  <div className="Message_Annulation">
                                        <div className="item"><img src={getPublicImagePath('valid.png')}/></div>
                                        <div className="item"><h4>{t("tAnnulation")}</h4></div>
                                        
                                    </div> 
                              
                            </div>

                            <div className="Right__Side">

                                <div className="Container__Right">

                                    <div className="Image__Right">
                                        <img src={'../Cars/' + dataList.picture + '.png'} alt="" />
                                    </div>

                                    <div className="Price__Car__Detail">
                                        <h3>{dataList.price} $/Day</h3>
                                    </div>

                                    <div className="Container__Detail__Car">

                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('location.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description"><p>Marrakech</p></div>


                                            </div>
                                        </div>

                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('speed.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description">
                                                    <p>239 km</p>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('fuel.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description">
                                                    <p>Hybrid</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('roueIcon.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description">
                                                    <p>Aluminium</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('clemaIcon.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description">
                                                    <p>climatisée</p>
                                                </div>

                                            </div>
                                        </div>

                                        
                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('autoBebe.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description">
                                                    <p>siége auto</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('user.png')} />
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description"> <p>4</p></div>


                                            </div>


                                        </div>

                                        <div className="Info__Car">
                                            <div className="Info__Car__Description">
                                                <img src={getPublicImagePath('calendar.png')} />
                                                <div className="Button__Counter">
                                                    <button onClick={()=>setCountDays(countDays+1)}>+</button>
                                                    <button onClick={minceDays}>-</button>
                                                </div>
                                            </div>
                                            <div className="Info__Car__Description">
                                                <div className="Text__Description"> <p>{countDays} Day(s)</p></div>


                                            </div>


                                        </div>




                                    </div>
                                    <a href="#form"><button style={{ alignSelf: 'center' }} >Reserve it now</button></a>

                                </div>

                            </div>
                          
                        </div>


                        :
                        'not'
                }

                        <StepperComponent/>
{/* 
                   <div className="Take_car_title">
                        <h1>{t("ttakeYourCarNow")}</h1>
                    </div>
                   */}

                <div className="Form__Reservation">

                    <form onSubmit={formik.handleSubmit} id="form">
                        <div className="Title__Information">
                            <h3> {t("tpersonalINformation")}</h3>
                            <p> {t("tfilesBelow")}</p>
                        </div>


                        <div className="Input__View_Detail">
                            <div className="Input__Icon__Detail">
                                <img src={getPublicImagePath('user.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="nameComplet"
                                    placeholder= {t("tname")}
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
                                <img src={getPublicImagePath('mail.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="email"
                                    placeholder= {t("temail")}
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
                                <img src={getPublicImagePath('country.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <Select
                                    value={selectedOption}
                                    onChange={(e) => handleSelectInput(e)}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? 'white' : 'white',
                                            border: 'none',
                                            outline: 'none'

                                        }),
                                    }}
                                    isSearchable={true}
                                    options={options}
                                    placeholder= {t("tcountry")}
                                />
                            </div>
                            {formik.touched.country && formik.errors.country && (
                                <span className='text-red-400'>{formik.errors.country}</span>
                            )}

                        </div>

                        <div className="Input__View_Detail">
                            <div className="Input__Icon__Detail">
                                <img src={getPublicImagePath('telephone.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="phoneNumber"
                                    placeholder= {t("tphoneNumber")}
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
                                <img src={getPublicImagePath('ageIcon.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="age"
                                    placeholder= {t("tage")}
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
                                <img src={getPublicImagePath('user.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="nbrOfPersons"
                                    type="number"
                                    placeholder= {t("tnumberOfPerson")}
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
                                <img src={getPublicImagePath('card.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="identityCard"
                                    type="text"
                                    onChange={formik.handleChange}
                                    placeholder= {t("tidentityCard")}
                                    value={formik.values.identityCard}
                                />

                                {formik.touched.identityCard && formik.errors.identityCard && (
                                    <span className='text-red-400'>{formik.errors.identityCard}</span>
                                )}

                            </div>

                        </div>




                        <div className="Input__View_Detail">
                            <div className="Input__Icon__Detail">
                                <img src={getPublicImagePath('driving.png')} alt="" />

                            </div>
                            <div className="Input__Pad">
                                <input
                                    id="driveLicense"
                                    type="text"
                                    placeholder= {t("tdriveLicense")}
                                    onChange={formik.handleChange}
                                    value={formik.values.driveLicense}
                                />
                            </div>
                            {formik.touched.driveLicense && formik.errors.driveLicense && (
                                <span className='text-red-400'>{formik.errors.driveLicense}</span>
                            )}

                        </div>

                        <div className='Question__Container'>
                            <p>{t("tQuestion")}</p>
                            <div className='Option__Answer'>
                                <input
                                    id="yes"
                                    type="checkbox"
                                    name="check"
                                    value="true"
                                    onClick={() => onlyOne("yes")}
                                />
                                <label>
                                {t("tYes")}
                                </label>
                            </div>

                            <div className='Option__Answer'>
                                <input
                                    id="no"
                                    type="checkbox"
                                    name="check"
                                    value="false"
                                    checked={initialCheckedValue}
                                    onClick={() => onlyOne("no")}
                                />
                                <label>
                                {t("tNo")}
                                </label>
                            </div>

                        </div>
                        {isHaveChildren ? <>
                            <div className="Input__View_Detail">
                                <div className="Input__Icon__Detail">
                                    <img src={getPublicImagePath('user.png')} alt="" />

                                </div>
                                <div className="Input__Pad">
                                    <input
                                        id="nbrOfPerson"
                                        name="nbrOfChildrens"
                                        type="number"
                                        max="4"
                                        min='0'
                                        value={formik.values.nbrOfChildrens}
                                        placeholder='Number of childrens'
                                        onChange={formik.handleChange}

                                    />
                                </div>

                            </div>

                            {(InputAgeChildren && InputAgeChildren.length > 0) ? InputAgeChildren.map(e => e) : ''}
                        </>


                            : ''}




                        <button type="submit" onClick={() => formik.handleSubmit}>{t("tSave")}</button>
                    </form>

                    <div className="Recommendation_Conatiner">
                    <div className="Title__Information">
                            <h3> {t("tRecommendationForYou")}</h3>
                            <p> {t("tRecommendationDescribe")}</p>
                        </div>

                               {recommendationList && recommendationList.length>0?
                                recommendationList.map(function (e: {
                                    id: any
                                    libelle: any
                                    price: any
                                    picture: any
                                    code: any
                    
                                  }): any {
                                    if(e.id==id)
                                    return;
                                 else
                                    return (
                                        
                                          
                               <div className="Item_Recomendation_Container">
                                    
                               <div className="left_item_recommendation">
                                       <div className="left_item_recommendation_image">
                                           <img src={'../Cars/'+e.picture+'.png'} alt="" />
                                       </div>
                                       <div className="left_item_recommendation_description">
                                       <p>
                                                   <span style={{fontWeight:'100',color:'gray'}}>A partir du </span>
                                                   <span style={{color:'green'}}>100$/Day</span>
                                               </p>
                                           <p>{e.libelle}</p>
                                       </div>
                               </div>

                               <div className="Right_item_recommendation">
                                   <button onClick={()=>cheeckOffre(e.id)} >Cheeck offre</button>
                                   
                               </div>

                          </div>
                                    )}
                                    
                                    )
                              
                               :
                               
                               ''
                               }

                    </div>

                </div>

                <div className="reserved_car">
                    <h1>{t("tWhatido")}</h1>
                    <div className="conditon__item">
                        <img src={getPublicImagePath('valid.png')} alt="" />
                        <p>Check available qantity of car </p>
                    </div>
                    <div className="conditon__item">
                       <img src={getPublicImagePath('valid.png')} alt="" />
                        <p>Contact Admnistration via WhatsApp </p>
                    </div>
                    <div className="conditon__item">
                    <img src={getPublicImagePath('valid.png')} alt="" />
                        <p>have a great conversation </p>
                    </div>

                </div>

                <Rate itemId={itemId} subject="car" />

            </div>
        </PageLayout>
    )
}
