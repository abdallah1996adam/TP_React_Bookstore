import React from 'react'
import HTagCloud from "../../../components/tagCloud";
import BookList from "../../../components/bookList";
import imgPub from "../../../assets/images/pub.jpg";
import { useStyles} from './styles'
const Lateral = () => {
    const classes = useStyles()
    return (
        <div className={classes.lateral}>
            <img className={classes.imgPub} src={imgPub} alt="pub" />
             <HTagCloud /> 
             <BookList/>
        </div>
    )
}

export default Lateral
