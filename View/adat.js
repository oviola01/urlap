export const adatLeiras={
    vezetekNev: {
        megjelenes: "Vezeteknév",
        tipus: "text",
        placeholder: "Minta",
        pattern: "[A-Z][a-z]{3}",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagy betűvel kell kezdődnie!",
        required: true,
    },
    keresztNev: {
        megjelenes: "Keresztnév",
        tipus: "text",
        placeholder: "Aladár",
        pattern: "[A-Z][a-z]{3}",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagy betűvel kell kezdődnie!",
        required: true,
    },
    szul: {
        megjelenes: "Születési év",
        tipus: "number",
        value: "1975",
        pattern: {min:"1900", max:"2023"},
        szoveg: "Kérlek add meg a születési évedet!",
        required: false,
    }
}
export const adatLeiras2={
    nev: "Név",
    szul: "Születési év",
}