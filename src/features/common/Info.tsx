import React from 'react';
import CardInfo from './CardInfo';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getPublicImagePath } from '../common/Util'
function Info() {
    const { t, i18n } = useTranslation();
    return (
        <div style={{backgroundColor:'white'}}>
            <div className="card">
                <div className=" m-2 text-center py-5 px-3"> 
                    <div>
                        <h2 className="mb-1">{t("twithIBTISSAMCAR")}</h2>
                        <h4 className="mt-0 mb-3">{t("trentyourcar")}</h4>
                    </div>
                </div>
            </div>
            <Slides>
                <CardInfo
                    Icon={getPublicImagePath('Icon-24h-01.png')}
                    disc={t('tonline')}
                    disc2={t('tinourSite')}
                />
                <CardInfo
                    Icon={getPublicImagePath('Icon-Call-Center-01.png')}
                    disc={t('tonphone')}
                    disc2={t('tcallcenter')}
                />
                  <CardInfo
                    Icon={getPublicImagePath('Icon-Agence-01.png')}
                    disc={t('treseauxsociaux')}
                    disc2={`WhatsApp,Instagram...`}
                />
                <CardInfo
                    Icon={getPublicImagePath('Icon-Agence-01.png')}
                    disc={t('tdirectementDans')}
                    disc2={t('tagence')}
                />
            </Slides>
        </div>
    )
}
export default Info;

const Slides = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;