import {ReactNode} from "react";
import {Card, CardContent, Divider, Typography, Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {motion} from "framer-motion";

export interface GeneralCard {
  title: string;
  imgSource: string;
  imgAlt: string;
  bodyText: string | ReactNode;
  fadeInLeft?: boolean;
}

const GeneralCard = ({title, imgSource, imgAlt, bodyText, fadeInLeft}: GeneralCard) => {
  return (
    <motion.div initial={{opacity: 0, x: fadeInLeft ? -40 : 40}} transition={{duration: 2, delay: Math.random() / 4}}
                whileInView={{opacity: 1, x: 0}}><Card
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
          <Grid size={{xs: 12}}>
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

          <Grid size={{xs: 12}}>
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

          <Grid size={{xs: 12}}>
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
    </motion.div>
  );
};

export default GeneralCard;
