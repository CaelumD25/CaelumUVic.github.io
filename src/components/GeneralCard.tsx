import { ReactNode } from "react";
import { Card, CardContent, Divider, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export interface GeneralCard {
  title: string;
  imgSource: string;
  imgAlt: string;
  bodyText: string | ReactNode;
}

const GeneralCard = ({ title, imgSource, imgAlt, bodyText }: GeneralCard) => {
  return (
    <Card
      sx={{
        bgcolor: "rgba(0,0,0,0.02)",
        borderRadius: "1em",
        p: 4,
        m: "1em 1em 1em 0",
        boxShadow: "10px 0 20px #00000033",
        border: "10px black",
        "@media (min-width: 835px)": {
          mx: 0,
        },
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: "#81A1C1",
                fontSize: "1.5rem",
                fontWeight: "lighter",
              }}
            >
              {title}
            </Typography>
            <Divider
              sx={{
                height: "2px",
                bgcolor: "#3B4252",
                border: "none",
                mb: 2,
              }}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography
              component="div"
              sx={{
                fontSize: "1.1em",
                color: "#ECEFF4",
              }}
            >
              {bodyText}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Divider
              sx={{
                height: "2px",
                bgcolor: "#3B4252",
                border: "none",
                my: 2,
              }}
            />
            <Box
              component="img"
              src={imgSource}
              alt={imgAlt}
              title={imgAlt}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "1em",
                boxShadow: "6px 6px 12px 2px #00000033",
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GeneralCard;
