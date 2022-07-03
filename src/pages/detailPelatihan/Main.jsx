import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography variant="subtitle1" paragraph align="justify">
        
        This blog post shows a few different types of content that are supported and styled with
        Material styles. Basic typography, images, and code are all supported.Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
        consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. - Donec id elit non mi porta gravida at eget metus. -
        Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
        metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</Typography>

        <Typography variant="h6" gutterBottom>
        Pentingnya Digital Marketing
      </Typography>
      <Divider />
      <Typography variant="subtitle1" paragraph align="justify">
        
        This blog post shows a few different types of content that are supported and styled with
        Material styles. Basic typography, images, and code are all supported. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
        consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
        malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur. 
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros. </Typography>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
