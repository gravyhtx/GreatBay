var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Entombment of a Machine",
      artist: "Job for a Cowboy",
      genre: "doom metal"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateSong AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.table(query.sql);
}

function updateSong() {
  console.log("Updating genre\n");
  var query = connection.query(
    "UPDATE Songs SET ? WHERE ?",
    [
      {
        // update with some value
        genre: "heavy metal"
      },
      {
        // where the data is found
        artist: "Black Sabbath"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song updated!\n");
      // Call deleteSong AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all disco songs...\n");
  connection.query(
    "DELETE FROM Songs WHERE ?",
    {
      genre: "disco"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Songs deleted!\n");
      // Call readSongs AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all Songs...\n");
  connection.query("SELECT * FROM Songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
