import React from "react";
import { useTranslation } from "react-i18next";

export default function ButtonLang(){
    const {i18n}=useTranslation()
    const changelang=(e:React.ChangeEvent<HTMLSelectElement>)=>{
i18n.changeLanguage(e.target.value)
    }
    return(
        <select
        onChange={changelang}
        value={i18n.language}
         className="text-black scale-90 hover:scale-100 transition-transform" >
           <option value="en">🇬🇧 English</option>
      <option value="pl">🇵🇱 Polish</option>
      <option value="fr">🇫🇷 French</option>
      <option value="es">🇪🇸 Spanish</option>
      <option value="it">🇮🇹 Italian</option>
      <option value="pt">🇵🇹 Portuguese</option>
      <option value="de">Deustchland</option>
        </select>
    )
}