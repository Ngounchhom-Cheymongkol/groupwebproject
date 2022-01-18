import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles((theme)=>({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  TreeContainer:{
       width:"100%",
        height:"100vh",
        backgroundColor:"white",
        paddingTop:"100px",
        position:"sticky",
        top:"0",
  }
}));

export default function Treeview() {
  const classes = useStyles();

  return (
    <div className={classes.TreeContainer} style={{
        
    }}>
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
            <TreeItem nodeId="1" label="Major">
                <TreeItem nodeId="1.1" label="Engineeing" >
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="1.2" label="Science" >
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="1.3" label="Health" >
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="1.4" label="Language" >
                  <TreeItem nodeId="2" label="Calendar" />
                  <TreeItem nodeId="3" label="Chrome" />
                  <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="5" label="University">
                <TreeItem nodeId="2" label="Rupp" />
                <TreeItem nodeId="3" label="Norton" />
                <TreeItem nodeId="4" label="ITC" />
            </TreeItem>
            </TreeView>
    </div>
  );
}
