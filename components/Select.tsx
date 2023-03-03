import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { setCategory } from "@/features/productsSlice";


const Select = (props: { categories: { title: string; value: string }[] }) => {
  const [value, setValue] = useState("");


  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setCategory(value))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <select onChange={(e) => setValue(e.target.value)} className="form-select form-select-sm mb-3 shadow p-2 rounded">
        {props.categories?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>

      <style jsx>{`
        select {
          width: 200px;
        }
      `}</style>
    </>
  );
};

export default Select;
