import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, List, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/New_Profile_V2.svg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  // { label: "Blogs", to: "/blogs" }, // WIP
];

function NavItem({
  to,
  label,
  active,
  onClick,
}: {
  to: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link to={to} onClick={onClick} style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        style={{
          padding: "8px 16px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            color: active ? "#88C0D0" : "#D8DEE9",
            fontSize: "0.95rem",
            fontWeight: active ? 500 : 400,
            letterSpacing: "0.04em",
            transition: "color 0.2s ease",
            "&:hover": { color: "#88C0D0" },
          }}
        >
          {label}
        </Typography>
        <AnimatePresence>
          {active && (
            <motion.div
              key="underline"
              layoutId="nav-underline"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: 2,
                left: "16px",
                right: "16px",
                height: "2px",
                borderRadius: "2px",
                background: "linear-gradient(to right, #88C0D0, #A3BE8C)",
                transformOrigin: "left",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

function DrawerNavItem({
  to,
  label,
  active,
  onClick,
  delay,
}: {
  to: string;
  label: string;
  active: boolean;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link to={to} onClick={onClick} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            px: 3,
            py: 2,
            borderRadius: "8px",
            mx: 1,
            mb: 0.5,
            background: active
              ? "rgba(136, 192, 208, 0.12)"
              : "transparent",
            borderLeft: active
              ? "2px solid #88C0D0"
              : "2px solid transparent",
            transition: "all 0.2s ease",
            "&:hover": {
              background: "rgba(136, 192, 208, 0.08)",
            },
          }}
        >
          <Typography
            sx={{
              color: active ? "#88C0D0" : "#D8DEE9",
              fontSize: "1.05rem",
              fontWeight: active ? 500 : 400,
              letterSpacing: "0.04em",
            }}
          >
            {label}
          </Typography>
        </Box>
      </Link>
    </motion.div>
  );
}

function CustomNavbar() {
  const theme = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(59, 66, 82, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(76, 86, 106, 0.35)",
        height: "68px",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ minHeight: "68px !important", px: { xs: 2, md: 4 } }}>
        {/* Logo + Name */}
        <Link to={"/"} style={{ flexGrow: 1, textDecoration: "none" }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Caelum Dudek Logo"
              sx={{
                height: "42px",
                width: "auto",
                borderRadius: "50%",
                border: "1.5px solid rgba(136, 192, 208, 0.3)",
                boxShadow: "0 0 12px rgba(136, 192, 208, 0.15)",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "#8FBCBB",
                fontWeight: 300,
                letterSpacing: "0.08em",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Caelum Dudek
            </Typography>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        {isMobile ? (
          <Box>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Open navigation menu"
              onClick={() => toggleDrawer(true)}
              sx={{
                color: "#D8DEE9",
                "&:hover": { color: "#88C0D0", background: "rgba(136,192,208,0.08)" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              open={menuOpen}
              anchor="right"
              onClose={() => toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#3B4252",
                  backgroundImage: "none",
                  width: 260,
                  borderLeft: "1px solid rgba(76, 86, 106, 0.4)",
                  boxShadow: "-4px 0 30px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  onClick={() => toggleDrawer(false)}
                  sx={{ color: "#D8DEE9", "&:hover": { color: "#88C0D0" } }}
                  aria-label="Close navigation menu"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Profile in drawer */}
              <Box sx={{ px: 3, pb: 3, display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src={Logo}
                  alt="Caelum Dudek"
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(136,192,208,0.3)",
                  }}
                />
                <Typography sx={{ color: "#8FBCBB", fontWeight: 300, fontSize: "1rem" }}>
                  Caelum Dudek
                </Typography>
              </Box>

              <Box sx={{ height: "1px", background: "rgba(76,86,106,0.4)", mx: 2, mb: 2 }} />

              <List sx={{ px: 0 }}>
                {NAV_LINKS.map((link, i) => (
                  <DrawerNavItem
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    active={location.pathname === link.to}
                    onClick={() => toggleDrawer(false)}
                    delay={i * 0.06}
                  />
                ))}
              </List>
            </Drawer>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.to}
                to={link.to}
                label={link.label}
                active={location.pathname === link.to}
              />
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default CustomNavbar;
