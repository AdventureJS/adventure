export class Rarity {
    /**
     * The name of the rarity.
     * @since 1.0.0
     */
    public name: string;
    /**
     * The value of the rarity. Higher value = higher rarity.
     * @since 1.0.0
     */
    public value: number;
    /**
     * @param name The name of the rarity.
     * @param value The value of the rarity. Higher values = higher rarity.
     * @since 1.0.0
     */
    constructor(
        name: string,
        value: number
    ) {
        this.name = name;
        this.value = value;
    }
}