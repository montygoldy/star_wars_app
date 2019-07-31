import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import actions from "../../Actions"; 

// Lib
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';

// Video
import bgImage from "../../../../assets/bgImage.jpg";

class HomePage extends Component {

  handleOnChange = (e) => {
    const { value } = e.target;
    if (value !==  "0") {
      this.props.getPeopleInfoRequest(value);
    }
  }

  render () {
    const { classes, currentMenu} = this.props;
    console.log("currentMenu: ", currentMenu);
    return (
      <div className="homepage flexCenter">
        {/* Bg Image */}
        <img src={bgImage} className="homepage__bgImage" alt="Bg Image" />
  
        {/* Logo */}
        <div className="homepage__contentWrapper">
          <div className="homepage__logo">
            <h1>Star Wars App</h1>
          </div>
  
          <div className="homepage__block">
            {/* Top Block */}
  
            <div className="select_wrapper">
              <h3> Please Select a Character </h3>
              <div className="flexCenter">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined">
                    Select Character
                  </InputLabel>
                  <Select
                    value={currentMenu}
                    onChange={this.handleOnChange}
                    input={<OutlinedInput labelWidth={200}name="star_character" id="outlined" />}
                  >
                    <MenuItem value="0">
                      <em>Select Character</em>
                    </MenuItem>
                    <MenuItem value={1}>Luke Skywalker</MenuItem>
                    <MenuItem value={4}>Darth Vader</MenuItem>
                    <MenuItem value={5}>Leia Organa</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
  
            <div className="select_wrapper">
              <h2> Please Select a Character </h2>
              <div className="flexCenter">
                
              </div>
            </div>
  
            <div className="select_wrapper">
              <h2> Please Select a Character </h2>
              <div className="flexCenter">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const materialStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "95%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const mapStateToProps = state => ({
  currentMenu: state.main.currentMenu,
});

const mapDispatchToProps = dispatch => ({
  getPeopleInfoRequest: (value) => dispatch(actions.getPeopleInfoRequest(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(materialStyles)(HomePage));
