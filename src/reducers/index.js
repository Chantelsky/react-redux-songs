import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: '..Baby One More Time',
      duration: '2:30',
    },
    {
      title: 'Don`t look back in anger',
      duration: '4:00',
    },
    {
      title: 'Shoop',
      duration: '3:10',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
