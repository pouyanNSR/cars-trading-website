
import { createContext } from "react";


export default createContext({
    //error might me blow one
    mode:null,
    handleThemeChange: () => {},
    open:null,
    setOpen: () => {},
    selectedProvince:{
        landingpageModal:"",
        carsListModal:""
    },
    setSelectedProvince:() => {},
    selectedBrand:"",
    setSelectedBrand:() => {},
    
});
