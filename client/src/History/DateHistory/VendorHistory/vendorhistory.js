import React, {useState} from 'react'
import Calendar from 'react-calendar'
import dateFormat from "dateformat";
import axios from 'axios';
import { CSVLink } from 'react-csv';
import load from '../../../assets/images/loading.gif'
import styles from './vendorhistory.css'


function VendorHistory() {
    const [Beginning, setBeginning] = useState(new Date());
    const [Ending, setEnding] = useState(new Date());
    const [Result, setResult] = useState([]);

    const properDateBeginning = dateFormat(Beginning, "dS mmmm");
    const properDateEnding = dateFormat(Ending, "dS mmmm");

    const onSubmit = () => {
        const variable = {
          beginning: Beginning,
          ending: Ending,
        };
    
        axios
          .post("http://localhost:5000/vendor/sortbyDateVendor", variable)
          .then((response) => {
            if (response.data.success) {
              setResult(response.data.vendor);
              console.log(response.data.vendor);
            } else {
              alert("Failed to get the current calendar");
            }
          });
      };

      const appearbutton = Result.length ? (
        <CSVLink data={Result} style={{display: 'flex', justifyContent: 'center'}}>
          Report Generated from {properDateBeginning} to {properDateEnding}
        </CSVLink>
      ) : (
        <figure className="image is-96x96">
          <img src={load} alt="figure" />
        </figure>
      );
    
      function onChange(nextValue) {
        setBeginning(nextValue);
      }
    
      function onChangeEnd(nextValue) {
        setEnding(nextValue);
      }
  
    return (
     <div style={{display: 'flex', justifyContent:'center'}}>
      <form onSubmit={onSubmit}>
        <div className={styles["calendar"]}>
          <h2 style={{display: 'flex', justifyContent:'center', margin: '2rem'}}>Generate Report by Date for Vendor</h2>
          <Calendar
            onChange={onChange}
            value={Beginning}
          />
          <Calendar onChange={onChangeEnd} value={Ending} />

          <button
            type="button"
            className={`button is-primary ${styles["button"]}`}
            onClick={onSubmit}
          >
            Generate Vendor Report
          </button>

          {appearbutton}
        </div>
      </form>
    </div>
    )
}

export default VendorHistory
