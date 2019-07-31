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
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    const {
      classes,
      currentMenu,
      peopleInfo,
      isLoading
    } = this.props;

    let lastSeenMovie;

    if (peopleInfo.films) {
      if (peopleInfo.films.length > 1) {
        peopleInfo.films.sort((a, b) => {
          return b.release_date.substring(0, 4) - a.release_date.substring(0, 4)
        })
        lastSeenMovie = peopleInfo.films[0];
      } else if (peopleInfo.films.length === 1) {
        lastSeenMovie = peopleInfo.films[0];
      } else {
        lastSeenMovie = {};
      }
    } 
   
    return (
      <div className="homepage">
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
              <div>
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
  
            <div className="movie_wrapper">
              <h3> Movies </h3>
              {
                isLoading 
                ? 
                <div className="flex-center">
                  <CircularProgress style={{ color: '#000' }} />
                </div>
                :
                <div className="movieTable">
                  <Table>
                    <TableHead style={{ backgroundColor: "#000",  }}>
                      <TableRow>
                        <TableCell style={{ color: "#fff", fontSize: 20, fontWeight: 'bold' }}>Movie</TableCell>
                        <TableCell style={{ color: "#fff", fontSize: 20, fontWeight: 'bold' }} align="right">Year</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ backgroundColor: "#fff",  }}>
                      {
                        (peopleInfo.films && peopleInfo.films.length) ? peopleInfo.films.map(film => (
                          <TableRow key={film.title}>
                            <TableCell component="th" scope="row" style={{ fontSize: 16, width: 100 }}>
                              {film.title}
                            </TableCell>
                            <TableCell align="right" style={{ fontSize: 16 }}>{film.release_date.substring(0, 4)}</TableCell>
                          </TableRow>
                        )) :
                        
                          <TableRow key="1">
                            <TableCell component="th" scope="row" style={{ fontSize: 16 }}>
                              No Data
                            </TableCell>
                            <TableCell align="right" style={{ fontSize: 16 }}></TableCell>
                          </TableRow>
                      }
                    </TableBody>
                  </Table>
                </div>
              }
            </div>
  
            <div className="select_wrapper">
              <h3> Last seen in </h3>
              {
                isLoading 
                ? 
                <div className="flex-center">
                  <CircularProgress style={{ color: '#000' }} />
                </div>
                :
                <div className="flexCenter">
                  <Table>
                    <TableBody style={{ backgroundColor: "#fff",  }}>
                      {
                        (peopleInfo.films && peopleInfo.films.length) ? 
                          <TableRow>
                            <TableCell component="th" scope="row" style={{ fontSize: 16, width: 100 }}>
                              {lastSeenMovie.title}
                            </TableCell>
                            <TableCell align="right" style={{ fontSize: 16 }}>{lastSeenMovie.release_date.substring(0, 4)}</TableCell>
                          </TableRow>
                          :
                        
                          <TableRow key="1">
                            <TableCell component="th" scope="row" style={{ fontSize: 16 }}>
                              No Data
                            </TableCell>
                            <TableCell align="right" style={{ fontSize: 16 }}></TableCell>
                          </TableRow>
                      }
                    </TableBody>
                  </Table>
                </div>
              }
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
  peopleInfo: state.main.peopleInfo,
});

const mapDispatchToProps = dispatch => ({
  getPeopleInfoRequest: (value) => dispatch(actions.getPeopleInfoRequest(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(materialStyles)(HomePage));
