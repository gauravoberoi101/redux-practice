import React, { Component } from 'react'
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
  render() {
	console.log('this.props',this.props)
	return (
	  <div>
		{this.props.songs.map(eachSong=>{
			return (<>
				<div>{eachSong.title}</div>
				<div>{eachSong.duration}</div>
				<button onClick={()=>this.props.selectSong(eachSong)}>Select Song</button>
				<hr/>
				</>
			)
		})}
		
	  </div>
	)
  }
}

const mapStateToProps = (state) =>{
	console.log('state',state)
	return state
}

export default connect(mapStateToProps, {selectSong:selectSong})(SongList)