import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
    
  createData('Janeiro', 100),
  createData('Fevereiro', 100),
  createData('Março', 100),
  createData('Abriu', 100),
  createData('Maio', 100),
  createData('Junho', 100),
  createData('Julho', 100),
  createData('Agosto', 100),
  createData('Setembro', 100),
  createData('Outubro', 100),
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
              Pagamentos (%)
            </Label>
          </YAxis>
          <Line type="bars" dataKey="amount" stroke="#00acba" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}