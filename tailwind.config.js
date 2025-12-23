/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Background
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050508',
        'cyber-card': '#12121a',
        'cyber-card-hover': '#1a1a2e',

        // Neon Accents
        'neon-purple': '#bf00ff',
        'neon-purple-light': '#d946ef',
        'neon-cyan': '#00f5ff',
        'neon-cyan-light': '#67e8f9',
        'neon-pink': '#ff0080',
        'neon-blue': '#0ea5e9',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(255, 0, 128, 0.3)',
        'neon-glow': '0 0 5px rgba(0, 245, 255, 0.4), 0 0 20px rgba(0, 245, 255, 0.2), 0 0 40px rgba(191, 0, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blinkCaret 0.75s step-end infinite',
        'neon-flicker': 'neonFlicker 1.5s ease-in-out infinite alternate',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.8), 0 0 60px rgba(191, 0, 255, 0.4)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00f5ff' }
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #00f5ff, 0 0 80px #00f5ff'
          },
          '20%, 24%, 55%': {
            textShadow: 'none'
          }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #bf00ff 0%, #00f5ff 100%)',
      },
      backgroundSize: {
        'grid-size': '50px 50px',
      }
    }
  },
  plugins: [],
}
