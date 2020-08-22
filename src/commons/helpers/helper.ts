export class Helper {
    public static slug(str: string): string {
        let strinFormat = str.replace(/^\s+|\s+$/g, ''); // trim
        strinFormat = strinFormat.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        const  from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        const  to   = "aaaaeeeeiiiioooouuuunc------";
        for (let i=0, l=from.length ; i<l ; i++) {
            strinFormat = strinFormat.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        strinFormat = strinFormat.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
    
        return strinFormat;
    }

    public static id (): string {
        return Math.random().toString(36).substr(2, 9);
    };

    public static uniqueSlug(value: string) {
        return this.slug(value) + '-' + this.id();
    }
}
