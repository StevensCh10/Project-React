import { useState } from 'react';

export default function useObj() {
  const getObj = () => {
    const objString = localStorage.getItem('object');
    const userObj = JSON.parse(objString);
    return userObj
  };

  const [obj, setObj] = useState(getObj());

  const saveObj = userObj => {
    localStorage.setItem('object', JSON.stringify(userObj));
    
    setObj(userObj);
  };

  return {
    setObj: saveObj,
    obj
  }
}