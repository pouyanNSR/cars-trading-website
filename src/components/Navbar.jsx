import {Typography,Button} from "@mui/material"
import { ControlPointRounded } from '@mui/icons-material';
import car from "../assets/vecteezy_car-creative-icon-design_30784893.jpg"
import styles from "../styledModule/Navbar.module.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles["navbar"]}`} >
                <div className={`container-fluid ${styles["navbar__container"]}`}>
                    <a className="navbar-brand h-100 p-0 d-flex align-items-center justify-content-start" style={{gap:"10px"}} href="#">
                        <div style={{width:"60px",height:"55px"}}>
                            <img  src={car} alt="aks" width="100%" height="100%" style={{borderRadius:"50px",border:"1px solid white"}} />
                        </div>
                        <div className="d-flex align-items-center" style={{height:"69px"}}>
                            <p style={{fontSize:"35px",color:"whitesmoke",padding:0,margin:0,fontStyle:"italic",textShadow:"0 0 9px black"}}>KhodroBaz</p>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-bg-light-subtle gap-2">
                            <li className="nav-item">
                                <Link to={"home"} className="nav-link active text-light" aria-current="page" href="/">صفحه اصلی</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">حساب کاربری</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"cars"} className="nav-link text-light" href="#">همه آگهی ها</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">درباره ما</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">تماس با ما</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-light" href="#">جستجو</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> */}
                            {/* <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li> */}
                        </ul>
                        <Button sx={{ backgroundColor: "white",margin:"auto 17px" }} padding="auto 3px" variant='contained' endIcon={<ControlPointRounded />}>
                            <Typography variant='caption' color="black">
                                ثبت آگهی
                            </Typography>
                        </Button>
                        {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar