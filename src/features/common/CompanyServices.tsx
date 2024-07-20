import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getPublicImagePath } from '../common/Util'
export default function  CompanyServices(){

    const { t, i18n } = useTranslation();
    return (

        <div className="Services__Container">

                <div className="Services">

                            <div className="Service__Element">
                                    <div className="Service__Element__Image">
                                        <img src={getPublicImagePath('house.png')} />
                                        </div>
                                        <div className="Service__Element__Container">
                                        <h3>{t("RentApartment")}</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>
                                        </div>
                                        <div className="Serivce_Element__Button">
                                        <button><Link to='/appartement' className="link">{t("ttakeYourApp")}</Link></button>
                                    </div>
                            </div>


                            <div className="Service__Element">
                                <div className="Service__Element__Image">
                                    <img src={getPublicImagePath('audi.png')} />
                                    </div>

                                    <div className="Service__Element__Container">
                                    <h3>{t("RentCar")}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>

                                    </div>
                                    <div className="Serivce_Element__Button">
                                    <button><Link to='/cars' className="link">{t("ttakeYourCar")}</Link></button>
                                </div>
                            </div>


                            <div className="Service__Element">
                                <div className="Service__Element__Image">
                                    <img src={getPublicImagePath('tour.png')} />
                                    </div>

                                    <div className="Service__Element__Container">
                                    <h3>Tour</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis quia consectetur nisi aliquam illo voluptate possimus maiores, qui repellat odit aperiam fuga repudiandae, modi, esse nam ducimus? Ullam, quam!</p>

                                    </div>
                                    <div className="Serivce_Element__Button">
                                     <button><Link to='/tour' className="link">{t("ttakeYourTour")}</Link></button>
                                </div>
                            </div>
                            

                </div>

  </div>

    )
}