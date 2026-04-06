/**
 * The Liquid Lounge — App Configuration
 * ---------------------------------------------------------------------------
 * Central place for business constants, feature flags, and integration keys.
 * Replace placeholder values with real credentials before going live.
 * ---------------------------------------------------------------------------
 */
const APP_CONFIG = {
  /* ── Business Info ──────────────────────────────────────────────────── */
  name: 'The Liquid Lounge',
  tagline: 'Fine Drinks & Dining',
  phone: '+917439133880',
  whatsapp: '917439133880',
  email: 'hello@theliquidlounge.in',
  address: '9FW7+JCM, Khalpar Road, Tegachhi Mamudpur, West Bengal, India',
  mapUrl: 'https://goo.gl/maps/SNXUAFCowAMQ7y1z7',
  website: 'https://theliquidlounge.in',

  /* ── Operating Hours ────────────────────────────────────────────────── */
  hours: {
    weekdays: '11:00 AM – 11:00 PM',
    weekends: '10:00 AM – 12:00 AM',
  },

  /* ── Analytics Keys (replace with real values) ──────────────────────── */
  analytics: {
    ga4MeasurementId: 'G-N7C8LZ5KX8',
    metaPixelId: '1303788181629813',
  },

  /* ── Payment Integration Hooks ──────────────────────────────────────── */
  /* ⚠️  IMPORTANT: Never commit real API keys here.
         Use environment variables or a secrets manager in production.
         Uncomment and populate ONLY after setting up your payment provider. */
  payment: {
    // razorpay: { keyId: process.env.RAZORPAY_KEY_ID },
    // stripe:   { publishableKey: process.env.STRIPE_PUBLISHABLE_KEY },
  },

  /* ── Backend API Base URL (Node.js / Firebase) ─────────────────────── */
  api: {
    // baseUrl: 'https://api.theliquidlounge.in',
    // firebase: { projectId: 'liquid-lounge-app', appId: '' },
  },

  /* ── Feature Flags ──────────────────────────────────────────────────── */
  features: {
    onlinePayments: false,
    userAuth: false,
    liveOrdering: false,
    loyaltyProgram: false,
  },
};

// Make available globally (vanilla JS — no bundler required)
if (typeof window !== 'undefined') window.APP_CONFIG = APP_CONFIG;
if (typeof module !== 'undefined') module.exports = APP_CONFIG;
