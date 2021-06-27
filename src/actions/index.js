/**
 * @returns an action
 * named export allows us to export many differenct functions from a singe file
 */
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
