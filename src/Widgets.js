import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('PAPA React is back', 'Top news - 999 readers')}
      {newsArticle(
        `Massive Dust Storm, Season's First Rain In Mumbai`,
        'Top news - 2300 readers'
      )}
      {newsArticle(
        'Video: IndiGo passengers in Rajkot clash with staff over 2.5-hour delay and no food',
        'Top news - 119 readers'
      )}
      {newsArticle(
        'IPL Playoffs Scenario: Exact Score RCB Need To Beat CSK In Top 4 Race',
        'Top news - 1934 readers'
      )}
      {newsArticle(
        'Swedish PM says open to hosting nuclear weapons in wartime',
        'Top news - 32 readers'
      )}
      {newsArticle('What is new in React 2024?', 'Top news - 4589 readers')}
    </div>
  );
}

export default Widgets;
