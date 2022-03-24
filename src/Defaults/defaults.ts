class Default {

    private primaryColor: string;
    private secondaryColor: string;

    constructor( primaryColor: string, secondaryColor: string ) {
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
    }
    public getPrimaryColor(): string {
        return this.primaryColor;
    }

    public getSecondaryColor(): string {
        return this.secondaryColor;
    }
}

export default Default;