import styles from "./culter-test.module.scss";

import { useState } from "react";

import CultureTestForm from "./culture-test-form";
import Backdrop from "../backdrop/backdrop";

export default function CultureTest({ participant, getDataFromDb }) {
  const [startTest, setStartTest] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Complete your culture test in less than 5 minutes and get the right
        matches for you.
      </h3>
      <button
        onClick={() => {
          setStartTest(!startTest);
        }}
        className={styles.btn}
      >
        Start Now
      </button>
      {startTest && (
        // Backdrop is a component that will close the modal when clicked outside of it
        <>
          <Backdrop closeModal={setStartTest} />
          <CultureTestForm
            getDataFromDb={getDataFromDb}
            setStartTest={setStartTest}
            participant={participant}
          />
        </>
      )}
    </div>
  );
}
