import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
        path: "./satoshi/Satoshi-Regular.woff2",
        weight: '400',
        style: 'normal'
    },
    {
        path: "./satoshi/Satoshi-Medium.woff2",
        weight: '500',
        style: 'medium'
    },
    {
        path: "./satoshi/Satoshi-MediumItalic.woff2",
        weight: '500',
        style: 'italic'
    },
    {
        path: "./satoshi/Satoshi-Light.woff2",
        weight: '300',
        style: 'light'
    },
    {
        path: "./satoshi/Satoshi-LightItalic.woff2",
        weight: '300',
        style: 'italic'
    },
    {
        path: "./satoshi/Satoshi-Bold.woff2",
        weight: '700',
        style: 'bold'
    },
    {
        path: "./satoshi/Satoshi-BoldItalic.woff2",
        weight: '700',
        style: 'italic'
    }
  ]
});
