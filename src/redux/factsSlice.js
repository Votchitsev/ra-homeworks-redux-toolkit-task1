import { createSlice } from "@reduxjs/toolkit";

const factsBase = [
  {
    id: 0,
    content: 'прообразом Чубакки стал пёс режиссёра',
  },
  {
    id: 1,
    content: 'актёрам разрешили подобрать любимый цвет для своих световых мечей',
  },
  {
    id: 2,
    content: 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
  },
  {
    id: 3,
    content: 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
  },
  {
    id: 4,
    content: 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
  }
]

const initialState = {
  facts: []
}

export const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    get: (state, action) => {
      state.facts = factsBase.slice(0, action.payload);
    }
  }
})

export default factsSlice.reducer;

export const { get } = factsSlice.actions;
