const getSleepHours = day => { 
  if (day === 'Monday') {
    return 6;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 5;
  } else if (day === 'Thursday') {
    return 6;
  } else if (day === 'Friday') {
    return 7;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 8;
  }
};

const getActualSleepHours = () => {
 getSleepHours('Monday') + getSleepHours('Tuesday') +
   getSleepHours('Wednesday') +
   getSleepHours('Thursday') +
   getSleepHours('Friday') +
   getSleepHours('Saturday') +
   getSleepHours('Sunday') 
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours*7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours < idealSleepHours)
  {console.log ('you need more sleep bro, Hours of sleep '( idealSleepHours - actualSleepHours));
  } 
  else if (actualSleepHours > idealSleepHours)
  {console.log('you got plenty of sleep, Hours of sleep =' (idealSleepHours - actualSleepHours));
  }
  else if (actualSleepHours === idealSleepHours) {
    console.log('just right, good night');}
};

calculateSleepDebt(8);
