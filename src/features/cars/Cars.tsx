import React, { useEffect, useState, CSSProperties } from 'react'
import { UrlApi,getPublicImagePath } from '../common/Util'
import './Cars.css'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import RiseLoader from "react-spinners/RiseLoader";
import { red } from '@mui/material/colors'
import PageLayout from '../common/PageLayout'
const override: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  textAlign:'center'

};

export default function Cars() {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([])
  const [dataListGlobal, setDataListGlobal] = useState([])
  const [tagCarList, setTgaCarList] = useState([])
  const [Loading, setLoading] = useState(true)
  const [initialTag, setInitialTag] = useState('ALL')
  const handleSubmit = () => {

  }
  useEffect(() => {
    fetch(UrlApi + 'range-car/v2/list', {
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setDataList(json)
        setDataListGlobal(json)
      })
      .catch(function (error) {
        console.error(error)
      })

    fetch(UrlApi + 'type-car/v2/list', {
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setTgaCarList(json)
      })
      .catch(function (error) {
        console.error(error)
      })

  }, [])

  const handleChoice = (id: string, code: string) => {
    console.log("CODE TO FILTER", code)
    var element = document.getElementsByClassName('Tag__Element');
    for (var i = 0; i < element.length; i++) {
      if (element[i].id == id) {

        element[i].classList.toggle('activeTag')
      }
      else {
        element[i].classList.remove('activeTag')
      }
    }
    if (code == "ALL") {
      setDataList(dataListGlobal)
    }
    else {
      const dataFiltred = dataListGlobal.filter(function (obj: { code: string }): any { return (obj.code == code) })
      setDataList(dataFiltred)
      console.log('dataFiltred', dataFiltred)
    }


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


  const tagsCarDiv = document.querySelector('.Tags__Car') as HTMLElement;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      tagsCarDiv.classList.add('fixed');
    } else {
      tagsCarDiv.classList.remove('fixed');
    }
  });
  
    return (
    <PageLayout>
      <div style={{ paddingTop: '100px', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="Tags__Car">
          {
            tagCarList && tagCarList.length > 0 ?
              tagCarList.map(function (e: {
                id: any
                libelle: any
                code: any

              }): any {
                return (
                  <div className="Tag__Element" key={e.id} id={e.id} onClick={() => handleChoice(e.id, e.code)}>
                    <p className='Logo__Icon'><img src={getPublicImagePath('mercedes.png')} /></p>
                    <p>{e.libelle}</p>
                  </div>
                )

              })

              :
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <RiseLoader
                color='#36d7b7'
                loading={Loading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </div>

          }


        </div>
        <div className="Body__Element__Container">

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
                        <p style={{ color: 'green', fontWeight: 'bold', fontSize: '14px' }}>${e.price} <span style={{textDecoration:'line-through',marginLeft:'10px',color:'red',fontSize:'12px'}}>$127</span></p>
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
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <RiseLoader
                color='#36d7b7'
                loading={Loading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              </div>
          }


        </div>

      </div>

    </PageLayout>
  )
}
