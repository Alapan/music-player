import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import '../scss/TrackList.scss';

export default class TrackList extends React.Component {

  render() {
    return (
      <Paper className='paper'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>Artist</TableCell>
              <TableCell align='left'>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.musicFiles.map(({name, artist, duration}, i) => (
                <TableRow key={i}>
                  <TableCell align='left'>{name}</TableCell>
                  <TableCell align='left'>{artist}</TableCell>
                  <TableCell align='left'>{duration}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TrackList.propTypes = {
  musicFiles: PropTypes.array.isRequired
};

