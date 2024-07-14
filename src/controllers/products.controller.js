import {pool}  from "../db.js"

export const getProducts = async (req, res) => {
 try { 
  //throw new Error('DB Error')
 const [rows] = await pool.query('SELECT * FROM products')
 res.json(rows)
} catch (error) {
  return res.status(500).json({
    message:'Something goes wrong'
  })
}
}

export const getProduct = async (req, res) => {
  try {
     const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id])
  
  if (rows.length <= 0) return res.status(404).json({
    message: 'Product no found'
  })
      res.json(rows[0])
  } catch (error){
  return res.status(500).json({
    message: 'Something goes wrong'
  })    
  }
}

export const createProduct = async (req, res) => {    
    try{
      const {name, category, price, imgURL} = req.body
    const [rows] = await pool.query('INSERT INTO products (name, category, price, imgURL) VALUES (?, ?, ?, ?)', [name, category, price, imgURL])
  res.send({
    id: rows.insertId,
    name,
    category,
    price,
    imgURL
    })
    }catch (error) {
      return res.status(500).json({
        message: 'Something goes Wrong'
      })
    }
}

export const updateProduct = async (req, res) => {
  const{id} = req.params
  const {name, category, price, imgURL} = req.body
  try{
  const [result] = await pool.query('UPDATE products SET name = IFNULL(?, name), category = IFNULL(?, category), price = IFNULL(?, price), imgURL = IFNULL (?, imgURL) WHERE id = ?', [name, category, price, imgURL, id])
  if (result.affectedRows === 0) return res.status(404).json({
    message: 'Product no found'
  }) 
  const [rows] = await pool.query('SELECT * FROM products WHERE id =?', [id])
    res.json(rows[0])
  }catch(error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}


export const deleteProduct = async (req, res) => {
  const [result] = await pool.query('DELETE FROM products WHERE id = ?', [req.params.id])

  if (result.affectedRows >= 0) return res.status(404).json({
    message: 'Product no found'
  }) 


  console.log(result)
  res.send('Product Deleted')
}