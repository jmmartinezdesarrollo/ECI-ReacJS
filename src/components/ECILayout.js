import Box from "@mui/material/Box";

export default function ECILayout({ children }) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%) 0% 0% no-repeat padding-box;",     
      }}
    >
      {children}
    </Box>
  );
}
