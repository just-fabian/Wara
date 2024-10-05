import React, { useEffect, useState } from "react";
import {
  Modal,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { NASA_APOD_URL } from "../../utils/constants";
import { ApodData } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../utils/navigationConst";

const CuriousFactModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch(NASA_APOD_URL)
      .then((response) => response.json())
      .then((data) => {
        setApodData(data);
        setLoading(false);
        setOpen(true);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ maxWidth: 920, display: "flex", position: "relative" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 400,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {apodData && apodData.url && (
              <CardMedia
                component="img"
                sx={{ width: "40%" }}
                image={apodData.url}
                alt={apodData.title}
              />
            )}

            <CardContent
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 12,
                  color: "grey.500",
                }}
                color="primary"
              >
                <MdClose color="#000" />
              </IconButton>

              <Typography variant="h5" component="div" id="modal-title">
                Dato curioso del día
              </Typography>

              <Typography variant="subtitle1" component="div" id="modal-title">
                {apodData ? apodData.title : "Título no disponible"}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                id="modal-description"
                sx={{ marginTop: 1 }}
              >
                {apodData ? apodData.explanation : "Descripción no disponible"}
              </Typography>

              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {apodData && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(RoutesPath.CuriousFacts)}
                    style={{ color: "#fff" }}
                  >
                    Ver más
                  </Button>
                )}
              </Box>
            </CardContent>
          </>
        )}
      </Card>
    </Modal>
  );
};

export default CuriousFactModal;
