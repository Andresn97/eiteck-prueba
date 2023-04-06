import { createSlice } from "@reduxjs/toolkit";

import { Character } from '../../../eiteck/interfaces/character';
import { Gender, Species, Status } from "../../../eiteck/interfaces";


interface CharacterSlice {
  characters: Character[],
  singleCharacter: Character,
}

const emptyCharacter: Character = {
  id: 0,
  name: '',
  status: Status.Unknown,
  species: Species.Alien,
  type: '',
  gender: Gender.Unknown,
  origin: {
    name: '',
    url: ''
  },
  location: {
    name: '',
    url: ''
  },
  image: '',
  episode: [],
  url: '',
  created: ''
};


const initialState: CharacterSlice = {
  characters: [],
  singleCharacter: emptyCharacter,
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    onSetCharacters: ( state, { payload } ) => {
      state.characters = payload;
    },
    onClearCharacters: ( state ) => {
      state.characters = [];
    },
    onSetSingleCharacter: ( state, { payload } ) => {
      state.singleCharacter = payload
    },
    onClearSingleCharacter: ( state ) => {
      state.singleCharacter = emptyCharacter
    },
  }
});

export const { 
  onSetCharacters, 
  onClearCharacters,
  onSetSingleCharacter,
  onClearSingleCharacter,
} = characterSlice.actions;