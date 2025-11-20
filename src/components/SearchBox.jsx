
import { useState } from 'react'

import { ManageSearchRounded, TollRounded, MyLocationRounded, DirectionsCarFilledRounded } from '@mui/icons-material';
import {red,orange} from "@mui/material/colors"
// import SvgArrow from "../assets/down-arrow-svgrepo-com (1).svg"
import styles from "../styledModule/SearchBox.module.css"
import {
    Modal,
    Grid,
    Box,
    Typography,
    Button,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";

const SearchBox = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const options = [
        "آذربایجان شرقی",
        "آذربایجان غربی",
        "تهران",
        "مازندران",
        "گیلان",
        "اردبیل",
        "فارس",
        "مرکزی",
        "اصفهان",
        "خراسان رضوی",
        "البرز",
        "خراسان جنوبی",
    ];

    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
    };

    return (
        <Grid className={` container ${styles["search-box"]} `}>
            <Grid className={`row justify-content-center gy-2 gy-sm-0 ${styles["search-box__row"]}`}>
                <Grid className={` col-12 col-sm-6 col-md-6 col-lg-3 p-0 ${styles["search-box__col"]} ${styles["search-box__location-section"]}`} style={{ backgroundColor: "yellow" }}>
                    <div className={` ${styles["search-box__location-section-inner"]}`}>
                        {/* شبیه به سلکت */}
                        <div
                            id={styles["search-box__location__select-tag"]}
                            className={`form-select p-0 ${styles["search-box__input"]}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpen(true)}
                        >
                            <div id={styles["location__input-text"]}>{selected || "انتخاب استان..."}</div>
                            <div><MyLocationRounded className={styles["search-box__input-icon"]} sx={{ color: "red" }} /></div>

                        </div>
                        <svg className={styles["downward-arrow-svg"]} xmlns="http://www.w3.org/2000/svg" fill="#373636" height="8px" width="8px" viewBox="0 0 512.002 512.002">
                            <path d="M498.837,65.628c-7.957-3.328-17.152-1.472-23.253,4.629L256,289.841L36.416,70.257
                            c-6.101-6.101-15.275-7.936-23.253-4.629C5.184,68.913,0,76.721,0,85.34v106.667c0,5.675,2.24,11.093,6.251,15.083
                            l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251L505.751,207.09
                            c4.011-3.989,6.251-9.408,6.251-15.083V85.34C512,76.721,506.816,68.913,498.837,65.628z"/>
                        </svg>

                        {/* Modal */}
                        <Modal open={open} onClose={() => setOpen(false)}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: 320,
                                    bgcolor: "#750ca2",
                                    borderRadius: 2,
                                    boxShadow: 24,
                                    p: 3,
                                }}
                            >
                                <Typography variant="h6" mb={2} color="background.paper">
                                    استان مورد نظرتان را انتخاب کنید
                                </Typography>

                                <List sx={{
                                    maxHeight:"500px",
                                    overflow:"scroll",
                                    background: `linear-gradient(217deg, rgba(226, 64, 255, 0.9), transparent 80.71%),
                                    linear-gradient(127deg, rgb(0 0 255 / 0.8), transparent 80.71%),
                                    linear-gradient(336deg, rgba(55, 220, 160, 0.9), transparent 80.71%)`,
                                    color:"rgb(247, 228, 244)",
                                    overflowX:"hidden",
                                    boxShadow:"0 0 13px whitesmoke",
                                    borderRadius:'3px'
                                }}>
                                    {options.map((opt,index) => (
                                        <ListItemButton
                                            key={opt}
                                            selected={opt === selected}
                                            onClick={() => handleSelect(opt)}
                                            sx={{borderBottom: index !== options.length - 1 ?
                                            "2px solid aliceblue" : "none",
                                        }}
                                        >
                                            <ListItemText primary={opt} />
                                        </ListItemButton>
                                    ))}
                                </List>

                                <Box sx={{ textAlign: "right", mt: 2 }}>
                                    <Button variant="outlined" onClick={() => setOpen(false)}
                                        className={`d-flex justify-content-start ${styles["location__modal--close-button"]}`}
                                    >
                                        خروج
                                    </Button>
                                </Box>
                            </Box>
                        </Modal>
                        {/* <div
                            className="modal fade"
                            id="selectModal"
                            tabIndex="-1"
                            aria-labelledby="selectModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="selectModalLabel">
                                            Select an Option
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="list-group">
                                            {options.map((opt) => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    className={`list-group-item list-group-item-action ${opt === selected ? "active" : ""
                                                        }`}
                                                    onClick={() => handleSelect(opt)}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </Grid>
                <Grid className={` col-12 col-sm-6 col-md-6 col-lg-2 p-0 ${styles["search-box__col"]} ${styles["search-box__model-section"]}`} style={{ backgroundColor: "green" }}>
                    <div className={styles["search-box__model-section-inner"]}>
                        <DirectionsCarFilledRounded style={{ position: "absolute", top: "50%", right: "8px", transform: "translateY(-50%)" }}
                            className={styles["search-box__input-icon"]} sx={{ color: "blue" }} />
                        <select className={styles["model__select-tag"]}>
                            <option>انتخاب مدل</option>
                            <option>کوپه</option>
                            <option>Logout</option>
                        </select>
                        <svg className={styles["downward-arrow-svg"]} xmlns="http://www.w3.org/2000/svg" fill="#373636" height="8px" width="8px" viewBox="0 0 512.002 512.002">
                            <path d="M498.837,65.628c-7.957-3.328-17.152-1.472-23.253,4.629L256,289.841L36.416,70.257
                            c-6.101-6.101-15.275-7.936-23.253-4.629C5.184,68.913,0,76.721,0,85.34v106.667c0,5.675,2.24,11.093,6.251,15.083
                            l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251L505.751,207.09
                            c4.011-3.989,6.251-9.408,6.251-15.083V85.34C512,76.721,506.816,68.913,498.837,65.628z"/>
                        </svg>
                    </div>
                </Grid>
                <Grid className={` col-12 col-sm-6 col-md-6 col-lg-2 p-0 ${styles["search-box__col"]} ${styles["search-box__price-section"]} ${styles["search-box__price-section--outline-focus-style"]}`} style={{}}>
                    <input id={styles["search-box__price-input"]} className={`${styles["search-box__input"]} ${styles["search-box__price-input--outline-focus-style"]}`} type="text" placeholder="قیمت به ریال"
                        autoComplete="off" />
                    <span className={`${styles["bottom"]} ${styles["span"]}`}></span>
                    <span className={`${styles["right"]} ${styles["span"]}`}></span>
                    <span className={`${styles["top"]} ${styles["span"]}`}></span>
                    <span className={`${styles["left"]} ${styles["span"]}`}></span>
                    <TollRounded className={styles["search-box__input-icon"]} sx={{ color: "green" }} />
                </Grid>
                <Grid className={` col-12 col-sm-6 col-md-6 col-lg-5 p-0 ${styles["search-box__col"]} ${styles["search-box__search-car-section"]} ${styles["search-box__price-section--outline-focus-style"]}`} style={{}}>
                    <input id={styles["search-box__search-seaction-input"]} className={`${styles["search-box__price-input--outline-focus-style"]}`} placeholder={`جستجو در تمام آگهی ها ... `} type="search" autoComplete="off" />
                    <span className={`${styles["bottom"]} ${styles["span"]}`}></span>
                    <span className={`${styles["right"]} ${styles["span"]}`}></span>
                    <span className={`${styles["top"]} ${styles["span"]}`}></span>
                    <span className={`${styles["left"]} ${styles["span"]}`}></span>
                    <Button className={`rounded-0 ${styles.Button}`} variant="contained" endIcon={<ManageSearchRounded />}>
                        <Typography variant="p">
                            جستجو
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            {/* 
            <Grid spacing={2} className={styles.gridContainer}>
                <Grid xs={12} sm={6} md={6} lg={3} className={styles["search-box__col"]} sx={{ backgroundColor: "red" }}>
                    <Grid >
                        t
                    </Grid>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={3} className={styles["search-box__col"]} sx={{ backgroundColor: "green" }}>
                    <Grid >
                        t
                    </Grid>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={3} className={styles["search-box__col"]}sx={{ backgroundColor: "yellow" }}>
                    <Grid >
                        t
                    </Grid>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={3} className={styles.innerGrid}sx={{ backgroundColor: "blue" }}>
                    <Grid >
                        t
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    )
}

export default SearchBox