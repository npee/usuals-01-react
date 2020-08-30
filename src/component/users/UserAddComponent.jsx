import React, {Component} from "react";
import ApiService from "../../ApiService";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";

const useStyles = () => ({
    typoGraphy: {
        display: 'flex',
        justifyContent: 'center'
    },
    select: {
        margin: 6,
        minWidth: 120
    },
    textField: {
        margin: 6,
    },
    itemField: {
        minWidth: 500
    },
});

class UserAddComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            password: '',
            userName: '',
        };
    }

    // componentDidMount() {
    //     this.reloadUserList();
    // }
    //
    // reloadUserList = () => {
    //     ApiService.fetchUsers().then( res => {
    //         this.setState({
    //             users: res.data.list,
    //         })
    //     }).catch( err => {
    //         console.log('reloadedUserList() Error!', err);
    //     });
    // }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    home = () => {
        this.props.history.push('/');
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            userId: this.state.userId,
            password: this.state.password,
            userName: this.state.userName,
        }

        ApiService.addUser(user).then( res => {
            console.log(res.data.list);
            this.setState({
                message: '사용자가 등록되었습니다.'
            });
            alert(this.state.message);
            this.props.history.push('/all-users');
        }).catch( err => {
            console.log('saveUser() Error!', err);
        });
    }

    render() {
        const classes = useStyles();

        return (
            <Container maxWidth="sm">
                <Typography variant="h4" style={classes.typoGraphy}>사용자 등록</Typography>
                <Button variant="contained" color="primary" onClick={this.home}>초기 화면으로</Button>
                {/*<FormGroup row>*/}
                {/*    <FormControl style={classes.select}>*/}
                {/*        <InputLabel id="year-list">연도</InputLabel>*/}
                {/*        <Select labelId="year-lists" name="year" value={this.state.year} onChange={this.handleChange}>{this.setOption(years())}</Select>*/}
                {/*    </FormControl>*/}
                {/*    <FormControl style={classes.select}>*/}
                {/*        <InputLabel id="nth-list">회차</InputLabel>*/}
                {/*        <Select labelId="nth-list" name="nth" value={this.state.nth} onChange={this.handleChange}>{this.setOption(nths)}</Select>*/}
                {/*    </FormControl>*/}
                {/*    <FormControl style={classes.select}>*/}
                {/*        <InputLabel id="subject-list">과목명</InputLabel>*/}
                {/*        <Select labelId="subject-list" name="subjectId" value={this.state.subjectId} onChange={this.handleChange}>{this.setSubject(subjects())}</Select>*/}
                {/*    </FormControl>*/}
                {/*</FormGroup>*/}
                <FormGroup>
                    <TextField required label="아이디" type="text" name="userId" placeholder="아이디를 입력해주세요"
                               fullWidth margin="normal" style={classes.textField} value={this.state.question} onChange={this.handleChange} />
                    <TextField required label="비밀번호" type="text" name="password" placeholder="비밀번호를 입력해주세요"
                               fullWidth margin="normal" style={classes.textField} value={this.state.question} onChange={this.handleChange} />
                    <TextField required label="이름" type="text" name="userName" placeholder="이름을 입력해주세요"
                               fullWidth margin="normal" style={classes.textField} value={this.state.image} onChange={this.handleChange} />
                </FormGroup>
                {/*<FormGroup>{this.setItem(this.state.items)}</FormGroup>*/}
                <Button variant="contained" color="primary" onClick={this.saveUser}>저장</Button>
            </Container>
        );
    }


}

export default withStyles(useStyles)(UserAddComponent);
