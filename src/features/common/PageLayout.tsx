import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import pic from '../../Imgaes/profile.png'
import { FiUser, FiHome, FiRefreshCw, FiList } from "react-icons/fi";
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { Avatar } from 'primereact/avatar';
import './PageLayout.css'
import Footer from './Footer';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useTranslation } from "react-i18next";

interface Languages {
        name: string;
        value: string;
}
export default function PageLayout({ children, }: { children: React.ReactNode | React.ReactNode[]; }) {

        const navigate = useNavigate();
        const { t, i18n } = useTranslation();

        const items: MenuItem[] = [
                {
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        command: () => { navigate('/') },
                },
                {
                        label: 'Cars',
                        icon: 'pi pi-fw pi-car',
                        command: () => { navigate('/cars') }
                },
                {
                        label: 'Appartements',
                        icon: 'pi pi-fw pi-home',
                        command: () => { navigate('/appartement') }
                },
                {
                        label: 'Tour',
                        icon: 'pi pi-fw pi-spinner',
                        command: () => { navigate('/tour') }
                },
                {
                        label: 'Orders',
                        icon: 'pi pi-fw pi-list',
                        command: () => { navigate('/orders') }
                },
                {
                        label: 'Account',
                        icon: 'pi pi-fw pi-user',
                        command: () => { navigate('/account') }
                },
        ];

        const end = <img alt="logo" src={pic} height="40" className="mr-2"></img>;
        const [selectedLg, setSelectedLg] = useState<Languages | null>(null);
        const countries: Languages[] = [
                { name: 'English', value: 'en' },
                { name: 'French', value: 'fr' },
                { name: 'Arabic', value: 'ar' },
        ];
        const onClickLanguageChange = (e: any) => {
                const language = e.target.value;
                setSelectedLg(language);
                console.log(selectedLg);

                console.log(language);

                i18n.changeLanguage(language); //change the language
        }

        const countryOptionTemplate = (option: Languages) => {
                return (
                    <div className="flex align-items-center">
                        <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.value.toLowerCase()}`} style={{ width: '18px' }} />
                        <div>{option.name}</div>
                    </div>
                );
            };
            
        return (
                <>
                        <div className="card">
                                <div className='nav_log'>
                                        <div className='sub_item'>
                                                <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                                        </div>
                                        <div className='sub_item'>
                                                <Dropdown value={selectedLg} onChange={onClickLanguageChange} options={countries} optionLabel="name"
                                                 itemTemplate={countryOptionTemplate}       placeholder="Select lang" className="w-full md:w-14rem" />
                                        </div>
                                </div>
                                <Menubar model={items} />
                        </div>
                        <div className='Children_div'>
                                {children}
                        </div>
                        <Footer />
                </>
        )
}
