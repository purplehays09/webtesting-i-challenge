module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return {
     ...item,
     enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20 
  };
}

function fail(item) {
  const expectedItem = {...item}
  if(expectedItem.enhancement > 16){
       expectedItem.enhancement -= 1
  } else if(expectedItem.enhancement >= 15){
      expectedItem.durability -= 10
  }else{
      expectedItem.durability -= 5
  }
  console.log(expectedItem)
  return expectedItem ;
}

function repair(item) {
  return { 
    ...item,
    durability:100
   };
}

function get(item) {
  return { ...item };
}
