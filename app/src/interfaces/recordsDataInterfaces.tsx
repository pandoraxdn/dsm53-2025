export interface RecordsResponse {
    total:    number;
    promTemp: number;
    maxAire:  number;
    phMen:    number;
    presYear: PresYear[];
    records:  Records;
}

export interface PresYear {
    _id:         number;
    avgPressure: number;
}

export interface Records {
    today:           Today;
    yesterday:       Yesterday;
    beforeYesterday: BeforeYesterday;
}

export interface BeforeYesterday {
    lastBeforeYesterday: any[];
    maxBeforeYesterday:  number;
    minBeforeYesterday:  number;
}

export interface Today {
    lastToday: LastToday[];
    maxToday:  number;
    minToday:  number;
}

export interface LastToday {
    _id:         string;
    temperatura: number;
    calidadAire: number;
    ph:          number;
    presionAt:   number;
    fecha:       Date;
    __v:         number;
}

export interface Yesterday {
    lastYesterday: any[];
    maxYesterday:  number;
    minYesterday:  number;
}
