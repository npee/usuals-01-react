import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    typoGraphy: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class UserListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null,
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers().then( res => {
            this.setState({
                users: res.data.list,
            })
        }).catch( err => {
            console.log('reloadedUserList() Error!', err);
        });
    }

    render() {
        const classes = useStyles();
        console.log(this.state);

        return (
            <div>
                <Typography variant="h4" style={ classes.typoGraphy }>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addQuiz}>퀴즈 등록</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">CreatedAt</TableCell>
                            <TableCell align="center">ModifiedAt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map( user =>
                            <TableRow key={user.userId}>
                                <TableCell align="center">{user.userNo}</TableCell>
                                <TableCell component="th" scope="user" align="center">{user.userId}</TableCell>
                                <TableCell align="center">{user.userName}</TableCell>
                                <TableCell align="center">{user.createdDate}</TableCell>
                                <TableCell align="center">{user.modifiedDate}</TableCell>
                                <TableCell align="center" onClick={() => this.deleteQuiz(user.quizId)}>
                                    <DeleteIcon />
                                </TableCell>
                                <TableCell align="center" onClick={() => this.editQuiz(user.quizId)}>
                                    <CreateIcon />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default withStyles(useStyles)(UserListComponent);
