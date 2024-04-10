function cd(artistName, albumName, totalSpilletid) {
  this.kunstnerNavn = artistName;
  this.albumNavn = albumName;
  this.totalSpilletid = totalSpilletid;
}
fetchData("/albums.json").then((data) => {
  let cds = [];
  for (let i = 0; i < data.length; i++) {
    let totalSpilletid = 0;
    for (let j = 0; j < data[i].trackList.length; j++) {
      totalSpilletid += data[i].trackList[j].trackTimeInSeconds;
    }
    const cd1 = new cd(
      data[i].artistName,
      data[i].albumName,
      totalSpilletid / 60
    );

    cds.push(cd1);
  }
  console.log(cds);
});
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
