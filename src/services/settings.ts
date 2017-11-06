export class SettingsService{
    private isAltBackground: boolean = false;
    
    setAlternativeBackGround(isAlt: boolean){
        this.isAltBackground = isAlt;
    }

    isAlternativeBackground(){
        return this.isAltBackground;
    }
}