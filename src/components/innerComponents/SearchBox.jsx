import { useContext, useState } from "react";

import {
  ManageSearchRounded,
  TollRounded,
  MyLocationRounded,
  DirectionsCarFilledRounded,
} from "@mui/icons-material";

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
import styles from "./innerComponentsStyles/SearchBox.module.css";
import OutlineFocusInput from "../../commonCodes/OutlineFocusInput";
import MainContext from "../../context";

import { locations } from "../../data/locations";
import InputModal from "./InputModal";

const SearchBox = () => {
  // const theme = useTheme();

//   const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  const iconColors = {
    location: "red",
    model: "#4b10e0ff",
    price: "green",
  };

  // const getHover = (icon) => {
  //     if(icon === "location"){
  //         return {
  //             border:`2px solid ${iconColors.location}`
  //         }
  //     }
  //     else if(icon === "model"){
  //         return {
  //             border:`2px solid ${iconColors.model}`
  //         }

  //     }

  // }
  const {
    mode,
    open,
    setOpen,
    selectedProvince,
    setSelectedProvince,
  } = useContext(MainContext);

  return (
    <Grid
      className={` container ${styles["search-box"]} `}
      sx={{ backgroundColor: "var" }}
    >
      <Grid
        className={`row justify-content-center gy-2 gy-sm-0 ${styles["search-box__row"]}`}
      >
        <Grid
          className={` col-12 col-sm-6 col-md-6 col-lg-3 p-0 ${styles["search-box__col"]} ${styles["search-box__location-section"]}`}
        >
          <Box className={` ${styles["search-box__location-section-inner"]}`}>
            <Box
              sx={{
                backgroundColor: "background.main",
                // "&:hover":{...getHover("location")
              }}
              className={`p-0 ${styles["search-box__input"]}`}
              onClick={() => setOpen("SearchBoxProvinces")}
            >
              <Box
                id={styles["location__input-text"]}
                sx={{ color: "text.main" }}
              >
                {selectedProvince.landingpageModal || "انتخاب استان..."}
              </Box>
              <Box>
                <MyLocationRounded
                  className={styles["search-box__input-icon"]}
                  sx={{
                    color: mode === "light" ? iconColors.location : "text.main",
                  }}
                />
              </Box>
            </Box>
            <svg
              className={styles["downward-arrow-svg"]}
              xmlns="http://www.w3.org/2000/svg"
              fill={mode === "light" ? "rgb(80, 84, 89)" : "aliceblue"}
              height="8px"
              width="8px"
              viewBox="0 0 512.002 512.002"
            >
              <path
                d="M498.837,65.628c-7.957-3.328-17.152-1.472-23.253,4.629L256,289.841L36.416,70.257
                            c-6.101-6.101-15.275-7.936-23.253-4.629C5.184,68.913,0,76.721,0,85.34v106.667c0,5.675,2.24,11.093,6.251,15.083
                            l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251L505.751,207.09
                            c4.011-3.989,6.251-9.408,6.251-15.083V85.34C512,76.721,506.816,68.913,498.837,65.628z"
              />
            </svg>

            {/* Modal */}
            <InputModal
              open={open === "SearchBoxProvinces"}
              onClose={() => setOpen(null)}
              title="استان مورد نظرتان را انتخاب کنید"
              options={locations}
              selectedValue={selectedProvince.landingpageModal}
              onSelect={(value) => {
                setSelectedProvince((prev) => ({...prev,landingpageModal:value}));
                setOpen(null);
              }}
              getOptionLabel={(opt) => opt.name}
              direction="ltr"
            />
            {/* <Modal open={open} onClose={() => setOpen(false)}>
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
                                <Typography variant="h6" mb={2} color="white">
                                    استان مورد نظرتان را انتخاب کنید
                                </Typography>

                                <List sx={{
                                    maxHeight:"500px",
                                    overflow:"scroll",
                                    background:"var(--modal-background-color)",
                                    color:"rgb(247, 228, 244)",
                                    overflowX:"hidden",
                                    boxShadow:"0 0 15px var(--light-background)",
                                    borderRadius:'3px'
                                }}>
                                    {locations.map((location,index) => (
                                        <ListItemButton
                                            key={location}
                                            selected={location === selected}
                                            onClick={() => handleSelect(location)}
                                            sx={{borderBottom: index !== locations.length - 1 ?
                                            "2px solid aliceblue" : "none",
                                            "&:hover":{background:"rgba(0,0,0,0.4)"},
                                        }}
                                        >
                                            <ListItemText primary={location.name} />
                                        </ListItemButton>
                                    ))}
                                </List>

                                <Box sx={{ textAlign: "right", mt: 2 }}>
                                    <Button variant="outlined" onClick={() => setOpen(false)}
                                        className={styles["location__modal--close-button"]}
                                    >
                                        خروج
                                    </Button>
                                </Box>
                            </Box>
                        </Modal> */}
          </Box>
        </Grid>
        <Grid
          className={` col-12 col-sm-6 col-md-6 col-lg-2 p-0 ${styles["search-box__col"]} ${styles["search-box__model-section"]}`}
        >
          <Box className={styles["search-box__model-section-inner"]}>
            <DirectionsCarFilledRounded
              sx={{
                color: mode === "light" ? iconColors.model : "text.main",
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
              }}
              className={styles["search-box__input-icon"]}
            />
            <select
              style={{
                backgroundColor:
                  mode === "light" ? "rgb(231, 233, 234)" : "rgb(80, 84, 89)",
                color: mode === "light" ? "rgb(61, 61, 61)" : "aliceblue",
              }}
              className={`${styles["search-box__model__select-box"]} ${styles["input-hovering"]}`}
            >
              <option>انتخاب مدل</option>
              <option>کوپه</option>
              <option>سدان</option>
              <option>هاچبک</option>
            </select>
            <svg
              className={styles["downward-arrow-svg"]}
              style={{ marginLeft: "4px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill={mode === "light" ? "rgb(80, 84, 89)" : "aliceblue"}
              height="8px"
              width="8px"
              viewBox="0 0 512.002 512.002"
            >
              <path
                d="M498.837,65.628c-7.957-3.328-17.152-1.472-23.253,4.629L256,289.841L36.416,70.257
                            c-6.101-6.101-15.275-7.936-23.253-4.629C5.184,68.913,0,76.721,0,85.34v106.667c0,5.675,2.24,11.093,6.251,15.083
                            l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251L505.751,207.09
                            c4.011-3.989,6.251-9.408,6.251-15.083V85.34C512,76.721,506.816,68.913,498.837,65.628z"
              />
            </svg>
          </Box>
        </Grid>
        <Grid
          className={` col-12 col-sm-6 col-md-6 col-lg-2 p-0 ${styles["search-box__col"]} ${styles["search-box__price-section"]} ${styles["search-box__price-section--outline-focus-style"]}`}
        >
          <OutlineFocusInput section="price-input" placeholder="قیمت به ریال" />
        </Grid>
        <Grid
          className={` col-12 col-sm-6 col-md-6 col-lg-5 p-0 ${styles["search-box__col"]} ${styles["search-box__search-car-section"]} ${styles["search-box__price-section--outline-focus-style"]}`}
        >
          <OutlineFocusInput
            section="seaction-input"
            placeholder="جستجو در تمام آگهی ها ..."
          />
          <Button
            className={`rounded-0 ${styles.Button}`}
            variant="contained"
            endIcon={<ManageSearchRounded />}
          >
            <Typography variant="p">جستجو</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
