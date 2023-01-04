import {combineReducers} from 'redux';

const songsReducer = () =>{
	return [
		{title: "song1", duration:"02:11"},
		{title: "song2", duration:"02:11"},
		{title: "song3", duration:"02:11"},
	]
}

const selectedSongReducer = (selectedSong= null, action) =>{
	console.log('action',action)
	if(action.type === "SONG_SELECTED"){
		return action.payload
	}
	return selectedSong
}
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})