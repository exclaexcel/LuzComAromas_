import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      paddingTop: '70px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(2rem, 5vw, 4rem)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '480px' }}>
        <span style={{
          display: 'block',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(5rem, 15vw, 8rem)',
          fontWeight: 300,
          color: 'rgba(201, 168, 74, 0.2)',
          letterSpacing: '0.1em',
          lineHeight: 1,
          marginBottom: '1.5rem',
        }}>
          404
        </span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          fontWeight: 300,
          color: 'var(--text-primary)',
          letterSpacing: '0.03em',
          marginBottom: '1rem',
        }}>
          Esta página não existe
        </h1>

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: '0.85rem',
          lineHeight: 1.9,
          color: 'var(--text-secondary)',
          fontWeight: 300,
          marginBottom: '2.5rem',
          maxWidth: '360px',
          margin: '0 auto 2.5rem',
        }}>
          O caminho que você buscou não foi encontrado. Talvez o endereço tenha mudado ou nunca existido.
        </p>

        <div style={{
          width: '40px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84A, transparent)',
          margin: '0 auto 2.5rem',
        }} />

        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.85rem 2.5rem',
            border: '1px solid #C9A84A',
            color: '#C9A84A',
            fontFamily: "'Raleway', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '1px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#C9A84A'
            e.currentTarget.style.color = '#1E1035'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#C9A84A'
          }}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
