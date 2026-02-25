
import { createContext } from "react";


export default createContext({
    //error might me blow one
    mode:null,
    handleThemeChange: () => {},
    open:null,
    setOpen: () => {},
    filtered:{
        min:"",
        max:"",
        selectedProvince:{
            landingpageModal: "",
            carsListModal: ""     
        },
        selectedBrand:""
    },
    setFiltered:() => {},
    filteredPosts:() => {}
    // selectedProvince:{
    //     landingpageModal:"",
    //     carsListModal:""
    // },
    // setSelectedProvince:() => {},
    // selectedBrand:"",
    // setSelectedBrand:() => {},
    // min:"",
    // setMin:() => {},
    // max:"",
    // setMax:() => {}
    
});
