let saudiaAirline = {
    airlineName: "الخطوط الجوية السعودية",
    country: "السعودية",
    fleetSize: 120,
    destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
    inOperation: true,
    bookFlight: function(destination) {
        if (this.destinations.includes(destination)) {
            console.log(`تم حجز رحلة إلى ${destination}.`);
        } else {
            console.log(`عذرًا، لا توجد رحلات إلى ${destination}`);
        }
    },
    addDestination: function (newDestination) {
        if (!this.destinations.includes(newDestination)) {
            this.destinations.push(newDestination);
            console.log(`${newDestination} اضافة وجهة جديدة`);
        } else {
            console.log(`${newDestination} الوجهة موجودة مسبقا`);
        }
    },
    getSummary: function () {
        console.log(
            `${this.airlineName} تعمل في 
            ${this.country} وتمتلك 
            ${this.fleetSize} طائرة وتطير إلى 
            ${this.destinations.length} وجهة `);
    }  
};


console.log(saudiaAirline);

saudiaAirline.bookFlight("دبي");
// تم حجز رحلة إلى دبي.

saudiaAirline.addDestination("لندن");

saudiaAirline.getSummary();
// الخطوط الجوية السعودية تعمل في السعودية وتمتلك 120 طائرة وتطير إلى 21 وجهة.



