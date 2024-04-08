const queries = {
  getAllEntries: `SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image    
  FROM entries AS e
  INNER JOIN authors AS a
  ON e.id_author=a.id_author
  ORDER BY e.id_entry;`,

  updateEntry:
  `UPDATE entries
  SET title=$2, content=$3, id_author=(SELECT id_author FROM authors WHERE email=$4), category=$5 
  WHERE title = $1;`,
  
  deleteEntry:`DELETE *
  FROM entries AS e 
  WHERE e.title=$1;`,

  createEntry:
  `INSERT INTO entries(title,content,id_author,category) 
  VALUES
  ($1,$2,(SELECT id_author FROM authors WHERE email=$3),$4)`,
  
  deleteEntry:
  `DELETE
  FROM entries
  WHERE title = $1;`,
}

module.exports = queries;