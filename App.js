import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Carolina Reaper",
    img: "/images/reaper.jpg",
    price: "$9.99",
    desc: "Самый острый перец в мире. Осторожно!",
  },
  {
    id: 2,
    name: "Ghost Pepper Sauce",
    img: "/images/ghost.jpg",
    price: "$12.99",
    desc: "Супер-острый соус на основе Bhut Jolokia.",
  },
  {
    id: 3,
    name: "Habanero Madness",
    img: "/images/habanero.jpg",
    price: "$7.49",
    desc: "Яркий вкус и безумная острота.",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([]);

  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);
  const addToCart = (item) => setCart([...cart, item]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: 36, color: '#dc2626', marginBottom: 8 }}>🔥 Spicy Delights 🔥</h1>
      <p style={{ color: '#d1d5db', marginBottom: 24 }}>Перцы и соусы для настоящих огнедышащих гурманов</p>

      <div style={{ position: 'relative', width: '100%', maxWidth: 320 }}>
        <motion.div
          key={products[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: '#fff', color: '#000', borderRadius: 16, overflow: 'hidden', boxShadow: '0 0 12px #222' }}
        >
          <img src={products[current].img} alt={products[current].name} style={{ width: '100%', height: 192, objectFit: 'cover' }} />
          <div style={{ padding: 16 }}>
            <h2 style={{ fontSize: 20, fontWeight: 'bold', color: '#dc2626' }}>{products[current].name}</h2>
            <p style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>{products[current].desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#16a34a' }}>{products[current].price}</span>
              <button onClick={() => addToCart(products[current])} style={{ backgroundColor: '#facc15', color: '#000', padding: '4px 12px', borderRadius: 6 }}>В корзину</button>
            </div>
          </div>
        </motion.div>
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <button onClick={prev} style={{ backgroundColor: '#374151', color: '#fff', padding: 8, borderRadius: 8 }}>⬅️</button>
        <button onClick={next} style={{ backgroundColor: '#374151', color: '#fff', padding: 8, borderRadius: 8 }}>➡️</button>
      </div>

      <div style={{ marginTop: 32, width: '100%', maxWidth: 320 }}>
        <h3 style={{ fontSize: 16, color: '#fff', marginBottom: 8 }}>🛒 Корзина ({cart.length})</h3>
        <ul style={{ backgroundColor: '#1f2937', padding: 8, borderRadius: 12, fontSize: 14 }}>
          {cart.length === 0 ? <li style={{ color: '#9ca3af' }}>Пусто</li> : cart.map((item, i) => (
            <li key={i} style={{ color: '#e5e7eb' }}>{item.name} — {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
