function powderMass(fabricNumber) {
    switch (fabricNumber) {
        case 1 /*хлопок*/:
            return 50;
        case 2 /*шёлк*/:
            return 60;
        case 3 /*синтетика*/:
            return 30;
        default:
            return "Указан неверный номер";
    }
}