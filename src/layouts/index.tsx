import React, {ReactNode} from 'react';
import Header from '../components/Header';

interface Props {
    children?: ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <main className="relative">
            <Header/>
            {children}
        </main>
    );
};

export default Layout;