import React from 'react';

import KnowMore from '../components/KnowMore';
import ParticipateSection from '../components/ParticipateSection';
import Divider from '../components/Divider.js';
import Lights from '../components/Lights';
import YoutubeLiveSection from '../components/YoutubeLiveSection';

function Info() {
  return (
    <>
      <KnowMore />
      <Divider />
      <ParticipateSection />
      <Divider />
      <Lights />
      <Divider />
      <YoutubeLiveSection />
    </>
  );
}

export default Info;
