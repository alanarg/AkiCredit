import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
    
  createData('Janeiro', 0),
  createData('Fevereiro', 300),
  createData('Março', 600),
  createData('Abriu', 800),
  createData('Maio', 1500),
  createData('Junho', 2000),
  createData('Julho', 2400),
  createData('Agosto', 2400),
  createData('Setembro', undefined),
  createData('Outubro', undefined),
  createData('Novembro', undefined),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <h2 style={{color:'#00acba', fontFamily:'Roboto, sans-serif'}}>Pagamentos</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: 'green' }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="bars" dataKey="amount" stroke="green" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}