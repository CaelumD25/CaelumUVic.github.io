import Card from "../components/GeneralCard";
import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import website from "../assets/images/portfolio_website.png";
import it from "../assets/images/experience_IT.png";
import CustomNavbar from "../components/CustomNavbar.tsx";
import {Container, Box, Typography} from "@mui/material";
import Background from "../components/Background.tsx";
import Grid from "@mui/material/Grid2";
import {motion} from "framer-motion";


import Lottie from "react-lottie";
import animationData from "../assets/animations/rock-climb.json";
import {ReactNode} from "react";

interface ChildProps {
  children?: ReactNode;
}

function Title({children}: ChildProps) {

  return <Typography sx={{
    width: '100%',
    fontSize: {
      xs: 'clamp(2.5rem, 8vw, 4rem)',
      sm: 'clamp(3rem, 10vw, 6rem)',
    },
    fontWeight: 100,
    textAlign: 'center',
    lineHeight: 1.2,
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
  }} className={"title"}>
    {children ? children : ""}
  </Typography>
}

function TitleBody({children}: ChildProps) {

  return <span className={"subtitle"}>{children ? children : ""}</span>
}

function Home() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
//<MarkdownToHTML src={"content/Intro.md"}/>
// <Lottie
//                 style={{zIndex: "0"}}
//                 options={defaultOptions}
//                 height={400}
//                 width={400}
//               />
  return (
    <>
      <CustomNavbar/>
      <Box className={"home-banner"}>
        <Container>
          <Title>Caelum Dudek</Title>
          <TitleBody>Software Engineer</TitleBody>

        </Container>
      </Box>

      <Container className={"home"}>
        <Grid container spacing={2} sx={{marginVertical: "1rem"}}>
          <Grid size={{xs: 12, sm: 8}} sx={{marginTop: "1rem"}}>
            <Box>
              <Typography component="span">
                <a
                  className={"socials-link"}
                  href={"https://github.com/CaelumD25"}
                  rel="noreferrer"
                  target={"_blank"}
                  title={"Github"}
                >
                  <motion.svg
                    initial={{rotate: -360}}
                    animate={{rotate: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.1}}
                    className={"socials-img"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="96px"
                    height="96px"
                  >
                    <path
                      d="M 24 4 C 19.963209 4 16.192498 5.2011807 13.046875 7.2636719 A 1.50015 1.50015 0 1 0 14.691406 9.7714844 C 17.365783 8.0179755 20.556791 7 24 7 C 33.406292 7 41 14.593708 41 24 C 41 26.707746 40.36968 29.257322 39.248047 31.525391 A 1.5001887 1.5001887 0 0 0 41.9375 32.855469 C 43.257867 30.185538 44 27.174254 44 24 C 44 12.972292 35.027708 4 24 4 z M 15.800781 13.076172 C 14.472781 15.202172 15.273563 17.527813 15.726562 18.507812 C 14.637562 19.788813 14 21.334 14 23 C 14 26.78 17.280547 29.939391 21.685547 30.775391 C 20.376547 31.448391 19.399609 32.67225 19.099609 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043156 38.12245 7 31.665102 7 24 C 7 21.314402 7.6195896 18.783427 8.7246094 16.529297 A 1.50015 1.50015 0 0 0 7.4492188 14.351562 A 1.50015 1.50015 0 0 0 6.03125 15.208984 C 4.7302698 17.862854 4 20.851598 4 24 C 4 35.027708 12.972292 44 24 44 C 28.472909 44 32.618147 42.525863 35.951172 40.039062 A 1.5009817 1.5009817 0 1 0 34.15625 37.632812 C 32.617628 38.780793 30.876119 39.662932 29 40.240234 L 29 35.136719 C 29 33.228719 27.902453 31.591391 26.314453 30.775391 C 30.719453 29.939391 34 26.78 34 23 C 34 21.426 33.423406 19.961609 32.441406 18.724609 C 32.883406 17.356609 33.371219 14.953172 32.199219 13.076172 C 29.948219 13.076172 28.469672 14.622797 27.763672 15.591797 C 26.601672 15.213797 25.333 15 24 15 C 22.667 15 21.398328 15.213797 20.236328 15.591797 C 19.530328 14.622797 18.052781 13.076172 15.800781 13.076172 z"/>
                    Github
                  </motion.svg>
                </a>
                <a
                  className={"socials-link"}
                  href={"https://www.linkedin.com/in/caelum-dudek/"}
                  rel="noreferrer"
                  title={"LinkedIn"}
                  target={"_blank"}
                >
                  <motion.svg
                    initial={{rotate: -360}}
                    animate={{rotate: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.2}}
                    className={"socials-img"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="96px"
                    height="96px"
                  >
                    <path
                      d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
                    LinkedIn
                  </motion.svg>
                </a>
                <a
                  className={"socials-link"}
                  href={"https://social.vivaldi.net/@cdudek"}
                  target={"_blank"}
                  rel="noreferrer"
                  title={"Mastodon"}
                >
                  <motion.svg
                    initial={{rotate: -360}}
                    animate={{rotate: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.3}}
                    className={"socials-img"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="96px"
                    height="96px"
                  >
                    <path
                      d="M 15.9375 4.03125 C 12.917 4.0435 9.9179219 4.4269844 8.3574219 5.1464844 C 8.3574219 5.1464844 5 6.6748594 5 11.880859 C 5 18.077859 4.9955 25.860234 10.5625 27.365234 C 12.6945 27.938234 14.527953 28.061562 16.001953 27.976562 C 18.676953 27.825562 20 27.005859 20 27.005859 L 19.910156 25.029297 C 19.910156 25.029297 18.176297 25.640313 16.029297 25.570312 C 13.902297 25.495313 11.6615 25.335688 11.3125 22.679688 C 11.2805 22.432688 11.264625 22.182594 11.265625 21.933594 C 15.772625 23.052594 19.615828 22.420969 20.673828 22.292969 C 23.627828 21.933969 26.199344 20.081672 26.527344 18.388672 C 27.041344 15.720672 26.998047 11.880859 26.998047 11.880859 C 26.998047 6.6748594 23.646484 5.1464844 23.646484 5.1464844 C 22.000984 4.3779844 18.958 4.019 15.9375 4.03125 z M 12.705078 8.0019531 C 13.739953 8.0297031 14.762578 8.4927031 15.392578 9.4707031 L 16.001953 10.505859 L 16.609375 9.4707031 C 17.874375 7.5037031 20.709594 7.6264375 22.058594 9.1484375 C 23.302594 10.596438 23.025391 11.531 23.025391 18 L 23.025391 18.001953 L 20.578125 18.001953 L 20.578125 12.373047 C 20.578125 9.7380469 17.21875 9.6362812 17.21875 12.738281 L 17.21875 16 L 14.787109 16 L 14.787109 12.738281 C 14.787109 9.6362812 11.429688 9.7360938 11.429688 12.371094 L 11.429688 18 L 8.9765625 18 C 8.9765625 11.526 8.7043594 10.585438 9.9433594 9.1484375 C 10.622859 8.3824375 11.670203 7.9742031 12.705078 8.0019531 z"/>
                    Mastodon
                  </motion.svg>
                </a>
                <a
                  className={"socials-link"}
                  href={"https://www.instagram.com/caelum_dudek/"}
                  target={"_blank"}
                  rel="noreferrer"
                  title={"Instagram"}
                >
                  <motion.svg
                    initial={{rotate: -360}}
                    animate={{rotate: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.3}}
                    className={"socials-img"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="96px"
                    height="96px"
                  >
                    <path
                      d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                    Instagram
                  </motion.svg>
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, sm: 8}}><MarkdownToHTML src={"content/Intro.md"}/></Grid>
          <Grid size={{xs: 12, sm: 4}}><Lottie options={defaultOptions} width={"100%"}/></Grid>

        </Grid>

        <Grid container spacing={2}>
          <Grid size={{xs: 12, md: 6}}>
            <Typography variant="h2">Featured Project</Typography>
            <Card
              title={"This Website!"}
              imgSource={website}
              imgAlt={
                "Picture representing this Website, photos sourced from Nord"
              }
              bodyText={
                <MarkdownToHTML src={"content/projects/ProjectWebsite.md"}/>
              }
            />
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Typography variant="h2">Featured Experience</Typography>
            <Card
              title={"IT Coop in Regional Government"}
              imgSource={it}
              imgAlt={
                "Picture representing my experience in IT, photo from their twitter"
              }
              bodyText={
                <MarkdownToHTML
                  src={"content/experience/ExperienceITShort.md"}
                />
              }
            />
          </Grid>
        </Grid>
      </Container>
      <Background/>
    </>
  );
}

export default Home;
