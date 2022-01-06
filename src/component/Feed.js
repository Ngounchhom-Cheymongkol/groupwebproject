import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import Footer from "./Footer"
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Civil Engineering" img="https://allplan.asia/wp-content/uploads/2020/06/how-much-do-civil-engineer-make-1600x900.jpg"/>
      <Post title="Computer Science" img="https://www.pba.edu/_resources/images/images_on_pages/computer-system.jpg"/>
      <Post title="Ecology" img="https://eeb.arizona.edu/sites/default/files/styles/uaqs_full_width_lg/public/EEB%20Custom2.jpg?itok=lmmFxCG1&timestamp=1576301524"/>
      <Post title="Biology Engineering" img="https://www.studyinternational.com/wp-content/uploads/2020/06/shutterstock_691541056.jpg"/>
      <Post title="Health" img="https://www.slma.cc/wp-content/uploads/2018/01/SLMA_ProsPCP.jpg"/>
      <Post title="Language" img="https://s3e8p5g8.rocketcdn.me/wp-content/uploads/2018/11/english_major.jpg"/>
      {/* <Footer></Footer> */}
    </Container>
  );
};

export default Feed;
