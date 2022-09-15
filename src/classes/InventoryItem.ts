export class InventoryItem  {
    /**
     * The name of this inventory item.
     * @since 1.0.0
     */
    public name: string;
    /**
     * The carry weight of this inventory item.
     * @since 1.0.0
     */
    public carryWeight: number;
    /**
     * The size of this inventory item.
     * @since 1.0.0
     */
    public size: number;
    /**
     * The amount of this inventory item.
     * @since 1.0.0
     */
    public amount: number;
    /**
     * Wether or not this inventory item is equipped.
     * @since 1.0.0
     */
    public equipped: boolean;
    /**
     * The type of this inventory item. See {@link InventoryItem.Type} for available types.
     * @since 1.0.0
     */
    public type: InventoryItem.Type;
    /**
     * @param name The name of this inventory item.
     * @param carryWeight The carry weight of this inventory item.
     * @param size The size of this inventory item.
     * @param amount The amount of this inventory item.
     * @param equipped Wether or not this inventory item is equipped.
     * @param type The type of this inventory item. See {@link InventoryItem.Type} for available types.
     */
    public constructor(
        name: string,
        carryWeight: number,
        size: number,
        amount: number,
        equipped: boolean,
        type: InventoryItem.Type,
    ) {
        this.name = name;
        this.carryWeight = carryWeight;
        this.size = size;
        this.amount = amount;
        this.equipped = equipped;
        this.type = type;
    }
}

export namespace InventoryItem {
    /**
     * The type of this inventory item.
     * @since 1.0.0
     */
    export enum Type {
        helmet,
        necklace,
        breastplate,
        gauntlets,
        leftHand,
        rightHand,
        trousers,
        belt,
        boots,
    }
}