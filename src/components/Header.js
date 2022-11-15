import styled from "styled-components";
import config from '../../config.json';

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

export default function Header() {
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