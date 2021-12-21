import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import imgCover1 from "../assets/images/cover1.jpg";
import imgCover2 from "../assets/images/cover2.jpg";
import imgCover3 from "../assets/images/cover3.jpg";
const styles = theme => ({
    styleDiv:{
        display:"flex",
        justifyContent:"end",
        width: "100%",
        alignItems:"center"
        },
    imgPub:{
        width: "3rem",
        height: "5rem",
        


    }, 
    styleImage:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"end",
        width: "100%",
        marginLeft: "1rem"
        },
} )   

class BookList extends Component {  
    
    render() { 
        const { classes } = this.props;
        
        return(
            <>
             <h3>Recently Recomended</h3>
            <div className={classes.styleDiv} >
            <div className={classes.styleImage} >
                <img className={classes.imgPub}  src={imgCover1} alt="pub" />
                <p>User</p>
            </div>
            <div className={classes.styleImage} >
                <img  className={classes.imgPub} src={imgCover2} alt="pub" />
                <p>User</p>
            </div>
            <div className={classes.styleImage} >
                <img className={classes.imgPub}  src={imgCover3} alt="pub" />
                <p>User</p>
            </div>
                
            </div>
         

            </>
        )
    }  
} 

export default  withStyles(styles, { withTheme: true })(BookList);;