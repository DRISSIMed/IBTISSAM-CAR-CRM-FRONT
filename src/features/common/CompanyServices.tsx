import { useTranslation } from "react-i18next";
import audi from '../../Imgaes/audi.png'
import house from '../../Imgaes/house.png'
import tourIcon from '../../Imgaes/tour.png'
import { Link } from "react-router-dom";

export default function  CompanyServices(){

    const { t, i18n } = useTranslation();
    return (

        <div className="Services__Container">

                <div className="Services">

                            <div className="Service__Element">
                                    <div className="Service__Element__Image">
                                        <img src={house} />
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
                                    <img src={audi} />
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
                                    <img src={tourIcon} />
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