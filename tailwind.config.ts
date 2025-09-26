import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-nav': 'var(--gradient-nav)',
        'gradient-glow': 'var(--gradient-glow)',
        'gradient-mesh': 'var(--gradient-mesh)',
      },
      boxShadow: {
        '3d': 'var(--shadow-3d)',
        'glow': 'var(--shadow-glow)',
        'accent-glow': 'var(--shadow-accent-glow)',
        'nav': 'var(--shadow-nav)',
        'float': 'var(--shadow-float)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) rotateX(0deg) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(-10px) rotateX(5deg) rotateY(2deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotateX(10deg) rotateY(5deg)",
          },
          "75%": {
            transform: "translateY(-10px) rotateX(5deg) rotateY(2deg)",
          },
        },
        "float-reverse": {
          "0%, 100%": {
            transform: "translateY(0px) rotateX(0deg) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(10px) rotateX(-5deg) rotateY(-2deg)",
          },
          "50%": {
            transform: "translateY(20px) rotateX(-10deg) rotateY(-5deg)",
          },
          "75%": {
            transform: "translateY(10px) rotateX(-5deg) rotateY(-2deg)",
          },
        },
        "rotate-3d": {
          "0%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "33%": {
            transform: "rotateX(120deg) rotateY(120deg) rotateZ(120deg)",
          },
          "66%": {
            transform: "rotateX(240deg) rotateY(240deg) rotateZ(240deg)",
          },
          "100%": {
            transform: "rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "var(--shadow-glow)",
            opacity: "0.8",
          },
          "50%": {
            boxShadow: "var(--shadow-accent-glow)",
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8) rotate(-5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px) rotateY(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0deg)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px) rotateY(10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0deg)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            filter: "brightness(1) saturate(1)",
            transform: "scale(1)",
          },
          "50%": {
            filter: "brightness(1.2) saturate(1.3)",
            transform: "scale(1.05)",
          },
        },
        "morph": {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "nav-slide": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 8s ease-in-out infinite",
        "rotate-3d": "rotate-3d 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-down": "fade-in-down 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "text-shimmer": "text-shimmer 2s linear infinite",
        "nav-slide": "nav-slide 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
