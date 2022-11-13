import React, { Fragment } from "react";

import styles from "./NameProf.module.css";

const NameProf: React.FC = () => {
  return (
    <Fragment>
      <div className={styles.name_image}>
        <img
          className={styles.profile_pic}
          src="/images/roie_leb.png"
          alt="picture of roie"
        />
        <div className={styles.mask_pic}></div>

        <div className={styles.profile_title}>
          <h1 className={styles.full_name}>Roie Leibovich</h1>
          <p className={styles.prof}>Fullstack developer</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NameProf;
