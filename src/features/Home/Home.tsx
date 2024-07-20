import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import PageLayout from '../common/PageLayout'
import { toast } from 'react-toastify';
import { UrlApi,getPublicImagePath } from '../common/Util';
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import Statistic from '../common/Statistic';
import PhotoGalleria from '../common/PhotoGalleria';
import Info from '../common/Info';
import CompanyServices from '../common/CompanyServices';
import Stepper from '../common/StepperComponent';


export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();



  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  useEffect(() => {

  })
  const handleSelectInput = (e: any) => {
    console.log(e)
    setSelectedOption(e)
  }
  const handleSearch = () => {
    const check = document.getElementById("car") as HTMLInputElement
    console.log("TYPE OF  ", typeof (check.value))
    console.log("Val  ", check.value)
    fetch(UrlApi + 'search/get/avialable?type=' + check.value, {

    })
      .then(response => response.json())
      .then(response => {
        console.log('RESPONSE ', response)
        setDataList(response)
      })
      .catch(function (error) {
        console.error(error)
      })

  }

  const handleLike = (id: string) => {

    const element = document.getElementById(id) as HTMLInputElement
    console.log("ELEMENT", element)
    if (element.src === 'http://localhost:3000' + getPublicImagePath('noLike.png')) {
      toast.success("Thank you !", { className: 'toast-message' });
      element.src = getPublicImagePath('like.png')
    } else {
      element.src = getPublicImagePath('noLike.png')
    }

    console.log('Liked')
  }


  return (
    <PageLayout>
      <PhotoGalleria/>
      < div style={{ height: '100%', paddingTop: '100px' }}>
        <div className="Container__Home">
          
          <div className="Title__Home">
            <h2>{t("ttitleHome")}</h2>
          </div>

           <div>
           <Statistic/>
           </div>

        

          <div className="Body__Element__Container__Search">

            {

              dataList && dataList.length > 0 ?

                dataList.map(function (e: {
                  id: any
                  libelle: any
                  price: any
                  picture: any
                  code: any

                }): any {
                  return (
                    <div className="Body__Element" key={e.id}>
                      <div className="Image">
                        <img src={'./Cars/' + e.picture + '.png'} />
                      </div>
                      <div className="Description">
                        <div className="Info__Car__Index">
                          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '12px' }}>${e.price}</p>
                          <p style={{ fontWeight: 'bold' }}>
                            {e.libelle}
                          </p>
                        </div>
                        <div className="Action">
                          <div className='Action__Elment'>
                            <img src={getPublicImagePath('noLike.png')} id={e.libelle} onClick={() => handleLike(e.libelle)} />
                          </div>
                          <div className='Action__Elment'>
                            <img src={getPublicImagePath('arrow.png')} alt="" onClick={() => navigate('/details-car/' + e.id)} />
                          </div>
                        </div>
                      </div>
                      <div className="Detail__Car">
                        <div className="Detail__Element">
                          <img src={getPublicImagePath('location.png')} />
                          <p>Marrakech</p>
                        </div>

                        <div className="Detail__Element">
                          <img src={getPublicImagePath('speed.png')} />
                          <p>239 km</p>
                        </div>

                        <div className="Detail__Element">
                          <img src={getPublicImagePath('fuel.png')} />
                          <p>Hybrid</p>
                        </div>

                        <div className="Detail__Element">
                          <img src={getPublicImagePath('user.png')} />
                          <p>4</p>
                        </div>

                      </div>
                    </div>
                  )
                })

                :
              <>
              
              <div className="Title__Home">
                    <h2>{t("tourservices")}</h2>
              </div>

              <CompanyServices/>
          
              </>
            }

          </div>
        </div>
        <Info/>
        <Stepper/>
      </div>

    </PageLayout>

  )
}
