import { InventoryItem } from "./InventoryItem";

export class Player {
    /**
     * The ID of this player.
     * @since 1.0.0
     */
    public id: string;
    /**
     * The name of this player.
     * @since 1.0.0
     */
    public name: string;
    /**
     * The max health of this player.
     * @since 1.0.0
     */
    public maxHealth: number;
    /**
     * The current health of this player.
     * @since 1.0.0
     */
    public health: number;
    /**
     * The max stamina of this player.
     * @since 1.0.0
     */
    public maxStamina: number;
    /**
     * The current stamina of this player.
     * @since 1.0.0
     */
    public stamina: number;
    /**
     * The helmet this player have equipped.
     * @since 1.0.0
     */
    public helmet?: InventoryItem.Type.helmet;
    /**
     * The necklace this player have equipped.
     * @since 1.0.0 
     */
    public necklace?: InventoryItem.Type.necklace;
    /**
     * The breastplate this player have equipped.
     * @since 1.0.0
     */
    public breastplate?: InventoryItem.Type.breastplate;
    /**
     * The gauntlets this player have equipped.
     * @since 1.0.0
     */
    public gauntlets?: InventoryItem.Type.gauntlets;
    /**
     * The item this player have equipped in their left hand.
     * @since 1.0.0
     */
    public leftHand?: InventoryItem.Type.leftHand;
    /**
     * The item this player have equipped in their right hand.
     * @since 1.0.0
     */
    public rightHand?: InventoryItem.Type.rightHand;
    /**
     * The trousers this player have equipped.
     * @since 1.0.0
     */
    public trousers?: InventoryItem.Type.trousers;
    /**
     * The belt this player have equipped.
     * @since 1.0.0
     */
    public belt?: InventoryItem.Type.belt;
    /**
     * The boots this player have equipped.
     * @since 1.0.0
     */
    public boots?: InventoryItem.Type.boots;
    /**
     * @param id The ID of this player.
     * @param name The name of this player.
     * @param maxHealth The max health of this player.
     * @param health The current health of this player.
     * @param maxStamina The max stamina of this player.
     * @param stamina The current stamina of this player.
     * @param helmet The helmet this player have equipped.
     * @param necklace The necklace this player have equipped.
     * @param breastplate The breastplate this player have equipped.
     * @param gauntlets The gauntlets this player have equipped.
     * @param leftHand The item this player have equipped in their left hand.
     * @param rightHand The item this player have equipped in their right hand.
     * @param trousers The trousers this player have equipped.
     * @param belt The belt this player have equipped.
     * @param boots The boots this player have equipped.
     */
    public constructor(
        id: string,
        name: string,
        maxHealth: number,
        health: number,
        maxStamina: number,
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
        this.maxHealth = maxHealth;
        this.health = health;
        this.maxStamina = maxStamina;
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