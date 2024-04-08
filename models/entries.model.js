const pool = require("../config/db_pgsql")
const queries = require('../queries/entries.queries') // Queries SQL




// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();}
    }
    return result
}


//UPDATE - PUT 
const updateEntry = async (entry) => {
    let {title, newTitle, content, email, category} = entry;
    if (newTitle == undefined) {newTitle = title};
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      await client.query(queries.updateEntry, [
        title,
        newTitle,
        content,
        email,
        category,
      ]);
      result = {message: `OK! Has modificado la entrada con título: '${title}'`};
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
        if (client) {
            client.release();}
    }
    return result;
  };


// DELETE
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[title])
        result = {message: `OK! Has borrado la entrada que se titulaba: '${title}'`};
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();}
    }
    return result
}

//CREATE  - POST
const createEntry = async (entry) => {
    const {title, content, email, category} = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createEntry, [title, content, email, category]);
        result = {message: `Se ha creado la entry '${title}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        if (client) {
            client.release();}
    }
    return result;
}



module.exports = {
    getAllEntries,
    updateEntry,
    deleteEntry,
    createEntry
  };
  