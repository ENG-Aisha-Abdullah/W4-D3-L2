let saudiaAirline = {
    airlineName: "الخطوط الجوية السعودية",
    country: "السعودية",
    fleetSize: 150,
    destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
    inOperation: true,
    bookFlight: function(destination) {
        if (this.destinations.includes(destination)) {
            console.log(`تم حجز رحلة إلى ${destination}.`);
        } else {
            console.log(`عذرًا، لا توجد رحلات إلى ${destination}`);
        }
    },
};

console.log(saudiaAirline);




