import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Collections.module.scss';
import { Jumbotron } from 'reactstrap';

function Collections (props) {

    const theData = props.albumState.data;
    const history = props.history;
    const contentGenerator = useCallback(() => {
        var theContent = []
        if (theData) {
           
            theContent = theData[0].data.map((el, index) => {
                var userName = "";
              
                for(let i of theData[1].data)
                {
                    if(el.userId === i.id)
                    {
                     userName = i.name;
                     break;
                    }
                    
                }

                return (
                    <div className={classes.albumStyles} key={index} onClick={()=>{history.push(`/Albums/Photos/${el.id}`)}}>
                        <section className={classes.section1}>
                            <Jumbotron>USERNAME : {userName}</Jumbotron>
                        </section>
                        <section className={classes.section2}>
                            <Jumbotron type="white">ALBUM TITLE</Jumbotron> <br />
                            <span style={{ textAlign: "center" }}>{el.title}</span>
                        </section>
                    </div>
                )
            })
        }
        else
            theContent.push(<div><br /><br /><br /><Jumbotron type="red"></Jumbotron></div>)
        return theContent;
    },[theData, history])

    return (
        <div>
            <div className={classes.wrapper}>
            {contentGenerator()}
            </div>
        </div>
    )
}

export default withRouter(Collections);