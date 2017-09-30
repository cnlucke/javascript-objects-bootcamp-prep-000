var playlist = new Object({ Madonna: "Like A Prayer" })

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  if (delete playlist.artistName) {
    console.log("true " + playlist)
  } else 
  console.log("false " + playlist)
  return playlist
}
