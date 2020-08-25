// @ts-ignore
import fs from 'fs';


interface JackSkellington {
    pumpkinKing: boolean,
    masterOfFreight: string,
    toAGuyInKenctucky: MisterUnlucky
    purpose: () => void
    hiddenInACave?: 1000000

}

interface MisterUnlucky {
    scareYouRightOutOfYourPants: boolean; 
}
const makingChristmas = () => {
    console.log('Its so fun!');
    return () => {}
};

const NightmareBeforeChristmas: JackSkellington = {
    pumpkinKing: true,
    masterOfFreight: 'Demon of light',
    toAGuyInKenctucky: {
        scareYouRightOutOfYourPants: true
    },
    purpose: makingChristmas(),
}
