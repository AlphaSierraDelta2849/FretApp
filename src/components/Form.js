import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Airport from './Airport';
import Category from './Category';
import Company from './Company';
import Masse from './Masse';
import Prices from './Prices';

const Form = () => {
    const [masse, setMasseValue] = useState();
    const [SelectedAirport, setSelectedAirport] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("");
    const [selectedCompany, setSelectedCompany]=useState("")
    const radios = ["Effets personnels", "Animaux vivants", "Depouille Mortelle", "Perissables", "Valeurs"];
    const company=["Air France", "Air Senegal"]

    const handleCompanyChange = (e)=>{
        setSelectedCompany(e.target.value)
        render(<div>

        </div>)
    }
    const handleAirportChange = (e)=>{
    
    }
    const handleMasseChange = (e)=>{
        setMasseValue(e.target.value)
        
    }
    const handleCategoryChange=(e)=>{
        setSelectedRadio(e.target.id)
        
    }
    return (
        <div>
            <Masse />
            <Airport />
            <Category />
            <Company />
            <Prices />
        </div>
    );
    function getInitialPrice(){
        if (selectedCompany==="Air France")
            return 60000;
        return 50000
    }
    function getTX(){
        console.log(masse)
        return masse*15;
    }
    function getSCC(){
        return masse*75;
    }
    function getCatgeoryPrice(){
        switch(selectedRadio){
            case "Effets personnels": return 7325
            case "Animaux vivants":  return 23200
            case "Depouille Mortelle": return 125000
            case "Perissables": return 13000
            case "Valeurs": return 10000
            default: return 0
        }
    }
};
// CGC : 1 250 F  (fixe)  TX 15 F par KG         GE  1 260F (fixe)

// CHC : 15 000 F (fixe) GT 2 000 F (fixe)       SCC 75 F par KG
export default Form;