import React, { useState } from "react";
import { Component } from 'react';

import { TagCloud } from 'react-tagcloud'
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import AddIcon from "mdi-material-ui/PlusCircle";
import { width } from "@mui/system";

const styles =theme => ({

  outerTagCloud: {
     alignItems: "center",
    
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     
     width:"70%"
   
  },
  
  
});

class HtagCloud extends Component {  

    render() { 
       const { classes } = this.props;

const data = [
    { value: 'theatre', count: 25 },
    { value: 'girl Power', count: 18 },
    { value: 'romantic', count: 38 },
    { value: 'short', count: 30 },
    { value: 'long', count: 28 },
    { value: 'classics', count: 28 },
    { value: 'kids', count: 28 },
    { value: 'BD', count: 28 },
]
return (
 <div className={classes.outerTagCloud}>
     <h3>Find Your Book</h3>
   <TagCloud
        minSize={12}
        maxSize={25}
        tags={data}
        className="simple-cloud"/>
       </div> 
   );
  }
}

  
export default  withStyles(styles, { withTheme: true })(HtagCloud);;
