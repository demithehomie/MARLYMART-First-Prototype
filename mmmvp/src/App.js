import React, { useMemo, useState } from 'react';
import './styles/global.css';

const categories = ['Pizza', 'Burgers', 'Sushi', 'Açaí', 'Brazilian', 'Desserts', 'Healthy', 'Drinks', 'Poke', 'Vegan'];

const ads = {
  hero: {
    title: 'Featured • Prime Visibility',
    subtitle: 'Boost your store with Tienda Go Ads and appear first in every local search.',
    cta: 'Promote My Store',
  },
  imageMid: {
    label: 'Sponsored',
    title: 'Hot Combo Week',
    subtitle: 'Get up to 30% on curated combos from top local brands.',
  },
  video: {
    label: 'Promoted Video',
    title: 'Chef Live — 20s reel',
    subtitle: 'Taste the grill vibe. Tap to unlock tonight\'s featured burger set.',
  },
};

const restaurants = [
  { id: '1', name: 'Brasa 021 Grill', cuisine: 'Brazilian BBQ', eta: '22-30 min', fee: '$1.99', rating: 4.8, sponsored: true, chatOrder: true, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80', logo: '🔥' },
  { id: '2', name: 'Neon Sushi Lab', cuisine: 'Japanese', eta: '18-26 min', fee: 'Free', rating: 4.9, sponsored: true, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80', logo: '🍣' },
  { id: '3', name: 'Urban Smash House', cuisine: 'Burgers', eta: '15-20 min', fee: '$0.99', rating: 4.7, chatOrder: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80', logo: '🍔' },
  { id: '4', name: 'Açaí Downtown Club', cuisine: 'Healthy Bowls', eta: '20-28 min', fee: '$1.49', rating: 4.6, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80', logo: '🥣' },
  { id: '5', name: 'La Forno Pizza', cuisine: 'Italian', eta: '25-35 min', fee: '$2.49', rating: 4.8, sponsored: true, chatOrder: true, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80', logo: '🍕' },
];

const dishes = [
  { id: 'd1', title: 'Truffle Smash Combo', description: '2 truffle burgers + fries + soda', price: 32.9, promoPrice: 27.9, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80', tag: 'Featured' },
  { id: 'd2', title: 'Sushi Premium 24 pcs', description: 'Chef selection + hot roll bonus', price: 39.9, promoPrice: 35.5, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1000&q=80', tag: 'Sponsored' },
  { id: 'd3', title: 'Protein Açaí Bowl', description: 'Whey, granola, banana and honey', price: 15.9, image: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?auto=format&fit=crop&w=1000&q=80', tag: 'Promoted' },
];

const chatMessages = [
  { id: 'm1', from: 'store', text: 'Hey Ana 👋 Welcome to Brasa 021 Grill. Want quick recommendations for tonight?' },
  { id: 'm2', from: 'store', quickOptions: ['Best sellers', 'Family combo', 'Low carb'] },
  { id: 'm3', from: 'user', text: 'Need a combo for 2 people, one burger no onions please.' },
  { id: 'm4', from: 'store', product: dishes[0], text: 'This combo is trending and I can customize no onions ✅' },
  { id: 'm5', from: 'store', summary: { items: 2, total: 29.9, eta: '24 min' } },
  { id: 'm6', from: 'user', text: 'Perfect, confirm order.' },
];

const currency = (n) => `$${n.toFixed(2)}`;
const tagTone = (tag) => (tag === 'Sponsored' ? 'tag-sponsored' : tag === 'Promoted' ? 'tag-promoted' : 'tag-featured');

const RestaurantCard = ({ restaurant, compact = false }) => (
  <article className={`card restaurant-card ${compact ? 'compact' : ''}`}>
    <div className="cover" style={{ backgroundImage: `url(${restaurant.image})` }}>
      <span className="logo-pill">{restaurant.logo}</span>
      {restaurant.sponsored && <span className="badge tag-sponsored">Sponsored</span>}
      {restaurant.chatOrder && <span className="badge chat-badge">Chat Order</span>}
    </div>
    <div className="restaurant-content">
      <h4>{restaurant.name}</h4>
      <p>{restaurant.cuisine}</p>
      <div className="meta">
        <span className="eta">{restaurant.eta}</span>
        <span>{restaurant.fee}</span>
        <span>⭐ {restaurant.rating}</span>
      </div>
    </div>
  </article>
);

const DishCard = ({ dish }) => (
  <article className="card dish-card">
    <img src={dish.image} alt={dish.title} />
    <div className="dish-content">
      {dish.tag && <span className={`badge ${tagTone(dish.tag)}`}>{dish.tag}</span>}
      <h4>{dish.title}</h4>
      <p>{dish.description}</p>
      <div className="price-row">
        <div>
          {dish.promoPrice && <small className="striked">{currency(dish.price)}</small>}
          <strong>{currency(dish.promoPrice || dish.price)}</strong>
        </div>
        <button className="small-btn">Add</button>
      </div>
    </div>
  </article>
);

const AdImageCard = ({ compact = false }) => (
  <article className={`card ad-card ${compact ? 'compact' : ''}`}>
    <span className="badge tag-sponsored">{ads.imageMid.label}</span>
    <h4>{ads.imageMid.title}</h4>
    <p>{ads.imageMid.subtitle}</p>
  </article>
);

const VideoAdCard = () => (
  <article className="card video-ad">
    <span className="badge tag-promoted">{ads.video.label}</span>
    <div className="video-box">▶</div>
    <h4>{ads.video.title}</h4>
    <p>{ads.video.subtitle}</p>
  </article>
);

const App = () => {
  const [nav, setNav] = useState('home');
  const [deliveryMode, setDeliveryMode] = useState('Delivery');
  const [restaurantTab, setRestaurantTab] = useState('menu');
  const featured = useMemo(() => restaurants.filter((r) => r.sponsored), []);
  const chatStores = useMemo(() => restaurants.filter((r) => r.chatOrder), []);

  const renderChat = () => (
    <section className="chat-shell">
      <header className="chat-header"><h3>Brasa 021 Chat Commerce</h3><span className="badge tag-sponsored">Live</span></header>
      <div className="chat-messages">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={msg.from === 'user' ? 'bubble user' : 'bubble store'}>
            {msg.text && <p>{msg.text}</p>}
            {msg.product && <div className="chat-product card"><img src={msg.product.image} alt={msg.product.title} /><div><h4>{msg.product.title}</h4><p>{msg.product.description}</p><strong>{currency(msg.product.promoPrice || msg.product.price)}</strong></div></div>}
            {msg.quickOptions && <div className="quick-row">{msg.quickOptions.map((opt) => <button key={opt} className="quick-btn">{opt}</button>)}</div>}
            {msg.summary && <div className="chat-summary"><p>Cart preview</p><strong>{msg.summary.items} items • {currency(msg.summary.total)}</strong><small>ETA {msg.summary.eta}</small><button className="primary-btn">Finalize order</button></div>}
          </div>
        ))}
      </div>
      <footer className="chat-input">Type your request... <button className="send">Send</button></footer>
    </section>
  );

  const store = restaurants[0];

  return (
    <div className="app-shell">
      <header className="topbar"><h1>Tienda Go</h1><span className="pill">Food MVP</span></header>
      <main className="content">
        {nav === 'home' && <>
          <section className="surface">
            <div className="header-row"><div><p className="eyebrow">Delivering to</p><h2 className="location">Downtown, São Paulo</h2></div><button className="ghost-btn">Change</button></div>
            <div className="search-bar">🔍 What are you craving today?</div>
            <div className="toggle-wrap">{['Delivery', 'Pickup'].map((mode) => <button key={mode} className={deliveryMode === mode ? 'toggle-btn active' : 'toggle-btn'} onClick={() => setDeliveryMode(mode)}>{mode}</button>)}</div>
          </section>
          <section className="hero-ad card"><span className="badge tag-featured">Featured</span><h3>{ads.hero.title}</h3><p>{ads.hero.subtitle}</p><button className="primary-btn">{ads.hero.cta}</button></section>
          <section className="section"><div className="section-title-row"><h3>Categories</h3></div><div className="chips-row">{categories.map((cat) => <button key={cat} className="chip">{cat}</button>)}</div></section>
          <section className="section"><div className="section-title-row"><h3>Sponsored stores</h3><span className="badge tag-sponsored">Sponsored</span></div><div className="carousel">{featured.map((r) => <RestaurantCard key={r.id} restaurant={r} compact />)}</div></section>
          <AdImageCard />
          <section className="section"><div className="section-title-row"><h3>Recommended dishes</h3><span className="badge tag-promoted">Promoted</span></div><div className="carousel dishes-carousel">{dishes.map((d) => <DishCard key={d.id} dish={d} />)}</div></section>
          <VideoAdCard />
          <section className="section"><div className="section-title-row"><h3>Order by chat</h3></div><div className="feed-grid">{chatStores.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}</div></section>
          <section className="section"><div className="section-title-row"><h3>Popular near you</h3></div><div className="feed-grid">{restaurants.map((r) => <RestaurantCard key={`p-${r.id}`} restaurant={r} />)}</div></section>
        </>}
        {nav === 'feed' && <><section className="surface"><h2>Restaurants</h2><div className="chips-row">{['Nearest', 'Sponsored', 'Best rated', 'Fastest delivery', 'Free delivery', 'Chat ordering'].map((f) => <button key={f} className="chip">{f}</button>)}</div></section><section className="section feed-grid">{restaurants.map((r, idx) => <React.Fragment key={`${r.id}-${idx}`}><RestaurantCard restaurant={r} />{idx === 1 && <AdImageCard />}</React.Fragment>)}</section></>}
        {nav === 'cart' && <section className="section"><h2>Checkout</h2><div className="card cart-item"><div><h4>Truffle Smash Combo</h4><p>No onions, extra pickles</p><div className="qty">− 1 +</div></div><strong>$27.90</strong></div><div className="card cart-item"><div><h4>Protein Açaí Bowl</h4><p>Add peanut butter</p><div className="qty">− 1 +</div></div><strong>$15.90</strong></div><input className="input" placeholder="Add observations" /><input className="input" placeholder="Coupon code" /><div className="card totals"><p><span>Subtotal</span><strong>$43.80</strong></p><p><span>Delivery fee</span><strong>$1.99</strong></p><p className="total"><span>Total</span><strong>$45.79</strong></p></div><div className="card"><h4>Payment</h4><p>• Credit card ending 1098</p><p>• Pix instant payment</p><p>• Cash on delivery</p></div><button className="primary-btn full">Confirm Order</button></section>}
        {nav === 'orders' && <section className="section"><h2>Orders</h2><div className="card order-card"><span className="badge tag-featured">Active</span><h4>Brasa 021 Grill</h4><p>Preparing • Rider in 12 min</p><button className="ghost-btn">Track order</button></div><div className="card order-card"><span className="badge tag-promoted">Past</span><h4>Neon Sushi Lab</h4><p>Delivered on Mar 22</p><button className="ghost-btn">Reorder</button></div></section>}
        {nav === 'profile' && <section className="section"><h2>Profile</h2><div className="card profile-card"><h4>Ana Costa</h4><p>ana.costa@email.com</p></div>{['Addresses', 'Payment methods', 'Saved restaurants', 'Order history', 'Support', 'Settings'].map((item) => <div key={item} className="card row-item">{item}</div>)}</section>}
      </main>
      {nav === 'home' && <button className="fab" onClick={() => setNav('feed')}>Open stores</button>}
      <nav className="bottom-nav">{['home', 'feed', 'cart', 'orders', 'profile'].map((item) => <button key={item} className={nav === item ? 'nav-btn active' : 'nav-btn'} onClick={() => setNav(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}</nav>
      <section className="desktop-panel"><h3>Restaurant detail preview</h3><section className="detail-hero" style={{ backgroundImage: `url(${store.image})` }}><div className="overlay"><span className="logo-pill">{store.logo}</span><h2>{store.name}</h2><p>{store.cuisine} • {store.eta} • ⭐ {store.rating}</p></div></section><section className="section"><AdImageCard compact /><div className="tabs">{['menu', 'about', 'reviews', 'chat'].map((tab) => <button key={tab} className={restaurantTab === tab ? 'tab active' : 'tab'} onClick={() => setRestaurantTab(tab)}>{tab}</button>)}</div>{restaurantTab === 'menu' && <><h3>Menu highlights</h3><div className="feed-grid">{dishes.map((d) => <DishCard key={`m-${d.id}`} dish={d} />)}</div></>}{restaurantTab === 'about' && <p className="card">Family-owned kitchen focused on premium local ingredients and chat-first service.</p>}{restaurantTab === 'reviews' && <p className="card">4.8/5 from 2,300 reviews. “Fast and super flexible.”</p>}{restaurantTab === 'chat' && renderChat()}<div className="floating-ctas"><button className="ghost-cta">View Cart • 2</button><button className="primary-btn">Order via Chat</button></div></section></section>
      <section className="desktop-panel"><h3>Chat commerce preview</h3>{renderChat()}</section>
    </div>
  );
};

export default App;
