const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const payload = await Tag.findAll();
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const payload = await Model.findByPK(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  router.post('/', async (req, res) => {
    try {
      const payload = await Tag.create(req.body);
      res.status(200).json({ status: 'success', payload })
    } catch (err) {
      res.status(500).json({ status: 'error', sendback: err.message })
    }
  });

  router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
  });

  router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
      const payload = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({ status: 'success' })
    } catch (err) {
      res.status(500).json({ status: 'error', sendback: err.message })
    }
  });

  module.exports = router;
