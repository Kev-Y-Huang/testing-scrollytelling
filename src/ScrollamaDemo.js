import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <>
      <div style={{height: '1000px'}}/>
      <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
        <div style={{ position: 'sticky', top: '50vh', border: '1px solid orchid', width: '50%', float: 'left' }}>
          I'm sticky. The current triggered step index is: {currentStepIndex}
        </div>
        <div
          style={{
            margin: '50vh 0',
            border: '1px solid gray',
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
        <Scrollama onStepEnter={onStepEnter} debug>
          <Step data={0} key={0}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === 0 ? 1 : 0.2,
              }}
            >
              <div style={{ width: '50%', float: 'right' }}>
                The model was based on the 2018 Politico district similarity maps, which analyzed political and demographic similarity
                of districts separately. For our model, we retrained the political model on the 3 most recent House and Presidential
                election cycles and merged it with the demographic model, which was retrained on the most recent 2018 census data.
                We then added the geographic centroid of each district as another model parameter to account for locational similarity.
                In short, we combined demographic information, past political results, and geographic location of each congressional
                district into one model. Below is a diagram of the pipeline used to develop our model.
              </div>
              <br style={{clear: 'both'}}/>
            </div>
          </Step>
          <Step data={1} key={1}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === 1 ? 1 : 0.2,
              }}
            >
              <div style={{ width: '50%', float: 'right' }}>
                The model outputs the 22 most similar districts for each of the 435 districts and performs well based on political
                ad hoc analysis using metrics from previous political elections. Historically Republican strongholds were matched
                with similar Republican districts. For example, Alabama District 1, home of Representative Jerry Carl (R) who won
                and a district that went 63% in favor of Trump in the 2020 election, was identified by the model to be most similar
                to Mississippi District 1 which is also a Republican stronghold in a similar area.
              </div>
              <br style={{clear: 'both'}}/>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === 2 ? 1 : 0.2,
              }}
            >
              <div style={{ width: '50%', float: 'right' }}>
                Similarly, Democratic districts were matched with historically Democratic strongholds. For example, California's
                18th congressional district, Anna Eshoo (D), which went 76.4% for Biden, was rated most similar by our model to
                Jerry Nadler’s (D) NY-10, which represents Manhattan.
              </div>
              <br style={{clear: 'both'}}/>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === 3 ? 1 : 0.2,
              }}
            >
              <div style={{ width: '50%', float: 'right' }}>
                For toss up districts, results seem more mixed with districts such as California’s 21st district, a district that
                voted for 54% for Biden and narrowly for Republican representative David Valadao, being matched with Texas’s 34th
                district, which has been held by Democrat Filemon Vela Jr. for the past 8 years (won 55.4%-41.9% against his
                Republican opponent in 2020) and went in favor 52% for Biden.
              </div>
              <br style={{clear: 'both'}}/>
            </div>
          </Step>
        </Scrollama>
      </div>
      <div style={{height: '1000px'}}/>
    </>
  );
};

export default ScrollamaDemo;