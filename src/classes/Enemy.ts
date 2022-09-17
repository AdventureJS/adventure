import { InventoryItem } from "./InventoryItem";

export class Enemy {
    /**
     * The ID of this enemy.
     * @since 1.0.0
     */
    public id: string;
    /**
     * The name of this enemy.
     * @since 1.0.0
     */
    public name: string;
    /**
     * The health of this enemy.
     * @since 1.0.0
     */
    public health: number;
    /**
     * The stamina of this enemy.
     * @since 1.0.0
     */
    public stamina: number;
    /**
     * The helmet this enemy have equipped.
     * @since 1.0.0
     */
    public helmet?: InventoryItem.Type.helmet;
    /**
     * The necklace this enemy have equipped.
     * @since 1.0.0 
     */
    public necklace?: InventoryItem.Type.necklace;
    /**
     * The breastplate this enemy have equipped.
     * @since 1.0.0
     */
    public breastplate?: InventoryItem.Type.breastplate;
    /**
     * The gauntlets this enemy have equipped.
     * @since 1.0.0
     */
    public gauntlets?: InventoryItem.Type.gauntlets;
    /**
     * The item this enemy have equipped in their left hand.
     * @since 1.0.0
     */
    public leftHand?: InventoryItem.Type.leftHand;
    /**
     * The item this enemy have equipped in their right hand.
     * @since 1.0.0
     */
    public rightHand?: InventoryItem.Type.rightHand;
    /**
     * The trousers this enemy have equipped.
     * @since 1.0.0
     */
    public trousers?: InventoryItem.Type.trousers;
    /**
     * The belt this enemy have equipped.
     * @since 1.0.0
     */
    public belt?: InventoryItem.Type.belt;
    /**
     * The boots this enemy have equipped.
     * @since 1.0.0
     */
    public boots?: InventoryItem.Type.boots;
    /**
     * @param id The ID of this enemy.
     * @param name The name of this enemy.
     * @param health The current health of this enemy.
     * @param stamina The current stamina of this enemy.
     * @param helmet The helmet this enemy have equipped.
     * @param necklace The necklace this enemy have equipped.
     * @param breastplate The breastplate this enemy have equipped.
     * @param gauntlets The gauntlets this enemy have equipped.
     * @param leftHand The item this enemy have equipped in their left hand.
     * @param rightHand The item this enemy have equipped in their right hand.
     * @param trousers The trousers this enemy have equipped.
     * @param belt The belt this enemy have equipped.
     * @param boots The boots this enemy have equipped.
     */
    public constructor(
        id: string,
        name: string,
        health: number,
        stamina: number,
        helmet?: InventoryItem.Type.helmet,
        necklace?: InventoryItem.Type.necklace,
        breastplate?: InventoryItem.Type.breastplate,
        gauntlets?: InventoryItem.Type.gauntlets,
        leftHand?: InventoryItem.Type.leftHand,
        rightHand?: InventoryItem.Type.rightHand,
        trousers?: InventoryItem.Type.trousers,
        belt?: InventoryItem.Type.belt,
        boots?: InventoryItem.Type.boots,
    ) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.stamina = stamina;
        this.helmet = helmet;
        this.necklace = necklace;
        this.breastplate = breastplate;
        this.gauntlets = gauntlets;
        this.leftHand = leftHand;
        this.rightHand = rightHand;
        this.trousers = trousers;
        this.belt = belt;
        this.boots = boots;
    }
}