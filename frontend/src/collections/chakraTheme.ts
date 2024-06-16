import { extendTheme } from '@chakra-ui/react'

const chakraTheme = extendTheme({
    fonts: {
        archivoBlack: `'Archivo Black', 'sans-serif'`,
        albertSans: `'Albert Sans', 'sans-serif'`,
        overpass: `'Overpass', 'sans-serif'`,
        heebo: `'Heebo', 'sans-serif'`,
    },
    colors: {
        ngDarkblue: '#1e292c',
        ngDarkerblue: '#10191c',
        ngDarkgreen: '#0a2619',
        ngGreenlight: '#b8f2d7',
        ngOffwhite: '#dedddc',
        ngGreenvid: '#000a06',
    },
});

export default chakraTheme