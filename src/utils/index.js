export const isValueInArray = (value, array) => array?.includes(value);

export const handleSubmitSearch = (e, element, navigate, action) => {
  e.preventDefault();
  if (element.current.value !== "") {
    navigate(`/timkiem/${element.current.value}`);
    element.current.value = "";
    action();
  }
};
