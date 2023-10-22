import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memoriesImg from "../images/memories.png";
import MemoPosts from "../components/memoriesEvents/memoPosts/MemoPosts";
import MemoForm from "../components/memoriesEvents/memoForm/MemoForm";
import useStyles from "./styles/memoStyles";
import { useNavigate } from "react-router-dom";

function MemoriesPage() {

    const classes = useStyles();
    const history = useNavigate();
    const [loadedMemos, setLoadedMemos] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        fetch(
            process.env.REACT_APP_FIREBASE_API_KEY + "/memories.json"
        )
        .then((response) => {return response.json();})
        .then((responseData) => {
            const memos = [];
            for (const key in responseData) {
                const memo = {id: key, ...responseData[key],};
                memos.push(memo);
            }
            setLoadedMemos(memos);
        });
    }, []);

    function addMemoHandler(memoData) {
        // console.log(memoData);
        fetch(
            process.env.REACT_APP_FIREBASE_API_KEY + "/memories.json",
            {
                method: "POST",
                body: JSON.stringify(memoData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history(0);
        });
    }
    function updateMemoHandler(id, memoData) {
        fetch(
            process.env.REACT_APP_FIREBASE_API_KEY + `/memories/${id}.json`,
            {
                method: "PATCH",
                body: JSON.stringify(memoData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history(0);
        });
    }
    function deleteMemoHandler(id) {
        fetch(
            process.env.REACT_APP_FIREBASE_API_KEY + `/memories/${id}.json`,
            {
                method: "DELETE",
            }
        ).then(() => {
            history(0);
        });
    }


    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memoriesImg} alt="memories" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <MemoPosts onDeleteMemo={deleteMemoHandler} onLikeMemo={updateMemoHandler} memos={loadedMemos} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MemoForm onAddMemo={addMemoHandler} onUpdateMemo={updateMemoHandler} memos={loadedMemos} currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default MemoriesPage;