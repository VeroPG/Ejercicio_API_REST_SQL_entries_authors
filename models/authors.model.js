const pool = require("../config/db_pgsql")
const queries = require('../queries/authors.queries') // Queries SQL




// GET (todos)
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } 
    return result
}

//GET (buscando por email)
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAuthorByEmail, [email]);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } 

    return result
}

//CREATE - post
const createAuthor = async (author) => {
    const {name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createAuthor, [name, surname, email, image]);
        result = {message: `Nuevo usuario: ${email}`};
    } catch (error) {
        console.log(error);
        throw error;
    } 
    return result;
}

//UPDATE - PUT
const updateAuthor = async (data) => {
    let {email, name, surname, newEmail, image} = data;
    if (newEmail == undefined) {newEmail = email};
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateAuthor, [email, name, surname, newEmail, image])
        result = {message: `Datos del usuario actualizados: ${email}`};
    } catch (error) {
        console.log(error);
        throw error;
    } 
    return result
}


//DELETE
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteAuthor, [email]);
        result = {message: `Se ha borrado '${email}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } 
    console.log(result);
    return result;
}




module.exports = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor    
  };
  