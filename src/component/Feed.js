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
      <Post title="What To Do In London" img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      {/* <Footer></Footer> */}
    </Container>
  );
};

export default Feed;
