import React, { ComponentLifecycle } from "react";
import ReactApexChart from "react-apexcharts";

interface Component <P={},S={}> extends ComponentLifecycle <P,S>{}

class Pie_chart extends React.Component<{},{options:object , series:Array<Object>}> {
    

    constructor(props : object){
      super(props);
      this.state={
          series:[44,55,13,24,42],
          options:{
            chart:{
              width:"380px",
              type:"pie"
            },
            labels:["Like","Age","Man","Woman","Reply"],
            responsive:[{
              breakpoint:"480",
              options:{
                chart:{
                  width:"800px",
                },
                legend:{
                  position:"right"
                }
              }
            }]
          }
      };
    }

  render() {
    return (
     
          <>
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:"3vw"}}>
                <ReactApexChart options={this.state.options}  series={this.state.series} type="pie" width={700}/>
            </div>
          </>
      
    );
  }
}

export default Pie_chart;
