import React from "react";

function Shift() {
  return (
    <div>
      <div class="control">
        <label className="label">Shift</label>
        <label class="radio">
          <input type="radio" name="answer" />
          Morning
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          Night
        </label>
      </div>
    </div>
  );
}

export default Shift;
