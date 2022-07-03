import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Pengenalan Strategi Marketing',
    description: ` Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. - Donec id elit non mi porta gravida at eget metus. -
    Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
    metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
  {
    label: 'Tujuan Strategi Marketing',
    description:  ` Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. - Donec id elit non mi porta gravida at eget metus. -
    Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
    metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
  {
    label: 'Hal Penting Dalam Strategi Marketing ',
    description:
    ` Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. - Donec id elit non mi porta gravida at eget metus. -
    Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
    metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
  {
    label: 'Kegagalan Dalam Strategi Marketing',
    description:  ` Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. - Donec id elit non mi porta gravida at eget metus. -
    Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
    metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
  {
    label: 'Langkah-Langkah Membuat Strategi Marketing',
    description:  ` Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
    porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus. - Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. - Donec id elit non mi porta gravida at eget metus. -
    Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
    metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
];

export default function TemaDetailStep() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
