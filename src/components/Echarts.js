import React from 'react'
import ReactEchart from 'echarts-for-react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

function Echarts() {
var colorPalette = ['#D91820', '#d9182024', '#F4F0EE']
const echartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    
    {
      name: 'Gender Stats',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      color: colorPalette,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2000, name: 'Male' },
        { value: 735, name: 'Female' },
        { value: 580, name: 'Other' },
        
      ]
    }
  ]
};

  return (
    <div className='chart-container'>
        <Card className='shadow'>
            <h3>Gender  Breakdown</h3>
            <ReactEchart option={echartsOption}/>
        </Card>
    </div>
  )
}

export default Echarts