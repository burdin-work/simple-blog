import preloader from '../../assets/images/preloader.svg';
import { PreloaderWrap } from '../styles';

const Preloader: React.FC = () => {
    return (
        <PreloaderWrap>
            <img src={preloader} alt="preloader" />
        </PreloaderWrap>
    );
};

export default Preloader;
