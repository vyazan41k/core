const initialState = {
  height: 200,
  weight: 200,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "VIOLET":
      return {
        height: 300,
        weight: 300,
      };
    case "PINK":
      return {
        height: 400,
        weight: 400,
      };
    case "ORANGE":
      return {
        height: 500,
        weight: 500,
      };
    case "PALEGREEN":
      return {
        height: 600,
        weight: 600,
      };
    case "PURPLE":
      return {
        height: 700,
        weight: 700,
      };
  }
}
