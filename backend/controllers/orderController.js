import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    const order = await Order.create({ user: req.user.id, products, total });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.' });
  }
}; 