import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Painel de Imagens - VM</h1>
        <p style={styles.subtitle}>Todas as 14 imagens carregadas da pasta public</p>
      </header>

      <main style={styles.mainContent}>
        
        {/* SEÇÃO 1: LOGOS E CENTRAL */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📁 Logos e Imagem Central</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <p style={styles.cardLabel}>cal_center.png</p>
              <img src="/cal_center.png" alt="Center" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>logo_vm.png</p>
              <img src="/logo_vm.png" alt="Logo VM" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>logo_vm-1.png</p>
              <img src="/logo_vm-1.png" alt="Logo VM 1" style={styles.image} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: IMAGENS DO CHATGPT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🤖 Imagens do ChatGPT</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <p style={styles.cardLabel}>31_de_jul_de_2026_08_20_37.png</p>
              <img src="/ChatGPT_Image_31_de_jul._de_2026_08_20_37.png" alt="ChatGPT 1" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>31_de_jul_de_2026_13_16_10.png</p>
              <img src="/ChatGPT_Image_31_de_jul._de_2026_13_16_10.png" alt="ChatGPT 2" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>31_de_jul_de_2026_13_17_06.png</p>
              <img src="/ChatGPT_Image_31_de_jul._de_2026_13_17_06.png" alt="ChatGPT 3" style={styles.image} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: IMAGENS DO WHATSAPP (LINHA 1 do seu print) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💬 Imagens do WhatsApp - Lote 1</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.29.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.29.jpeg" alt="WhatsApp 1" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.29_1_.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.29_1_.jpeg" alt="WhatsApp 2" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.30.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.30.jpeg" alt="WhatsApp 3" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.30_1_.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.30_1_.jpeg" alt="WhatsApp 4" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.30_1_-1.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.30_1_-1.jpeg" alt="WhatsApp 5" style={styles.image} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: IMAGENS DO WHATSAPP (LINHA 2 do seu print) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💬 Imagens do WhatsApp - Lote 2</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <p style={styles.cardLabel}>18.17.30-1.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-30_at_18.17.30-1.jpeg" alt="WhatsApp 6" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>12.37.16.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-31_at_12.37.16.jpeg" alt="WhatsApp 7" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>12.37.16_3_.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-31_at_12.37.16_3_.jpeg" alt="WhatsApp 8" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>12.37.17.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-31_at_12.37.17.jpeg" alt="WhatsApp 9" style={styles.image} />
            </div>
            <div style={styles.card}>
              <p style={styles.cardLabel}>12.37.17_1_.jpeg</p>
              <img src="/WhatsApp_Image_2026-07-31_at_12.37.17_1_.jpeg" alt="WhatsApp 10" style={styles.image} />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// Estilização limpa em Grid responsivo para organizar todas as fotos na tela
const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '48px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#38bdf8',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    margin: '0',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '40px',
  },
  section: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #334155',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#f1f5f9',
    margin: '0 0 20px 0',
    borderBottom: '2px solid #334155',
    paddingBottom: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: '0.75rem',
    color: '#38bdf8',
    marginBottom: '8px',
    wordBreak: 'break-all' as const,
    textAlign: 'center' as const,
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover' as const,
    borderRadius: '6px',
    backgroundColor: '#1e293b',
  },
};

export default App;