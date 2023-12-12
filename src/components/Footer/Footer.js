import './Footer.css';

export const Footer = () => {
    return(
        <footer>
            <div>    
                <div className='social'>
                    <img src="/images/fb.png" alt="Facebook"/>
                    <img src="/images/ig.png" alt="Twitter"/>
                    <img src="/images/tw.png" alt="Instagram"/>
                </div>
                <div className='logo'>
                    <img src="/images/logo.png" alt="Organo" />
                </div>
                <div className='text'>
                    <p>Developed by Donavan Carvalho</p>
                </div>
            </div>
        </footer>
    );
}