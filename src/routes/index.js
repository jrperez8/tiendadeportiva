const express = require('express');
const router = express.Router(); // El mismo manejo de rutas pero con el método Router de express
const Productos = require('../model/products');

router.get('/', async (req, res) => {
  const tasks = await Productos.find();
  res.render('index', {
    tasks
  });
});

router.post('/add', async (req, res, next) => {
  const tasks = new Productos(req.body);
  await tasks.save();
  res.redirect('/');
});

/*router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});*/

router.get('/edit/:id', async (req, res, next) => {
  const tasks = await Productos.findById(req.params.id);
  console.log(tasks)
  res.render('edit', { tasks });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Productos.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Productos.remove({_id: id});
  res.redirect('/');
});

/*router.get('/edit',(req,res)=>{
  res.render('editar')
})*/

module.exports = router;