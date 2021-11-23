import * as Api from "../../../api/list";

import { useState } from 'react';

import LoanItem from '../../LoanItem/LoanItem.jsx'

function ListLoanItemBorrow() {
    const [leans, setLeans] = useState([]);

    const lists = async () => {
        const response = await Api.listBorrow();
        console.log(response);
        setLeans(response);
        console.log(leans);
        
    }
    return ( 
        <>
        {leans.map(lean => (
                    <LoanItem key={lean.id}
                    id={lean.id}
                    name_obj={lean.item_emprestado}
                    name_resp={lean.nome_donoObj} 
                    celphone={lean.contato_celular_devolucao}
                    email={lean.contato_email_devolucao}
                    date_loan = {lean.data_emprestimo} 
                    date_devolution = {lean.data_devolucao}
                    result_devolution = {lean.resultado_devolucao}
                    />
                )
            )
        }
            <button onClick={() => lists()}>
                Chama a lista
            </button>
    </>
     );
}

export default ListLoanItemBorrow;