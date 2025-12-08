// src/config/habitaciones.js

export const infoHabitaciones = {
    simple: {
        title: "Habitación Simple",
        desc: "Un lugar acogedor y funcional, perfectamente equipado para el viajero independiente.",
        price: { pen: "S/ 70", usd: "$ 19" }, // AHORA ES UN OBJETO
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Privado"]
    },
    doble: {
        title: "Habitación Doble",
        desc: "Ideal para amigos o colegas, esta habitación cuenta con dos camas confortables.",
        price: { pen: "S/ 100", usd: "$ 27" },
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Privado"]
    },
    matrimonial: {
        title: "Habitación Matrimonial",
        desc: "Diseñada para parejas, ambiente íntimo y cálido para una escapada romántica.",
        price: { pen: "S/ 80", usd: "$ 22" },
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Privado"]
    },
    triple: {
        title: "Habitación Triple",
        desc: "Espaciosa y versátil, perfecta para familias pequeñas o grupos.",
        price: { pen: "S/ 120", usd: "$ 33" },
        features: ["3 Huéspedes", "3 Camas 1.5 plazas", "Baño Privado"]
    },
    cuadruple: {
        title: "Habitación Cuádruple",
        desc: "Máxima capacidad y comodidad para familias y grupos grandes.",
        price: { pen: "S/ 140", usd: "$ 38" },
        features: ["4 Huéspedes", "4 Camas 1.5 plazas", "Baño Privado"]
    },
    simple_comp: {
        title: "Simple (Baño Compartido)",
        desc: "Opción económica para viajeros prácticos.",
        price: { pen: "S/ 40", usd: "$ 11" },
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Compartido"]
    },
    doble_comp: {
        title: "Doble (Baño Compartido)",
        desc: "Comodidad para dos a un precio accesible.",
        price: { pen: "S/ 80", usd: "$ 22" },
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Compartido"]
    },
    matri_comp: {
        title: "Matrimonial (Baño Compartido)",
        desc: "Acogedora para parejas que buscan maximizar su presupuesto.",
        price: { pen: "S/ 60", usd: "$ 16" },
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Compartido"]
    }
};

// Promociones editables
export const promociones = {
    anticipada: { 
        title: "Reserva Anticipada", 
        dcto: "-20%",
        desc: "Ahorra reservando con 30 días de antelación.",
        meta: "Dic - Feb"
    },
    larga: { 
        title: "Larga Estadía", 
        dcto: "Promo",
        desc: "15% OFF en reservas de 4 noches o más.",
        meta: "+4 Noches"
    }
};