import React from 'react';
import icon24 from '../../Imgaes/Icon-24h-01.png';
import iconCall from '../../Imgaes/Icon-Call-Center-01.png';
import iconDirect from '../../Imgaes/Icon-Agence-01.png';
import CardInfo from './CardInfo';
import styled from "styled-components";

function Info() {

    return (
        <>
            <div className="card">
                <div className=" m-2 text-center py-5 px-3">
                    <div>
                        <h4 className="mb-1">Avec IBTISSAM-CAR</h4>
                        <h6 className="mt-0 mb-3">Louer sa voiture facilement en réservant :</h6>
                    </div>
                </div>
            </div>
            <Slides>
                <CardInfo
                    Icon={icon24}
                    disc={`online 24h/24 `}
                    disc2={`sur notre site`}
                />
                <CardInfo
                    Icon={iconCall}
                    disc={`par téléphone`}
                    disc2={` sur notre call center`}
                />
                <CardInfo
                    Icon={iconDirect}
                    disc={`directement dans `}
                    disc2={`une de nos agences`}
                />
            </Slides>
        </>
    )
}
export default Info;

const Slides = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;