import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  prefix: "",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Europa Grotesk SH'", 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Brand colors
        "tape-yellow": "hsl(var(--tape-yellow))",
        "coral-accent": "hsl(var(--coral-accent))",
        charcoal: "hsl(var(--charcoal))",
        "off-white": "hsl(var(--off-white))",
        "paper-white": "hsl(var(--paper-white))",
        
        // Sticky note colors
        "mint-green": "hsl(var(--mint-green))",
        "peach-orange": "hsl(var(--peach-orange))",
        "lavender-purple": "hsl(var(--lavender-purple))",
        "sky-blue": "hsl(var(--sky-blue))",
        "lemon-yellow": "hsl(var(--lemon-yellow))",
        "coral-pink": "hsl(var(--coral-pink))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-left": {
          from: { 
            opacity: "0", 
            transform: "translateX(-50px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "slide-in-right": {
          from: { 
            opacity: "0", 
            transform: "translateX(50px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(1deg)" },
          "50%": { transform: "translateY(-15px) rotate(-1deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        "float-4": {
          "0%, 100%": { transform: "translateY(0px) rotate(2deg)" },
          "50%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        "float-5": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 8s ease-in-out infinite 0.5s",
        "float-3": "float-3 7s ease-in-out infinite 1s",
        "float-4": "float-4 9s ease-in-out infinite 1.5s",
        "float-5": "float-5 5s ease-in-out infinite 2s",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
