// enum SaveActionKind {
//   SAVE = 'SAVE',
// }

// interface SaveAction {
//   type: SaveActionKind;
//   payload: string;
// }

// interface SaveState {
//   cards: [];
// }

// export const initialState: SaveState = {
//   cards: [],
// };

// const cardReducer = (state = initialState, action: SaveAction) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SAVE':
//       console.log('SAVE', payload);
//       return {
//         ...state,
//         cards: action.payload,
//       };
//     default:
//       throw new Error(`No case for type ${type} `);
//   }
// };

// export default cardReducer;
