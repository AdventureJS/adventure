export class Adventure {
    /**
     * The options for the adventure instance.
     * @see {@link Adventure.Options} for all available options.
     * @since 1.0.0
     */
    public options: Adventure.Options;
    /**
     * @param options The options for the adventure. See {@link Adventure.Options} for all options.
     * @since 1.0.0
     */
    public constructor(
        options: Adventure.Options,
    ) {
        this.options = options;
    }
}

export namespace Adventure {
    /**
     * The options for {@link Adventure}.
     * @since 1.0.0
     */
    export interface Options {
        /**
         * The name of the adventure instance.
         * @since 1.0.0
         */
        name: string;
        /**
         * The experience gain for all players in this instance.
         * @since 1.0.0
         * @example ```js
         * // Using a function
         * (min, max) => Math.floor(Math.random() * (max - min) + min);
         * // Using a number
         * 10;
         * ```
         */
        experienceGain: (...args: any[]) => number | number;
    }
}