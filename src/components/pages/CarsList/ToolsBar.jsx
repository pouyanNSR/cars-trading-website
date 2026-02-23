import {
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Divider,
} from "@mui/material";
import MainContext from "../../../context";

import { locations } from "../../../data/locations";

import { brands } from "../../../data/brands";

import styles from "./styles/ToolsBar.module.css";
import { useContext, useState } from "react";
import { postsInfo } from "../../../data/postsInfo";
import InputModal from "../../innerComponents/InputModal";
import CarsListPageInput from "../../innerComponents/CarsListPageInput";

const ToolsBar = () => {
  const {
    mode,
    open,
    setOpen,
    selectedProvince,
    setSelectedProvince,
    selectedBrand,
    setSelectedBrand,
  } = useContext(MainContext);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [openPrice, setOpenPrice] = useState(false);
  const [clicked, setClicked] = useState(false);

  // const [open, setOpen] = useState(null);
  // const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedBrand, setSelectedBrand] = useState("");

  // const handleSelectProvince = (value) => {
  //   setSelectedProvince(value);
  //   setOpen(null);
  // };
  // const handleSelectBrand = (value) => {
  //   setSelectedBrand(value);
  //   setOpen(null);
  // };
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  const applyFilter = () => {
    setOpenPrice(false);
  };

  const setFormattedPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };
  

  return (
    <Box className={styles["toolsbar__inner-container"]}>
      {/* Submit Button */}
      <Box
        className={`${styles["toolsbar__confirm-button-container"]} ${
          clicked ? styles["toolsbar__confirm-button-container--active"] : null
        }`}
      >
        <Button id={styles["toolsbar__confirm-button"]} onClick={handleClick}>
          اعمال فیلتر
        </Button>
      </Box>

      {/* Filters Container */}
      <Box mt={6} className={styles["toolsbar__filters-contianer"]}>
        {/* Province Input */}
        <Box className={styles["toolsbar__inner-filters-container"]}>
          <CarsListPageInput
            selectedValue={selectedProvince.carsListModal}
            onClick={() => setOpen("CarsListProvinces")}
            title="انتخاب استان"
          />

          {/* Modal */}
          <InputModal
            open={open === "CarsListProvinces"}
            onClose={() => setOpen(null)}
            title="استان مورد نظرتان را انتخاب کنید"
            options={locations}
            selectedValue={selectedProvince.carsListModal}
            onSelect={(value) => {
              setSelectedProvince((prev) => ({...prev,carsListModal:value}));
              setOpen(null);
            }}
            getOptionLabel={(opt) => opt.name}
            direction="ltr"
          />
          {/* <InputModal
            open={open}
            setOpen={setOpen()}
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince()}
            handleSelectProvince={handleSelectProvince()}
            handleSelectBrand={handleSelectBrand()}
          /> */}
        </Box>
        {/* Brand Input */}
        <Box className={styles["toolsbar__inner-filters-container"]}>
          <CarsListPageInput
            selectedValue={selectedBrand}
            onClick={() => setOpen("Brands")}
            title="انتخاب برند"
          />

          {/* Modal */}
          <InputModal
            open={open === "Brands"}
            onClose={() => setOpen(null)}
            title="برند مورد نظرتان را انتخاب کنید"
            options={brands}
            selectedValue={selectedBrand}
            onSelect={(value) => {
              setSelectedBrand(value);
              setOpen(null);
            }}
            getOptionLabel={(opt) => opt.name}
            direction="rtl"
          />

          {/* <InputModal
            open={open}
            setOpen={setOpen()}
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince()}
            handleSelectProvince={handleSelectProvince()}
            handleSelectBrand={handleSelectBrand()}
          /> */}
        </Box>
        <FormControl id={styles["toolsbar__price-select-box"]}>
          <InputLabel id="price-lable">حدود قیمت</InputLabel>
          <Select
            sx={{
              width: "65%",
              "& fieldset": {
                borderRadius: "38px",
                border: "2px solid purple",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "purple",
              },
            }}
            open={openPrice}
            labelId="price-lable"
            label="حدود قیمت"
            onOpen={() => setOpenPrice(true)}
            onClose={() => setOpenPrice(false)}
          >
            <MenuItem disableRipple sx={{ all: "unset", mt: 4 }}>
              <Box sx={{ display: "flex", gap: 1, px: 1 }}>
                <TextField
                  autoComplete="off"
                  label="حداقل(تومان)"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  // inputProps={{
                  //   startAdornment:(
                  //     <InputAdornment position="end">gggrrrr</InputAdornment>
                  //   )
                  // }}
                />
                <TextField
                  autoComplete="off"
                  label="حداکثر(تومان)"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </Box>
            </MenuItem>

            <MenuItem disableRipple>
              <Button id={styles["submit-price-button"]} onClick={applyFilter}>
                انتخاب قیمت
              </Button>
            </MenuItem>
          </Select>
        </FormControl>
        <Divider
          sx={{
            width: "290px",
            height: "1.4px",
            border: "1.4px solid grey",
            // boxShadow: "0 -1px 1px inset rgba(47, 47, 42, 0.21)",
          }}
        />
        <Box className={styles["toolsbar__info-container"]}>
          <Box className={styles["toolsbar__info-box"]}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginTop: "3px",
                marginRight: "4px",
              }}
            ></Box>
            <Typography color="text.light">پایین‌ترین قیمت:</Typography>
            {min === "" ? (
              <Typography color="text.primary">مشخص نشده</Typography>             
            ) : (
              <>
                <Typography
                  id="min"
                  className={styles["toolsbar__info"]}
                  color={
                    mode === "light" ? "purple" : "rgba(253, 201, 229, 0.85)"
                  }
                  fontFamily="shabnam"
                >
                  {" "}
                  {setFormattedPrice(min)}{" "}
                </Typography>
                <Typography
                  className={styles["toolsbar__info"]}
                  color={
                    mode === "light" ? "purple" : "rgba(253, 201, 229, 0.85)"
                  }
                >
                  {" "}
                  تومان
                </Typography>
              </>
            )}
          </Box>
          <Box className={styles["toolsbar__info-box"]}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "red",
                borderRadius: "50%",
                marginTop: "3px",
                marginRight: "4px",
              }}
            ></Box>
            <Typography color="text.light">بالاترین قیمت:</Typography>
            {max === "" ? (
              <Typography color="text.primary">مشخص نشده</Typography>             
            ) : (
              <>
                <Typography
                  className={styles["toolsbar__info"]}
                  color={
                    mode === "light" ? "purple" : "rgba(253, 201, 229, 0.85)"
                  }
                  id="min"
                  fontFamily="shabnam"
                >
                  {" "}
                  {setFormattedPrice(max)}{" "}
                </Typography>
                <Typography
                  className={styles["toolsbar__info"]}
                  color={
                    mode === "light" ? "purple" : "rgba(253, 201, 229, 0.85)"
                  }
                >
                  {" "}
                  تومان
                </Typography>
              </>
            )}
          </Box>
          <Box className={styles["toolsbar__info-box"]}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "blue",
                borderRadius: "50%",
                marginTop: "3px",
                marginRight: "4px",
              }}
            ></Box>
            <Typography color="text.light">تعداد خودروهای پیدا شده:</Typography>
            <Typography
              id="founded"
              className={styles["toolsbar__info"]}
              color={mode === "light" ? "purple" : "rgba(253, 201, 229, 0.85)"}
              fontFamily="shabnam"
            >
              {postsInfo.length}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolsBar;
