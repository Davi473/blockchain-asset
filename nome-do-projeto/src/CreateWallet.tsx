// src/pages/CreateWallet.tsx
import React from 'react';

const CreateWallet: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="Bitcoin logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Criar nova carteira</h1>
        <p style={styles.subtitle}>
          Sua carteira será protegida com uma frase de recuperação. Guarde-a com segurança.
        </p>

        <button style={styles.primaryButton}>🛡️ Criar carteira</button>
        <button style={styles.secondaryButton}>📥 Importar carteira</button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    padding: '16px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
  },
  logo: {
    width: '64px',
    height: '64px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '24px',
  },
  primaryButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#f7931a', // cor do bitcoin
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '12px',
    cursor: 'pointer',
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default CreateWallet;
