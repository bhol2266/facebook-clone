module.exports = {
  mode:'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens:{
          "sm":"500px",
          'md':'750px',
          'large':"1000px"
        },
        colors:{
          'github':'#24292F'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
     ]
  }
