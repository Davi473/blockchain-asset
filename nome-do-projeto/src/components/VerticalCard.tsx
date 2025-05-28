import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const VerticalCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={title} style={styles.image} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    minWidth: '250px',
    maxWidth: '250px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#fff',
    textAlign: 'center' as const,
    flexShrink: 0,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',
    marginBottom: '12px',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain' as const,
  },
};

export default VerticalCard;
