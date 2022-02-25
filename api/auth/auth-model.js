const db = require('../../data/dbConfig')

//resolves to an ARRAY with all users that match the filter condition
function findBy(filter) {
    return db('users').where(filter)
}
  
//resolves to the user { user_id, username } 
function findById(user_id) {
    return db('users')
        .select('user_id', 'username')
        .where('user_id', user_id).first()
}
  
//resolves to the newly inserted user { user_id, username }
async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}
  
  
module.exports = {
    findBy,
    findById,
    add,
}