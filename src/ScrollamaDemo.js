import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import dog from './dog.jpg';
import cat from './cat.jpg';
import Hamster from './Hamster.jpg';
import pets_big from './pets_big.png';

const textBlocks = [
  'In total, the dataset consists of 259 confirmed housing records out of 631 total professors in the Faculty of Arts and Sciences (FAS), which represents about 40%. The data may be missing for a variety of reasons, including an inability to confirm the professor’s occupancy in a property based on the available tools, or because some faculty may prefer to rent rather than own property. The value of the average professor’s home was $1.4 million (median is $~1.3 million), about 55% higher than the average home value in Cambridge, MA, which is estimated to be around $900,000. The average distance between a professor’s house and the Harvard Science Center is 4.75 miles. The map below shows the location of Harvard faculty homes along with their corresponding prices. The large white dot represents Harvard University.',
  'The model outputs the 22 most similar districts for each of the 435 districts and performs well based on political ad hoc analysis using metrics from previous political elections. Historically Republican strongholds were matched with similar Republican districts. For example, Alabama District 1, home of Representative Jerry Carl (R) who won and a district that went 63% in favor of Trump in the 2020 election, was identified by the model to be most similar to Mississippi District 1 which is also a Republican stronghold in a similar area.',
  'Similarly, Democratic districts were matched with historically Democratic strongholds. For example, California\'s 18th congressional district, Anna Eshoo (D), which went 76.4% for Biden, was rated most similar by our model to Jerry Nadler’s (D) NY-10, which represents Manhattan.',
  'For toss up districts, results seem more mixed with districts such as California’s 21st district, a district that voted for 54% for Biden and narrowly for Republican representative David Valadao, being matched with Texas’s 34th district, which has been held by Democrat Filemon Vela Jr. for the past 8 years (won 55.4%-41.9% against his Republican opponent in 2020) and went in favor 52% for Biden.',
];

const images = [
  <img src={dog} style={{ width: '50%' }} alt="Dog" />,
  <img src={cat} style={{ width: '50%' }} alt="Cat" />,
  <img src={Hamster} style={{ width: '50%' }} alt="Hamster" />,
  <img src={pets_big} style={{ width: '50%' }} alt="Pets" />,
]

const CenteredScrollama = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentStepExit, setCurrentStepExit] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  const onStepExit = ({ data }) => {
    setCurrentStepExit(data);
  };

  const onStepProgress = ({ progress }) => {
    setCurrentProgress(progress);
  }

  return (
    <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
      <div style={{ position: 'sticky', top: '50%', transform: 'translate(0%, -50%)', border: '1px solid orchid', margin: 'auto', zIndex: -1 }}>
        {images[currentStepIndex]}
      </div>
      <h1>Centered Scrollama</h1>
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} threshold={1} offset={0.5} progress debug>
        {
          textBlocks.map((block, i) => (
            <Step data={i} key={i}>
              <div
                style={{
                  margin: '50vh 0',
                  border: '1px solid gray',
                  background: '#ffffff',
                  opacity: currentStepIndex === i ? 1 : 0.2,
                }}
              >
                <div style={{ width: '50%', margin: 'auto' }}>
                  {block}
                </div>
                <br style={{clear: 'both'}}/>
              </div>
            </Step>
          ))
        }
      </Scrollama>
    </div>
  )
}

const GradualScrollama = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentStepExit, setCurrentStepExit] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  const onStepExit = ({ data }) => {
    setCurrentStepExit(data);
  };

  const onStepProgress = ({ progress }) => {
    setCurrentProgress(progress);
  }

  return (
    <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
      <div style={{ position: 'sticky', top: '50vh', border: '1px solid orchid', width: '50%', zIndex: -1 }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}. The current triggered step exit is: {currentStepExit}. The current triggered progress is: {currentProgress}.
      </div>
      <h1>Gradual Scrollama</h1>
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} threshold={1} offset={0.5} progress debug>
        {
          textBlocks.map((block, i) => (
            <Step data={i} key={i}>
              <div
                style={{
                  margin: '50vh 0',
                  border: '1px solid gray',
                  opacity: currentStepIndex === i ? 1 : 0.2,
                }}
              >
                <div style={{ width: '50%', float: 'right' }}>
                  {block}
                </div>
                <br style={{clear: 'both'}}/>
              </div>
            </Step>
          ))
        }
      </Scrollama>
    </div>
  )
}

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentStepExit, setCurrentStepExit] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  const onStepExit = ({ data }) => {
    setCurrentStepExit(data);
  };

  const onStepProgress = ({ progress }) => {
    setCurrentProgress(progress);
  }

  return (
    <>
      <div style={{height: '1000px'}}/>
      <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
        <div style={{ position: 'sticky', top: '50vh', border: '1px solid orchid', width: '50%', zIndex: -1 }}>
          I'm sticky. The current triggered step index is: {currentStepIndex}. The current triggered step exit is: {currentStepExit}. The current triggered progress is: {currentProgress}.
        </div>
        <div
          style={{
            margin: '50vh 0',
            border: '1px solid gray',
            background: '#ffffff',
          }}
        >
          <div style={{ width: '50%', float: 'right' }}>
            The model was based on the 2018 Politico district similarity maps, which analyzed political and demographic similarity of
            districts separately. For our model, we retrained the political model on the 3 most recent House and Presidential election
            cycles and merged it with the demographic model, which was retrained on the most recent 2018 census data. We then added the
            geographic centroid of each district as another model parameter to account for locational similarity. In short, we combined
            demographic information, past political results, and geographic location of each congressional district into one model.
            Below is a diagram of the pipeline used to develop our model.
          </div>
          <br style={{clear: 'both'}}/>
        </div>
        <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} onStepProgress={onStepProgress} threshold={1} offset={0.5} progress debug>
          {
            textBlocks.map((block, i) => (
              <Step data={i} key={i}>
                <div
                  style={{
                    margin: '50vh 0',
                    border: '1px solid gray',
                    background: '#ffffff',
                    opacity: 0.2,
                  }}
                >
                  <div style={{ width: '50%', float: 'right' }}>
                    {block}
                  </div>
                  <br style={{clear: 'both'}}/>
                </div>
              </Step>
            ))
          }
        </Scrollama>
      </div>
      <div style={{height: '1000px'}}/>
      {GradualScrollama()}
      <div style={{height: '1000px'}}/>
      {CenteredScrollama()}
      <div style={{height: '1000px'}}/>
    </>
  );
};

export default ScrollamaDemo;