import React from "react";

export const languages = {
  en: {
    dogsChallenge: "Dogs Challenge",
    breedsList: "Breeds List",
    myTeam: "My Team",
    breeds: "Breeds",
    addToMyTeam: "Add to my team",
    removeFromTeam: "Remove from team",
    search: "Search",
    previous: "Previous",
    next: "Next",
    successfullyAdded: "Successfully added!",
    errorAdd: "Could not add! Maximum: 3 dogs per breed and 10 in total",
    notHaveDogsOnTeam: "Does not have dogs on the team",
  },
  es: {
    dogsChallenge: "Dogs Challenge",
    breedsList: "Lista de Razas",
    myTeam: "Mi Equipo",
    breeds: "Razas",
    addToMyTeam: "Agregar a mi Equipo",
    removeFromTeam: "Eliminar de mi Equipo",
    search: "Buscar",
    previous: "Anterior",
    next: "Siguiente",
    successfullyAdded: "Agregado exitosamente!",
    errorAdd: "No se pudo agregar! Máximo: 3 perros por raza y 10 en total",
    notHaveDogsOnTeam: "No posee perros en el equipo",
  },
};

export const languageContext = React.createContext(
  { languageContext: languages.en } // default value
);
