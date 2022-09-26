export interface AllPokemons {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonNames[];
}

export interface PokemonNames {
    name: string;
    url: string;
}