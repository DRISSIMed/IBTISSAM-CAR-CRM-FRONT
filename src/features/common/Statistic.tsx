import React from 'react'
import './Statistic.css'
import { useTranslation } from "react-i18next";

export default function Statistic() {
    const { t, i18n } = useTranslation();
    return (
        <div className='ContainerStatics'>

            <div className="subStatisticElement">
                <span className='value'> 10+ </span>
                <span className='label'> {t("tstatisticsyears")}</span>

            </div>
            <div className="subStatisticElement">
                <span className='value'> 100+ </span>
                <span className='label'> {t("tstatisticsNumberOfCars")}</span>

            </div>
            <div className="subStatisticElement"> 
                <span className='value'> 50K+</span>
                <span className='label'> {t("tstatisticsNumberOfClients")}</span>
            </div>
            <div className="subStatisticElement">
                <span className='value'> 45+ </span>
                <span className='label'> Years on the market</span>
            </div>


        </div>
    )
}
