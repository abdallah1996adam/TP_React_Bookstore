import React from 'react'
import Lateral from "../partials/Lateral";
import { useStyles} from './styles'



const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.Home}> 
         <div className={classes.HomeLeft}>
            Home</div>
        <div className={classes.HomeRight}>
            <Lateral  />
            </div>
        </div>
    )
}

export default Home
