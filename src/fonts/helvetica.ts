import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
        path: "./helvetica/Helvetica.ttf",
        weight: '400',
        style: 'normal'
    },
    {
        path: "./helvetica/Helvetica-Bold.ttf",
        weight: '700',
        style: 'normal'
    }
  ]
});
