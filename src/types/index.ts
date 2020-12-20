export type TCarState = {
    tirePressure: number,
    petrol: number,
    ignition: boolean,
}

export type TCarStateResult = {
    [K in keyof TCarState]: boolean
}