import React, { createContext, ProviderProps, Consumer, useState } from 'react';
import { ISong } from 'Utility/dictionary';

interface IAudioContext {
  currentSong: ISong;
  setCurrentSong: (newSong: ISong) => ISong;
}

const AudioContext = createContext({} as IAudioContext);

const AudioContextProvider: React.FC = ({ children }: ProviderProps<IAudioContext>) => {
  const [currentSong, setCurrentSong]: [ISong, any] = useState({} as ISong);

  return <AudioContext.Provider value={{ currentSong, setCurrentSong }}>{children}</AudioContext.Provider>;
};

const AudioContextConsumer: Consumer<IAudioContext> = AudioContext.Consumer;

export { AudioContext, AudioContextConsumer, AudioContextProvider };
