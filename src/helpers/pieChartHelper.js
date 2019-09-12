const pieChartHelper = (colors) => {

  /**
   * A method to build:
   * stoke, fill, stokeDashArray and strokeDashOffset
   * 
   * @param  {...any} mockedPieChartData 
   */
  const buildAttributes = (...mockedPieChartData) => {
    debugger;
    const details = [];

    colors.reduce((strokeDashOffet, singleSlice, index) => {
      let value = `${mockedPieChartData[index]} ${100 - mockedPieChartData[index]}`

      singleSlice.strokeDashArray = value;
      strokeDashOffet = index === 0 ? 25 : strokeDashOffet - mockedPieChartData[index - 1];
      singleSlice.strokeDashOffet = strokeDashOffet;

      details.push(singleSlice);
      
      return strokeDashOffet;
    }, 25);


    return details;
  }

  return {
    buildAttributes,
  }
}

export { pieChartHelper };
