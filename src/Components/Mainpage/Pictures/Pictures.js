import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import useFetch from './../../../Utils/Hooks/useFetch';
import classes from './Pictures.module.scss';
import { Jumbotron, Button, Modal } from 'reactstrap';

function Pictures (props) {

    const [photoState, photoCall] = useFetch();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [url, setUrl] = useState("");

    const onClickHandler = useCallback((theURL) => {
        setModal(true);
        setUrl(theURL);
    },[setModal, setUrl])

    useEffect(() => {
        photoCall(["https://jsonplaceholder.typicode.com/photos"]);
    }, [photoCall])

    const theData = photoState.data;
    const theID = props.match.params.id;
    const photoDomGenerator = useCallback(() => {
        var theContent = [];
        if (theData) {
            theContent = theData[0].data.map((el, index) => {
                if (el.albumId === theID) {
                    return (
                        <div className={classes.imageBox}>
                            <img src={el.thumbnailUrl} alt="NO_IMAGE" />
                            <div className={classes.imageTitle}>
                                <span> {el.title}  </span>
                            </div>
                            <div className={classes.hoverSection}>
                                <Button onClickHandler={()=>{onClickHandler(el.url)}}>VIEW</Button>
                            </div>
                        </div>
                    )
                }
            })
        }
        return theContent;
    },[theData, theID, onClickHandler])

    return (
        <div className={classes.wrapper}>
            <Modal toggle={toggle} url={url}></Modal>
            <div style={{ textAlign: "center" }}><Jumbotron>Pictures of album : {props.match.params.id}</Jumbotron></div>
            <div className={classes.imageArray}>
                {photoDomGenerator()}
            </div>
        </div>
    )
}

export default withRouter(Pictures);