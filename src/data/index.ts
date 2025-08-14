import type { CardType } from "../types";

import cardTypeNamesJSON from "./cardTypeNames.json";

const cardTypeNames: Record<CardType, string> = cardTypeNamesJSON;
export { cardTypeNames };
