import { Rarity } from "./Rarity";

export class Item {
    /**
     * The name of this item.
     * @since 1.0.0
     */
    public name: string;
    /**
     * The description of this item.
     * @since 1.0.0
     */
    public description: string;
    /**
     * The rarity of this item.
     * @since 1.0.0
     */
    public rarity: Rarity;
    /**
     * The weight of this item.
     * @since 1.0.0
     */
    public weight: number;
    /**
     * The value of this item.
     * @since 1.0.0
     */
    public value: number;
    /**
     * @param name The name of this item.
     * @param description The description of this item.
     * @param rarity The rarity of this item.
     * @param weight The weight of this item.
     * @param value The value of this item.
     * @since 1.0.0
     */
    constructor(
        name: string,
        description: string,
        rarity: Rarity,
        weight: number,
        value: number,
    ) {
        this.name = name;
        this.description = description;
        this.rarity = rarity;
        this.weight = weight;
        this.value = value;
    }
}