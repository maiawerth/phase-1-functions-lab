function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block is equal to 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance * 264; // 1 block is equal to 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for a distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }