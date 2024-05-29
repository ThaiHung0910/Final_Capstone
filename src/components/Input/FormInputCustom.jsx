import React, { memo, useEffect, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { resetErrorMessage } from "../../redux/userReducer/userSlice";
import { isValueInArray } from "../../utils";
import { duplicateLocal } from "../../services/localService";

function FormInputCustom({ name, label, type, disable, formikField }) {
  let [translateLabel, setTranslateLabel] = useState(true);
  let [inputType, setInputType] = useState(true);
  let [focusedInput, setFocusedInput] = useState(false);
  let [localStorageLoaded, setLocalStorageLoaded] = useState(false);
  let [errorFromApi, setErrorFromApi] = useState("");
  let [duplicateErrors, setDuplicateErrors] = useState();
  const { values, touched, errors, handleChange, handleBlur } = formikField;
  let value = values[name];
  let { errorMessage } = useSelector((state) => state.userReducer);
  let dispatch = useDispatch();

  let handleFocusCustom = () => {
    setFocusedInput(true);
  };
  let handleBlurCustom = () => {
    setFocusedInput(false);
  };

  if (!formikField.values.isLogin) {
    if (errorFromApi) {
      errors[name] = errorFromApi;
    }
  }

  useEffect(() => {
    if (value) {
      setTranslateLabel(false);
    }
    if (errorMessage?.includes(label)) {
      setErrorFromApi(errorMessage);
      let valueDuplicate = duplicateErrors[name]?.value || [];
      const isDuplicate = isValueInArray(value, valueDuplicate);
      setDuplicateErrors({
        ...duplicateErrors,
        [name]: {
          value: !isDuplicate
            ? [...valueDuplicate, value]
            : [...valueDuplicate],
          error: errorMessage,
        },
      });

      dispatch(resetErrorMessage());
    }
  }, [value, errorMessage]);
 

  useEffect(() => {
    const storedData = duplicateLocal.get() || {};
    const updateLocalStorage = () => {
      const newData = {
        ...storedData,
        ...duplicateErrors,
      };
      duplicateLocal.set(newData);
    };
    if (!localStorageLoaded) {
      if (storedData) {
        setDuplicateErrors({ ...storedData });
      }
      setLocalStorageLoaded(true);
    } else {
      updateLocalStorage();
    }
  }, [duplicateErrors]);

  return (
    <div className="relative">
      <label
        className={`absolute top-0 left-0 z-10 text-[#c6c7cc]   transition ${
          translateLabel
            ? "xl:translate-x-6 md:translate-x-4 translate-x-3 xl:translate-y-3 md:translate-y-2 translate-y-2 xl:text-xl md:text-base text-sm"
            : " xl:translate-x-6 md:translate-x-4 translate-x-3 xl:translate-y-1 md:translate-y-1 translate-y-0 xl:text-xs md:text-xs text-xs"
        }`}
      >
        {label}
      </label>
      {name !== "maNhom" ? (
        <input
          disabled={disable ? true : false}
          type={inputType && type === "password" ? "password" : "text"}
          className={`relative  xl:w-full md:w-full w-full xl:text-lg md:text-base text-xs  xl:pt-5 md:pt-4 pt-4 xl:pb-1 md:pb-1 pb-2  xl:px-6 md:px-4 px-3  border bg-[#2c3238] text-white border-none rounded focus:outline-none ${
            disable ? "cursor-no-drop" : ""
          }`}
          name={name}
          value={value}
          onChange={(e) => {
            handleChange(e);
            let valueDuplicate = duplicateErrors[name]?.value || [];
            if (valueDuplicate) {
              const isDuplicate = isValueInArray(
                e.target.value,
                valueDuplicate
              );
              setErrorFromApi(isDuplicate ? duplicateErrors[name]?.error : "");
            }
          }}
          onFocus={() => {
            if (!value) {
              setTranslateLabel(!translateLabel);
            }
            handleFocusCustom();
          }}
          onBlur={(e) => {
            handleBlurCustom();
            handleBlur(e);
          }}
        />
      ) : (
        <select
          name={name}
          className="relative  xl:w-full md:w-full w-full xl:text-lg md:text-base text-xs  xl:pt-5 md:pt-4 pt-3 xl:pb-1 md:pb-1 pb-1  xl:px-6 md:px-4 px-3  border bg-[#2c3238] text-white border-none rounded focus:outline-none"
          onChange={handleChange}
          value={value}
        >
          <option value="GP01">GP01</option>
          <option value="GP02">GP02</option>
          <option value="GP03">GP03</option>
          <option value="GP04">GP04</option>
          <option value="GP05">GP05</option>
          <option value="GP06">GP06</option>
          <option value="GP07">GP07</option>
          <option value="GP08">GP08</option>
          <option value="GP09">GP09</option>
          <option value="GP010">GP010</option>
        </select>
      )}

      <div className="xl:h-6 md:h-4 h-2 sm:my-1 my-0 xl:text-base md:text-sm text-xs text-red-500">
        {(focusedInput || touched[name]) && errors[name] ? errors[name] : ""}
      </div>

      {type === "password" ? (
        <span
          className="absolute xl:right-2 md:right-2 right-1 xl:top-4 md:top-1 top-1 xl:text-2xl md:text-lg  cursor-pointer text-[#c6c7cc] "
          onClick={() => {
            setInputType(!inputType);
          }}
        >
          {inputType ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
export default memo(FormInputCustom);
