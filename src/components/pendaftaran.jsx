import * as React from 'react';
import Typography from '@mui/material/Typography';
import 'font-awesome/css/font-awesome.min.css';
import "../css/pendaftaran.css";

const Pendaftaran = (props)=> {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <Typography
              mb= {3}
              mt= {3}
              pb= {2}
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              className="judul_pendaftaran"
            >
              TAHAPAN PENDAFTARAN
            </Typography>
            
            {/* <h2>tahapan pendaftaran</h2> */}
        </div>
        <div className='row'>
          {props.DataPendaftaran.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
export default Pendaftaran;