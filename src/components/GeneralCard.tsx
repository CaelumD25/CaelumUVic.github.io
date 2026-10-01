import { ReactNode } from "react";
import { Card, CardContent, Divider, Typography, Box, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

export interface GeneralCard {
  title: string;
  imgSource?: string;
  imgAlt?: string;
  bodyText: string | ReactNode;
  tags?: string[];
  linkHref?: string;
  linkLabel?: string;
  accentColor?: string;
}

const GeneralCard = ({
  title,
  imgSource,
  imgAlt,
  bodyText,
  tags,
  accentColor = "#88C0D0",
}: GeneralCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        sx={{
          bgcolor: "rgba(59, 66, 82, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(76, 86, 106, 0.4)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: `0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px ${accentColor}22`,
            borderColor: `${accentColor}40`,
          },
          // Subtle top accent line
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(to right, transparent, ${accentColor}66, transparent)`,
            opacity: 0,
            transition: "opacity 0.35s ease",
          },
          "&:hover::before": {
            opacity: 1,
          },
        }}
      >
        <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2}>
            {/* Title */}
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: "#81A1C1",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  mb: 0,
                }}
              >
                {title}
              </Typography>
            </Grid>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <Grid size={{ xs: 12 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: -0.5 }}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.72rem",
                        height: "22px",
                        bgcolor: "rgba(94, 129, 172, 0.15)",
                        borderColor: "rgba(94, 129, 172, 0.35)",
                        color: "#81A1C1",
                        letterSpacing: "0.03em",
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            )}

            <Grid size={{ xs: 12 }}>
              <Divider
                sx={{
                  my: 1,
                  border: "none",
                  height: "1px",
                  background: "linear-gradient(to right, transparent, rgba(76,86,106,0.6), transparent)",
                }}
              />
            </Grid>

            {/* Body */}
            <Grid size={{ xs: 12 }}>
              <Typography
                component="div"
                sx={{ fontSize: "1em", color: "#ECEFF4", lineHeight: 1.75 }}
              >
                {bodyText}
              </Typography>
            </Grid>

            {/* Image */}
            {imgSource && (
              <Grid size={{ xs: 12 }}>
                <Divider
                  sx={{
                    my: 1,
                    border: "none",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(76,86,106,0.6), transparent)",
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
                    borderRadius: "10px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                    mt: 1,
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.015)" },
                  }}
                />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GeneralCard;
