import config from '../../config.json';
import { CSSReset } from '../components/CSSReset';
import Menu from '../components/Menu/components/Menu';
import Header from '../components/Header';
import TimeLine from '../components/TimeLine';
import React from 'react';

export default function Home() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return (
        <>
            <CSSReset/>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}/>
            </div>
        </>
    )
}