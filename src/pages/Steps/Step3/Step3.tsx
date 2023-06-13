import React from "react";
import { ProgressScale3 } from "../components/progressScale3";
import { Formik } from "formik";
import { Button } from "../../../components/Button/Button";
import {
  BUTTON_TYPES,
  BUTTON_VALUES,
} from "../../../utils/consts/buttonConsts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { userInfoSelector } from "../../../app/selectors";
import { useNavigate } from "react-router-dom";
import styles from "./Step3.module.css";
import { Spacer } from "../../../components/Spacer/Spacer";
import { INPUT_PLACEHOLDERS } from "../../../utils/consts/inputConsts";

export const Step3 = () => {
  const dispatch = useAppDispatch();
  const { about } = useAppSelector(userInfoSelector);
  const navigate = useNavigate();
  return (
    <div className="containerStep">
      <ProgressScale3 step={3} />
      <Spacer height={66} />
      <Formik initialValues={{ about }} onSubmit={() => {}}>
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              <p>About</p>
              <textarea
                onChange={handleChange}
                maxLength={200}
                placeholder={INPUT_PLACEHOLDERS.PLACEHOLDER}
                value={values.about}
                name="about"
                id="field-about"
                className={styles.textarea}
              />
            </label>
            <Spacer height={64} />
            <div className={styles.buttons}>
              <Button
                styleType={BUTTON_TYPES.WHITE}
                id="button-back"
                onClick={() => {
                  navigate("/step2");
                }}
              >
                {BUTTON_VALUES.BACK}
              </Button>
              <Button
                styleType={BUTTON_TYPES.PURPLE}
                id="button-next"
                type="submit"
                className={styles.nextButton}
              >
                {BUTTON_VALUES.SEND}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
