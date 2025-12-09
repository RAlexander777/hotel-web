// src/config/habitaciones.js

export const TIPO_CAMBIO= 3.40;

export const calcularUSD = (soles) => Math.ceil(soles / TIPO_CAMBIO);

export const infoHabitaciones = {
    simple: {
        title: "Habitación Simple",
        desc: "Un lugar acogedor y funcional, equipado para el viajero independiente.",
        precio: 60,       // Precio Real
        precioAntes: 80,  // Precio Tachado
        oferta: true,     
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Privado"]
    },
    doble: {
        title: "Habitación Doble",
        desc: "Ideal para amigos o colegas, esta habitación cuenta con dos camas confortables.",
        precio: 80,       // Precio Real
        precioAntes: 100,  // Precio Tachado
        oferta: true,
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Privado"]
    },
    matrimonial: {
        title: "Habitación Matrimonial",
        desc: "Diseñada para parejas, ambiente íntimo y cálido para una escapada romántica.",
        precio: 70,       // Precio Real
        precioAntes: 90,  // Precio Tachado
        oferta: true,
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Privado"]
    },
    triple: {
        title: "Habitación Triple",
        desc: "Espaciosa y versátil, perfecta para familias pequeñas o grupos.",
        precio: 90,       // Precio Real
        precioAntes: 120,  // Precio Tachado
        oferta: true,
        features: ["3 Huéspedes", "3 Camas 1.5 plazas", "Baño Privado"]
    },
    cuadruple: {
        title: "Habitación Cuádruple",
        desc: "Máxima capacidad y comodidad para familias y grupos grandes.",
        precio: 100,       // Precio Real
        precioAntes: 140,  // Precio Tachado
        oferta: true,
        features: ["4 Huéspedes", "4 Camas 1.5 plazas", "Baño Privado"]
    },
    simple_comp: {
        title: "Simple (Baño Compartido)",
        desc: "Opción económica para viajeros prácticos.",
        precio: 40,       // Precio Real
        precioAntes: 55,  // Precio Tachado
        oferta: true,
        features: ["1 Huésped", "Cama 1.5 plazas", "Baño Compartido"]
    },
    doble_comp: {
        title: "Doble (Baño Compartido)",
        desc: "Comodidad para dos a un precio accesible.",
        precio: 50,       // Precio Real
        precioAntes: 75,  // Precio Tachado
        oferta: true,
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Compartido"]
    },
    matri_comp: {
        title: "Matrimonial (Baño Compartido)",
        desc: "Acogedora para parejas que buscan maximizar su presupuesto.",
        precio: 45,       // Precio Real
        precioAntes: 65,  // Precio Tachado
        oferta: true,
        features: ["2 Huéspedes", "Cama 2 plazas", "Baño Compartido"]
    }
    /*comp: {
        title: "Habitación Compartida",
        desc: "Espacio compartido con otros viajeros, nuestra habitación mas accesible.",
        precio: 30,       // Precio Real
        precioAntes: 45,  // Precio Tachado
        oferta: true,
        features: ["2 Huéspedes", "2 Camas 1.5 plazas", "Baño Compartido"]
    }*/
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