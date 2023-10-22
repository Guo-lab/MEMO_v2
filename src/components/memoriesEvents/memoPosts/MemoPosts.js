import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import MemoPost from "./memoPost/MemoPost";
import useStyles from "./styles";

function MemoPosts(props) {
    const classes = useStyles();

    return (
        !props.memos.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {props.memos.map((memo) => (
                    <Grid key={memo.id} item xs={12} sm={6}>
                        <MemoPost onDelete={props.onDeleteMemo} onLike={props.onLikeMemo} memo={memo} setCurrentId={props.setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default MemoPosts;