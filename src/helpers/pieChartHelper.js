const pieChartHelper = {
  buildAttributes: (...mockedPieChartData) => {
    const strokeAndFill = [
    {  fill: 'transparent', stroke: '#d2d344', },
    {  fill: 'transparent', stroke: '#ce4b99', },
    {  fill: 'transparent', stroke: '#b1c94e', }
    ];
    const details = [];

    strokeAndFill.reduce((strokeDashOffet, singleSlice, index) => {
      let value = `${mockedPieChartData[index]} ${100 - mockedPieChartData[index]}`

      singleSlice.strokeDashArray = value;
      strokeDashOffet = index === 0 ? 25 : strokeDashOffet - mockedPieChartData[index - 1];
      singleSlice.strokeDashOffet = strokeDashOffet;
      details.push(singleSlice);
      
      return strokeDashOffet;
    }, 25);


    return details;
  }
}

export { pieChartHelper };
