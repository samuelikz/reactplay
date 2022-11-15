import config from '../../config.json';
import { CSSReset } from '../components/CSSReset';
import Menu from '../components/Menu/components/Menu';
import Header from '../components/Header';
import TimeLine from '../components/TimeLine';

export default function Home() {
    return (
        <>
            <CSSReset/>
            <div>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}/>
            </div>
        </>
    )
}