import React from "react";
import { ProgressScale3 } from "../components/progressScale3";
import { Spacer } from "components/Spacer/Spacer";
import { Field, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { userInfoSelector } from "app/selectors";
import { useNavigate } from "react-router-dom";
import styles from "./Step2.module.css";
import { Button } from "components/Button/Button";
import { BUTTON_TYPES, BUTTON_VALUES } from "utils/consts/buttonConsts";
import { Input } from "components/Input/Input";
import { INPUT_PLACEHOLDERS, INPUT_TYPES } from "utils/consts/inputConsts";
import { PlusIcon } from "components/Icons/PlusIcon/PlusIcon";
import { GarbageIcon } from "components/Icons/GarbageIcon/GarbageIcon";
import { updateUserInfo } from "../../../features/userSlice";

export const Step2 = () => {
  const dispatch = useAppDispatch();
  const { advantages, radio, checkboxes } = useAppSelector(userInfoSelector);
  const navigate = useNavigate();
  const radioValues = Object.keys(radio);
  const checkboxValues = Object.keys(checkboxes);
  const radioVal = checkboxValues.find((value) => radio[value]);
  return (
    <div className="containerStep">
      <ProgressScale3 step={2} />
      <Spacer height={63} />
      <Formik
        initialValues={{
          advantages: advantages,
          radio: radioVal || "",
          checkboxes: checkboxValues.filter((value) => checkboxes[value]),
        }}
        onSubmit={(values) => {
          const radioValue = radioValues.reduce(
            (prev, cur) => ({ ...prev, [cur]: cur === values.radio }),
            {}
          );
          const checkboxValue = checkboxValues.reduce(
            (prev, cur) => ({
              ...prev,
              [cur]: values.checkboxes.includes(cur),
            }),
            {}
          );

          dispatch(
            updateUserInfo({
              advantages: values.advantages,
              radio: radioValue,
              checkboxes: checkboxValue,
            })
          );
          navigate("/step3");
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.advantages}>
              <p>Advantages</p>
              {values.advantages.map((value, index) => (
                <div key={index} className={styles.advantage}>
                  <Input
                    id={`field-advatages-${index + 1}`}
                    styleType={INPUT_TYPES.STEP_INPUT}
                    value={values.advantages[index]}
                    onChange={(e) => {
                      const copy = [...values.advantages];
                      copy[index] = e.target.value;
                      setFieldValue("advantages", copy);
                    }}
                    placeholder={INPUT_PLACEHOLDERS.PLACEHOLDER}
                    name="advantages"
                  />
                  <span
                    id={`button-remove-${index + 1}`}
                    onClick={() => {
                      setFieldValue(
                        "advantages",
                        values.advantages.filter(
                          (_, valIndex) => valIndex !== index
                        )
                      );
                    }}
                  >
                    <GarbageIcon className={styles.icon} />
                  </span>
                </div>
              ))}
              <Button
                id="button-add"
                styleType={BUTTON_TYPES.WHITE}
                className={styles.addAdvantage}
                onClick={() => {
                  const copy = [...values.advantages];
                  copy.push("");
                  setFieldValue("advantages", copy);
                }}
              >
                <PlusIcon />
              </Button>
            </div>
            <Spacer height={24} />
            <div className={styles.checkboxGroup}>
              <p>Checkbox group</p>
              {checkboxValues.map((value, index) => (
                <label
                  key={index}
                  className={styles.radio}
                  id={`field-checkbox-group-option-${index + 1}`}
                >
                  <Field type="checkbox" name="checkboxes" value={value} />
                  <p>{value}</p>
                </label>
              ))}
            </div>
            <Spacer height={24} />
            <div className={styles.radioGroup}>
              <p>Radio group</p>
              {radioValues.map((value, index) => (
                <label
                  key={index}
                  className={styles.radio}
                  id={`field-radio-group-option-${index + 1}`}
                >
                  <Field type="radio" name="radio" value={value} />
                  <p>{value}</p>
                </label>
              ))}
            </div>
            <Spacer height={64} />
            <div className={styles.buttons}>
              <Button
                styleType={BUTTON_TYPES.WHITE}
                id="button-back"
                onClick={() => {
                  navigate("/step1");
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
                {BUTTON_VALUES.NEXT}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
