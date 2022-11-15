import config from '../../config.json';
import styled from 'styled-components';
import { CSSReset } from '../components/CSSReset';
import Menu from '../components/Menu';
import {StyledTimeline} from '../components/TimeLine';

export default function Home() {
    return (
        <>
            <CSSReset/>
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        margin-top: 50px;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/*<img src="" alt="banner"/>*/}
            <section className='user-info'>
                <img src={config.avatar} alt="Foto de Perfil" />
                <div>
                    <h2>{config.name}</h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.map((video) => {
                                    return (
                                        <a>
                                            <img src={video.thumb} alt={video.title} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}