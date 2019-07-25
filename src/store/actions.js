export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const buyCarPart = newPart => {
  return {
    type: BUY_ITEM,
    payload: newPart
  };
};

export const removeCarPart = removePart => {
  return {
    type: REMOVE_ITEM,
    payload: removePart
  };
};
