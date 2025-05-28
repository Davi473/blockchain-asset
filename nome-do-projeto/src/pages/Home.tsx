import React from 'react';
import VerticalCard from '../components/VerticalCard';

const data = [
  { title: 'Card 1', description: 'Descrição 1', imageUrl: 'https://via.placeholder.com/300x200' },
  { title: 'Card 2', description: 'Descrição 2', imageUrl: 'https://via.placeholder.com/300x200' },
  { title: 'Card 3', description: 'Descrição 3', imageUrl: 'https://via.placeholder.com/300x200' },
  { title: 'Card 4', description: 'Descrição 4', imageUrl: 'https://via.placeholder.com/300x200' },
  { title: 'Card 5', description: 'Descrição 5', imageUrl: 'https://via.placeholder.com/300x200' },
];

const Home: React.FC = () => {
  return (
    <>
      <h2 style={styles.greeting}>Olá, bem-vindo(a) de volta! 👋</h2>
      <div style={styles.cardScroll}>
        {data.map((item, index) => (
          <VerticalCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

const styles = {
  greeting: {
    marginBottom: '24px',
    textAlign: 'center' as const,
  },
  cardScroll: {
    display: 'flex',
    overflowX: 'auto' as const,
    gap: '16px',
    paddingBottom: '8px',
  },
};

export default Home;
