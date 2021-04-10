import React, { useEffect } from 'react';
import classes from './Mainpage.module.scss'
import useFetch from './../../Utils/Hooks/useFetch';
import { Button } from 'reactstrap';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Collections from './Collections/Collections';
import Pictures from './Pictures/Pictures';

const Mainpage = (props) => {

    const [albumState, albumCall] = useFetch();

    const onClickEvent = () => {
        albumCall(["https://jsonplaceholder.typicode.com/albums", "https://jsonplaceholder.typicode.com/users"]);
    }

    useEffect(() => {

        if (albumState.data) {
            toast.configure({
                autoClose: 1200,
                draggable: true
            });

            toast.success("RECORDS FETCHED !!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [albumState])

    return (
        <div>
            <div className={classes.gridContainer}>
                <div className={classes.MainForm}>
                    <Switch>
                        <Route path={props.match.url} exact render={() => { return (<Button onClick={onClickEvent}>Load Photos</Button>) }}></Route>
                        <Route path={`${props.match.url}/Photos/:id`} exact render={() => { return (<Button onClick={() => { props.history.push("/Albums") }}>GO BACK &nbsp; </Button>) }}></Route>
                    </Switch>
                </div>
                <div className={classes.albumPhoto}>
                    <Switch>
                        <Route path={props.match.url} exact render={() => { return (<Collections albumState={albumState}></Collections>) }}></Route>
                        <Route path={`${props.match.url}/Photos/:id`} exact render={() => { return (<Pictures></Pictures>) }}></Route>
                        <Redirect from={`${props.match.url}/Photos/`} to={props.match.url}></Redirect>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Mainpage);