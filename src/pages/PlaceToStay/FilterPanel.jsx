

import { options } from "../../data/data";

import classes from './filterpanel.module.css'



import React from 'react'

function FilterPanel() {
  return (
    <div className={classes.filter_panel}>
      <ul className={classes.filter_options}>
        {options.map(({ label }) => {
          return <li>{label}</li>;
        })}
      </ul>
      <select className={classes.filter_button}>
        <option value="Location" selected disabled hidden>
         Location
        </option>
        {options.map(({ value }) => {
          return (
            <>
              <option>{value} </option>
            </>
          );
        })}
        <img src="/public/assets/icons/setting-5.svg" alt="Filter Location" />
      </select>
    </div>
  );
}

export default FilterPanel