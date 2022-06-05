// ----------------------------------------------------------------------

export default function Drawer(theme) {
  return {
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.secondary.main,
          color: "#fff",
          border:'none'
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius:'40px 0 0 40px',
          position:'relative',
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color:'#000'
          },
          // "&:focus::before":{
          //   content:'""',
          //   width: 0,
          //   height: 0,
          //   borderTop: '25px solid transparent',
          //   borderRight: `30px solid ${theme.palette.secondary.darker}`,
          //   borderBottom:' 25px solid transparent',
          //   position:'absolute',
          //   top:-3,
          //   right:0,
          //   zIndex:-1,
          // },
          // "&:focus::after":{
          //   content:'""',
          //   width: 0,
          //   height: 0,
          //   borderTop: '25px solid transparent',
          //   borderRight: `30px solid ${theme.palette.secondary.darker}`,
          //   borderBottom:' 25px solid transparent',
          //   position:'absolute',
          //   top:3,
          //   right:0,
          //   zIndex:-1,
            
          // }
        },
      },
      selected: {}
    },
  };
}
