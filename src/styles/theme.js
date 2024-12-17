import StyledComponentsRegistry from '../lib/registry'
import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => (

    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    </ThemeProvider>



);

export default Theme;
