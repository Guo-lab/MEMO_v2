import React, { useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import FileBase from "react-file-base64";


import useStyles from "./styles";

function MemoForm(props) {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: [],
        selectedFile: "",
        likeCount: 0,
        createdAt: new Date(),
    });

    const updateMemo = props.currentId ? props.memos.find((memo) => memo.id === props.currentId) : null;
    useEffect(() => {
        if (updateMemo) {
            setPostData(updateMemo);
        }
    }, [updateMemo]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(postData);
        if (props.currentId) {
            props.onUpdateMemo(props.currentId, postData);
            clear();
        } else {
            props.onAddMemo(postData);
            clear();
        }
    }
    function clear() {
        props.setCurrentId(null);
        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: [],
            selectedFile: "",
            likeCount: 0,
            createdAt: new Date(),
        });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{props.currentId ? 'Editing' : 'Creating' } a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default MemoForm;