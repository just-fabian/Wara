import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CD945B",
    },
    secondary: {
      main: "#3D2C8D",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
      wordWrap: "break-word",
      wordBreak: "break-word",
    },
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: 18,
    h1: { fontFamily: "Bebas Neue, sans-serif" },
    h2: { fontFamily: "Bebas Neue, sans-serif" },
    h3: { fontFamily: "Bebas Neue, sans-serif" },
    h4: { fontFamily: "Bebas Neue, sans-serif" },
    h5: { fontFamily: "Bebas Neue, sans-serif" },
    h6: { fontFamily: "Bebas Neue, sans-serif" },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          overflowX: "hidden",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
          background: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: "50px",
          paddingRight: "50px",
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 40,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#CD945B",
            },
            "&:hover fieldset": {
              borderColor: "#3D2C8D",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3D2C8D",
            },
            "& .MuiInputBase-input": {
              color: "#000",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000",
          fontSize: "17px",
          "&.Mui-focused": {
            color: "#3D2C8D",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderColor: "#fff",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3D2C8D",
            },
            "&:hover fieldset": {
              borderColor: "#3D2C8D",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3D2C8D",
            },
            "& .MuiInputBase-input": {
              color: "#000",
            },
          },
        },
        icon: {
          color: "#CD945B",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3D2C8D",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3D2C8D",
          },
          "& .MuiInputBase-input": {
            color: "#000",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
        head: {
          fontWeight: "bold",
          backgroundColor: "#fff",
          color: "#fff",
        },
        body: {
          color: "#fff",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: "#000",
        },
        toolbar: {
          color: "#000",
        },
        actions: {
          color: "#000",
        },
        selectIcon: {
          color: "#000",
        },
        select: {
          color: "#000",
        },
        input: {
          color: "#000",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#CD945B",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#CD945B",
          color: "#ffffff",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            backgroundColor: "#2c4f6b",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#CD945B",
          color: "#ffffff",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c4f6b",
          color: "#ffffff",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#000",
          "&.Mui-selected": {
            backgroundColor: "#fff",
            color: "#000",
          },
          "&:hover": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
