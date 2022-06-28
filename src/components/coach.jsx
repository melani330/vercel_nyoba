import "../css/coach.css";
import * as React from 'react';
import Typography from '@mui/material/Typography';

const Coach = (props) => {
    return (
      <div id='coach' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <Typography
              mb={3}
              mt={3}
              pb={2}
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              className="judul_coach"
            >
              COACH DI USAHAKUY
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bertemu coach dari berbagai industri terkemuka
            </Typography>
          </div>
          <div className='row'>
            {props.DataCoach.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-xs-6 col-md-3 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    )
  }
  export default Coach;