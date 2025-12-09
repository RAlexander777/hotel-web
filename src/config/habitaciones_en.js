// src/config/habitaciones_en.js

export const TIPO_CAMBIO= 3.40;

export const calcularUSD = (soles) => Math.ceil(soles / TIPO_CAMBIO);

export const infoHabitaciones = {
    simple: {
        title: "Single Room",
        desc: "A cozy and functional space, perfectly equipped for the independent traveler.",
        precio: 60,       // Precio Real
        precioAntes: 80,  // Precio Tachado
        oferta: true,  
        features: ["1 Guest", "1.5 size Bed", "Private Bath"]
    },
    doble: {
        title: "Double Room",
        desc: "Ideal for friends or colleagues, featuring two comfortable beds.",
        precio: 80,       // Precio Real
        precioAntes: 100,  // Precio Tachado
        oferta: true, 
        features: ["2 Guests", "2 Single Beds", "Private Bath"]
    },
    matrimonial: {
        title: "Matrimonial Bedroom",
        desc: "An intimate and warm atmosphere for a romantic getaway.",
        precio: 70,       // Precio Real
        precioAntes: 90,  // Precio Tachado
        oferta: true, 
        features: ["2 Guests", "Double Bed", "Private Bath"]
    },
    triple: {
        title: "Triple Room",
        desc: "Spacious and versatile, perfect for small families or groups.",
        precio: 90,       // Precio Real
        precioAntes: 120,  // Precio Tachado
        oferta: true, 
        features: ["3 Guests", "3 Single Beds", "Private Bath"]
    },
    cuadruple: {
        title: "Quadruple Room",
        desc: "Maximum capacity and comfort for families and large groups.",
        precio: 100,       // Precio Real
        precioAntes: 140,  // Precio Tachado
        oferta: true,
        features: ["4 Guests", "4 Single Beds", "Private Bath"]
    },
    simple_comp: {
        title: "Simple (Shared Bathroom)",
        desc: "Budget-friendly option for practical travelers.",
        precio: 40,       // Precio Real
        precioAntes: 55,  // Precio Tachado
        oferta: true,
        features: ["1 Guests", "1.5 size Bed", "Shared Bathroom"]
    },
    doble_comp: {
        title: "Double (Shared Bathroom)",
        desc: "Comfort for two at an affordable price.",
        precio: 50,       // Precio Real
        precioAntes: 75,  // Precio Tachado
        oferta: true,
        features: ["2 Guests", "2 Single Beds", "Shared Bathroom"]
    },
    matri_comp: {
        title: "Matrimonial (Shared Bathroom)",
        desc: "Cozy for couples looking to maximize their budget.",
        precio: 45,       // Precio Real
        precioAntes: 65,  // Precio Tachado
        oferta: true, 
        features: ["2 Guests", "Double Bed", "Shared Bathroom"]
    }
    /*comp: {
        title: "Shared Room",
        desc: "Shared space with other travelers, our most accessible room.",
        precio: 30,       // Precio Real
        precioAntes: 45,  // Precio Tachado
        oferta: true,
        features: ["2 Guests", "2 Single Beds", "Shared Bathroom"]
    }*/
};

export const promociones = {
    anticipada: { 
        title: "Early Bird Booking", 
        dcto: "-20%",
        desc: "Save by booking 30 days in advance.",
        meta: "Dec - Feb"
    },
    larga: { 
        title: "Long Stay", 
        dcto: "Promo",
        desc: "15% OFF for bookings of 4 nights or more.",
        meta: "+4 Nights"
    }
};