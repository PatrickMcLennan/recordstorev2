import React from 'react';

import { StyledH2, StyledP } from './AboutRecordStore.style';
import usePageMount from 'Hook/usePageMount';

export interface IAboutRecordStoreProps {}

const AboutRecordStore: React.FC<IAboutRecordStoreProps> = () => {
  usePageMount('About');
  return (
    <main>
      <StyledH2>Thanks for checking out recordStore!</StyledH2>

      <StyledP>
        recordStore is a passion project made in hopes that people can discover new music across all platforms easier.
        Hopefully you enjoy browsing recordStore just as much as you do browsing through your local record store!
        <p>signature image will go here</p>
        <span> - Patrick McLennan</span>
      </StyledP>

      <h5>recordStore was made possible thanks to these people:</h5>
    </main>
  );
};

export default AboutRecordStore;
