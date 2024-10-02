import { heroes } from "../data/heroes";


export const getHeroByName = (name = '') =>{

    const heroName = name.trim().toLocaleLowerCase()

    if( heroName <= 1) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(heroName)
    )

}