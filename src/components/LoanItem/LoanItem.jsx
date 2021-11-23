import {Container} from './LoanItem.js'
import {IoClose} from 'react-icons/io5';
import {FiEdit2} from 'react-icons/fi';

import ButtonSubmit from '../ButtonSubmit/ButtonSubmit.jsx';

function LoanItem() {
    return ( 
        <Container>
            <div className="container">
                <div className="header-container">
                    <h2>Blusa Vermelha</h2>
                    <div className="icons-container">
                        <button>
                            <FiEdit2 size={24}/>
                        </button>
                        <button>
                            <IoClose size={34}/> 
                        </button>
                    </div>
                </div>
                <div className="body-container">
                    <div className="left-body-containt">
                        <div className="middle-line">
                            <p>Está com: <span> Mylena Rodrigues</span></p>
                            <p>Contato: <span> (81) 98682-6693 </span></p>
                        </div>
                        <div className="last-line">
                            <p>Será devolvido em: <span> 22/11/2021</span></p>
                        </div>
                    </div>
                    <div className="button-container">
                        <ButtonSubmit>
                            Devolvido
                        </ButtonSubmit>
                    </div>
                </div>    
            </div>
            {/* <div className="container">
                    <div className="lef-info-containt">
                        <h3>Blusa Vermelha</h3>
                        <p>Está com: <span> Mylena Rodrigues</span></p>
                        <p>Será devolvido em: <span> 22/11/2021</span></p>
                    </div>
                    
                    <div className="right-info-containt">
                        <p>Contato: <span> (81) 98682-6693 </span></p>    
                    </div>
                <div className="buttons-container">
                    <div className="icons-container">
                        <IoClose size={30}/> 
                        <FiEdit2 size={24}/>
                    </div>
                    <ButtonSubmit>
                        Devolvido
                    </ButtonSubmit>
                </div>
            </div>     */}
        </Container>
     );
}

export default LoanItem;