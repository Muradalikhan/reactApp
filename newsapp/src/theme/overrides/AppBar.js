// ----------------------------------------------------------------------

export default function AppBar(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor:'primary.main',
          boxShadow:'none',
        }
      }
    }
  };
}
