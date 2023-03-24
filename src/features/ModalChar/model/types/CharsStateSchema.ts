export interface Char {
    name: string
    height: string
    mass: string
    created: string
    hair_color: string
    gender: string
    eye_color:string
    birth_year: string
    skin_color: string
    url: string
}
export interface IGetCharResponse {
    results:Char[],
    count: number
}

export interface StateType<DataType>{
    isLoading: boolean,
    data: DataType
    error: string | null
}
