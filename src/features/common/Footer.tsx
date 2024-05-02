import React from "react";
import { BsInstagram , BsFacebook} from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import "./footer.css"


export default function Footer(props:any) {


    return (
        <div className="footer-dark" style={{marginTop:"15px"}} id={props.id}>
            <footer>
                <div style={{ display: 'grid', justifyContent: 'center'}}>
                    <div className="text-center ">
                        <div className="col item social">
                            <a href="#"><BsInstagram/></a>
                            <a href="#"><BsFacebook/></a>
                            <a href="#"><AiOutlineTwitter/></a>
                        </div>
                    </div>
                    <a className="text-center font-light mt-2 font-burtons copyright" >IbtissamCar ©2023 All rights reserved</a>
                </div>
            </footer>
        </div>
    );
}