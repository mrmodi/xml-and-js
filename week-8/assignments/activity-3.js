const timeout = (ms = 3000) => new Promise(resolve => {
    setTimeout(resolve, ms);
  })
  
  
  const generateRandomNumber = () => Math.floor(Math.random() * 40);
  
  
  const generateData = async () => timeout().then(() => Array.from({ length: 20 }, generateRandomNumber))
  
  
  const convertToFeet = (meters) => timeout().then(() => (meters * 3.2808))
  
  const processData = async (data, converterFn) =>
    await Promise.all(data.map(async (value) => {
        return { val1: value, res1: await converterFn(value) };
    }))
  
  
  
  const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);
  
  
  const main = async () => {
    console.log("Start");
    let data = await generateData()
    let processedData = await processData(data, convertToFeet)
    processedData.forEach(element => {
        logResult(element.val1, element.res1)
    })
    console.log("Finish");
  }
  
  main();