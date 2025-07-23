export const tail ={
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(bg|text|border)-(red|blue|green|yellow|purple|pink|indigo|orange|teal|amber)-(200|500)/,
    },
  ],
};
