// src/config/habitaciones.js

export const infoHabitaciones = {
    simple: {
        title: "Habitación Simple",
        desc: "Un lugar acogedor y funcional, perfectamente equipado para el viajero independiente.",
        price: "S/ 70",
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Privado"]
    },
    doble: {
        title: "Habitación Doble",
        desc: "Ideal para amigos o colegas, esta habitación cuenta con dos camas confortables.",
        price: "S/ 100",
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Privado"]
    },
    matrimonial: {
        title: "Habitación Matrimonial",
        desc: "Diseñada para parejas, ambiente íntimo y cálido para una escapada romántica.",
        price: "S/ 80",
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Privado"]
    },
    triple: {
        title: "Habitación Triple",
        desc: "Espaciosa y versátil, perfecta para familias pequeñas o grupos.",
        price: "S/ 120",
        features: ["3 Huéspedes", "3 Camas 1.5 plazas", "Baño Privado"]
    },
    cuadruple: {
        title: "Habitación Cuádruple",
        desc: "Máxima capacidad y comodidad para familias y grupos grandes.",
        price: "S/ 140",
        features: ["4 Huéspedes", "4 Camas 1.5 plazas", "Baño Privado"]
    },
    simple_comp: {
        title: "Simple (Baño Compartido)",
        desc: "Opción económica para viajeros prácticos.",
        price: "S/ 40",
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Compartido"]
    },
    doble_comp: {
        title: "Doble (Baño Compartido)",
        desc: "Comodidad para dos a un precio accesible.",
        price: "S/ 80",
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Compartido"]
    },
    matri_comp: {
        title: "Matrimonial (Baño Compartido)",
        desc: "Acogedora para parejas que buscan maximizar su presupuesto.",
        price: "S/ 60",
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Compartido"]
    }
};

// Puedes agregar también las promociones aquí si quieres
export const promociones = {
    anticipada: { title: "Reserva Anticipada", dcto: "-20%" },
    larga: { title: "Larga Estadía", dcto: "Promo" }
};