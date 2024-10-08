import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

import './PageLayout.css'
import Footer from './Footer';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useTranslation } from "react-i18next";
import { getPublicImagePath } from '../common/Util'

interface Languages {
        name: string;
        value: string;
}
export default function PageLayout({ children, }: { children: React.ReactNode | React.ReactNode[]; }) {

        const navigate = useNavigate();
        const { t, i18n } = useTranslation();
        const[oldScrollY,setOldScrollY]=useState(0)
        const onNavigate=()=>{
                if(window.scrollY > oldScrollY) {
                        setArrowPosition(<a href="#DOWN"><img src={getPublicImagePath('arrowDown.png')} onClick={onNavigate} id="arrow"/></a>)
                    } else {
                        setArrowPosition(<a href="#TOP"><img src={getPublicImagePath('arrowTop.png')} onClick={onNavigate} id="arrow"/></a>)
                    }
                    setOldScrollY(window.scrollY)
              
               
        }

        const [arrowPosition,setArrowPosition]=useState(<a href='#DOWN'><img src={getPublicImagePath('arrowDown.png')} onClick={onNavigate} id="arrow"/></a>);

        const items: MenuItem[] = [
                {      //{t("RentApartment")}
                        label: t("thome"),
                        icon: 'pi pi-fw pi-home',
                        command: () => { navigate('/') },
                },
                {
                        label:  t("tcar"),
                        icon: 'pi pi-fw pi-car',
                        command: () => { navigate('/cars') }
                },
                {
                        label: t("tappartements"),
                        icon: 'pi pi-fw pi-home',
                       // command: () => { navigate('/appartement') }
                },
                {
                        label: t("ttours"),
                        icon: 'pi pi-fw pi-spinner',
                        command: () => { navigate('/tour') }
                },
                {
                        label:t("torders") ,
                        icon: 'pi pi-fw pi-list',
                    //    command: () => { navigate('/orders') }
                },
                {
                        label: t("taccount") ,
                        icon: 'pi pi-fw pi-user',
                   //     command: () => { navigate('/account') }
                },
        ];

        const end = <img alt="logo" src={getPublicImagePath('profile.png')} height="40" className="mr-2"></img>;
        const [selectedLg, setSelectedLg] = useState<Languages | null>();
        const countries: Languages[] = [
                { name: 'English', value: 'en' },
                { name: 'French', value: 'fr' },
                { name: 'Arabic', value: 'ar' },
        ];
        const onClickLanguageChange = (e: any) => {
                const language = e.target.value;
                setSelectedLg(language);
                console.log(selectedLg);

                console.log("TARGET",language);

                i18n.changeLanguage(language); //change the language
        }

        const countryOptionTemplate = (option: Languages) => {
                return (
                    <div className="options__languges">
                        <div style={{width:30,display:"flex",justifyContent:"center"}}>{option.name}</div>
                    </div>
                );
            };

     
        return (
                <>
                        <div className="card">
                                <div className='nav_log' id="TOP">
                                  
                                        <div className='sub_item'>
                                                <div className='sub_item_item'>
                                                        <img src={getPublicImagePath('location.png')} alt="" />
                                                        <p>Marrakech,rue n°12</p>
                                                </div>
                                               
                                                <div className='sub_item_item'>
                                                        <img src={getPublicImagePath('horloge.png')} alt="" />
                                                        <p>{t("tOvert")}</p>
                                                </div>
                                        </div>
                                        <div className='sub_item'>
                                                <div className="flags__container">
                                                        <img src={getPublicImagePath('maroc.png')} alt="" />
                                                        <img src={getPublicImagePath('france.png')} alt="" />
                                                        <img src={getPublicImagePath('english.png')} alt="" />
                                                        <img src={getPublicImagePath('monde.png')} alt="" />
                                                </div>

                                        </div>

                                        <div className='sub_item'>
                                  
                                                <Dropdown value={selectedLg} onChange={onClickLanguageChange} options={countries} optionLabel="name"
                                                 itemTemplate={countryOptionTemplate}  placeholder='Select lang'  className="w-full md:w-14rem" />
                                               
                                        </div>
                                </div>
                                <Menubar model={items} />
                        </div>
                        <div className='Children_div'>
                                {children}
                        </div>
                        <div className='WhatsApp__Container'>
                                <div className="item">
                                         <img src={getPublicImagePath('whatsapp.png')} alt="" />
                                 </div>

                                 <div className="item">
                                       {arrowPosition}
                                 </div>
                               
                               
                        </div>
                        <div className='Footer'>
                          <Footer id="DOWN" />
                        </div>
                        
                </>
        )
}
