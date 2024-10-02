import {heroes} from '../data/heroes'


export const getHeoresByPublisher = (publisher) =>{

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher)){
        throw new Error('No valid Publisher')
    }

    return heroes.filter( hero => hero.publisher === publisher)

}