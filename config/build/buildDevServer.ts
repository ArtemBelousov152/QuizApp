import { BuildOptions } from "./types/config.types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
    }
}