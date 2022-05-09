const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', ...theme.fontFamily.sans],
      },
      colors: {
        gray: {
          400: "#969798",
          500: "#666666",
          700: "#353535",
          800: "#262626",
          900: "#171818",
        },
        purple:{
          100:"#a1a1a7",
          200:"#63629F"
        },
				transparent: 'transparent',
				current: 'currentColor',
				white: {
						DEFAULT: '#ffffff',
				},
				green: {
						light: '#6fcf97',
						DEFAULT: '#27AE60',
						dark: '#219653',
						darker: '#1e874b',
				},
				red: {
						light: '#FFEAEA',
						DEFAULT: '#EB5757',
						dark: '#C20D0D',
				},
				orange: {
						light: '#FFEBDA',
						DEFAULT: '#F66A0A',
						dark: '#A04100',
				},
				primary: {
						DEFAULT: '#24292E',
				},
				warning: {
						DEFAULT: '#D1711C',
				}
      },
			extend: {
				boxShadow: {
						default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
				},
				fontSize: {
						'2rem': '2rem',
				},
		},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#e86ed0",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.300"),
              },
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")
],
};
