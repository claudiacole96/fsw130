const express = require("express");
const mysql = require("mysql");

//making a connection to mysql db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zaudia795',
    //default connection to newly created db
    database: 'pokemonDB'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Database Connection Established Succeffully');
});

//setup server
const app = express();

//create db
app.get('/CreateDB', (req, res) => {
    let SQL = 'CREATE DATABASE pokemonDB';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('pokemon db createed successfully!');
    });
});

//create new table
app.get('/CreateTable', (req, res) => {
    let SQL = 'CREATE TABLE pokemon (id int auto_increment, pokeindex int, name varchar(50), type varchar(50), pokelink varchar(250), favpoke int default (0), primary key(id) )';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('pokemon table was createed successfully!');
    });
});

//execute insert query
app.get('/InsertRow1', (req, res) => {
    let postVariables = {pokeindex: '1', name: 'Bulbasaur', type: 'grass', pokelink: 'https://www.pinclipart.com/picdir/middle/547-5473168_bulbasaur-png-transparent-image-pokemon-bulbasaur-clipart.png'}
    let SQL = 'INSERT INTO pokemon set ?';
    db.query(SQL, postVariables, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('first row inserted successfully!');
    });
});

//execute second insert query
app.get('/InsertRow2', (req, res) => {
    let postVariables = {pokeindex: '2', name: 'IvySaur', type: 'grass', pokelink: 'https://www.pngfind.com/pngs/m/316-3169797_pokemon-ivysaur-bulbasaur-hd-png-download.png'};
    let SQL = 'INSERT INTO pokemon set ?';
    db.query(SQL, postVariables, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('second row inserted successfully!');
    });
});

//execute select query
app.get('/GetPosts', (req, res) => {
    let SQL = 'SELECT * FROM pokemon';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query with no where clause executed successfully');
    });
});

//execute select query w/ where clause
app.get('/GetPost/:id', (req, res) => {
    let SQL = `SELECT * FROM pokemon where id = ${req.params.id}`;
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query with no where clause executed successfully');
    });
});

//update with a where clause
app.get('/UpdatePost/:id', (req, res) => {
    let newName = 'Bubsy';
    let SQL = `update pokemon set name = '${newName}' where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('update query to change name with where clause executed successfully')
    });
});

//update favpoke column if user adds pokemon to favorittes
app.get('/UpdateFavPoke/:id', (req, res) => {
    let SQL = `update pokemon set favpoke = 1 where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('update query to favpoke with where clause executed successfully')
    });
});

//delete query with where clause
app.get('/DeletePost/:id', (req, res) => {
    let SQL = `delete from pokemon where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('delete query with where clause executed successfully')
    });
});

//server listening
app.listen('4000', () => {
    console.log('Local Web Server is up and Running!');
});