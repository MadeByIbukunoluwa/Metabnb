

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
      <button className={classes.filter_button}>
        <span>Location</span>
        <img src="/public/assets/icons/setting-5.svg" alt="Filter Location" />
      </button>
    </div>
  );
}

export default FilterPanel