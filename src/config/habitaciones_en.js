// src/config/habitaciones_en.js

export const infoHabitaciones = {
    simple: {
        title: "Single Room",
        desc: "A cozy and functional space, perfectly equipped for the independent traveler.",
        price: { pen: "S/ 70", usd: "$ 19" },
        features: ["1 Guest", "1.5 size Bed", "Private Bath"]
    },
    doble: {
        title: "Double Room",
        desc: "Ideal for friends or colleagues, featuring two comfortable beds.",
        price: { pen: "S/ 100", usd: "$ 27" },
        features: ["2 Guests", "2 Single Beds", "Private Bath"]
    },
    matrimonial: {
        title: "Matrimonial Bedroom",
        desc: "Designed for couples, an intimate and warm atmosphere for a romantic getaway.",
        price: { pen: "S/ 80", usd: "$ 22" },
        features: ["2 Guests", "Double Bed", "Private Bath"]
    },
    triple: {
        title: "Triple Room",
        desc: "Spacious and versatile, perfect for small families or groups.",
        price: { pen: "S/ 120", usd: "$ 33" },
        features: ["3 Guests", "3 Single Beds", "Private Bath"]
    },
    cuadruple: {
        title: "Quadruple Room",
        desc: "Maximum capacity and comfort for families and large groups.",
        price: { pen: "S/ 140", usd: "$ 38" },
        features: ["4 Guests", "4 Single Beds", "Private Bath"]
    },
    simple_comp: {
        title: "Simple (Shared Bathroom)",
        desc: "Budget-friendly option for practical travelers.",
        price: { pen: "S/ 40", usd: "$ 11" },
        features: ["1 Guests", "1.5 size Bed", "Shared Bathroom"]
    },
    doble_comp: {
        title: "Double (Shared Bathroom)",
        desc: "Comfort for two at an affordable price.",
        price: { pen: "S/ 80", usd: "$ 22" },
        features: ["2 Guests", "2 Single Beds", "Shared Bathroom"]
    },
    matri_comp: {
        title: "Matrimonial (Shared Bathroom)",
        desc: "Cozy for couples looking to maximize their budget.",
        price: { pen: "S/ 60", usd: "$ 16" },
        features: ["2 Guests", "Double Bed", "Shared Bathroom"]
    }
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