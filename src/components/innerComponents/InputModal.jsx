import {
  Modal,
  Box,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const InputModal = ({
  open,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
  getOptionLabel = (opt) => opt,
  direction = "rtl",
}) => {
  
  return (
    <Modal 
      open={open} 
      onClose={onClose}
    >
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
        <Typography variant="h6" mb={2} color="aliceblue">
          {title}
        </Typography>

        <List
          sx={{
            maxHeight: "500px",
            overflow: "scroll",
            background: "var(--modal-background-color)",
            color: "rgb(247, 228, 244)",
            overflowX: "hidden",
            boxShadow: "0 0 15px var(--light-background)",
            borderRadius: "3px",
          }}
        >
          {options.map((option, index) => {
            const value = getOptionLabel(option);

            return (
              <ListItemButton
                key={index}
                //* if value is equal to choosed Brand or Province, the selected mode will be activated (Highlight the value section)
                selected={value === selectedValue}
                onClick={() => onSelect(value)}
                sx={{
                  borderBottom:
                    index !== options.length - 1
                      ? "2px solid aliceblue"
                      : "none",
                  "&:hover": { background: "rgba(0,0,0,0.4)" },
                  "&.Mui-selected": { backgroundColor: "red" },
                }}
              >
                <ListItemText dir={direction} primary={value} />
              </ListItemButton>
            );
          })}
        </List>

        <Box sx={{ textAlign: "right", mt: 2 }}>
          <Button variant="outlined" onClick={onClose}>
            خروج
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default InputModal;


// const InputModal = ({
//   open,
//   setOpen,
//   selectedProvince,
//   handleSelectProvince,
//   // setSelectedProvince,
//   // handleSelectBrand
// }) => {

//   return (
//     <Modal
//       open={open === "Provinces" ? true : false}
//       onClose={() => setOpen(null)}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 320,
//           bgcolor: "#750ca2",
//           borderRadius: 2,
//           boxShadow: 24,
//           p: 3,
//         }}
//       >
//         <Typography variant="h6" mb={2} color="background.paper">
//           استان مورد نظرتان را انتخاب کنید
//         </Typography>

//         <List
//           sx={{
//             maxHeight: "500px",
//             overflow: "scroll",
//             background: "var(--modal-background-color)",
//             color: "rgb(247, 228, 244)",
//             overflowX: "hidden",
//             boxShadow: "0 0 15px var(--light-background)",
//             borderRadius: "3px",
//           }}
//         >
//           {locations.map((opt, index) => (
//             <ListItemButton
//               key={opt}
//               selected={opt === selectedProvince}
//               onClick={() => handleSelectProvince(opt)}
//               sx={{
//                 borderBottom:
//                   index !== locations.length - 1
//                     ? "2px solid aliceblue"
//                     : "none",
//                 "&:hover": { background: "rgba(0,0,0,0.4)" },
//                 "&.Mui-selected": { backgroundColor: "red" },
//               }}
//             >
//               <ListItemText dir="ltr" primary={opt} />
//             </ListItemButton>
//           ))}
//         </List>

//         <Box sx={{ textAlign: "right", mt: 2 }}>
//           <Button
//             variant="outlined"
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               transition: "all 0.2s linear !important",
//               "&:hover": {
//                 background: " rgb(23, 176, 138) !important",
//                 color: "aliceblue",
//               },
//             }}
//             onClick={() => setOpen(null)}
//           >
//             خروج
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default InputModal;
