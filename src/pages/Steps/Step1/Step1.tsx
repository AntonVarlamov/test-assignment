import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { userInfoSelector } from "app/selectors";
import { ProgressScale3 } from "../components/progressScale3";
import { Formik } from "formik";
import { Input } from "components/Input/Input";
import {
  INPUT_LABELS,
  INPUT_PLACEHOLDERS,
  INPUT_TYPES,
} from "utils/consts/inputConsts";
import { Select } from "components/Select/Select";
import { Spacer } from "components/Spacer/Spacer";
import styles from "./Step1.module.css";
import { Button } from "../../../components/Button/Button";
import {
  BUTTON_TYPES,
  BUTTON_VALUES,
} from "../../../utils/consts/buttonConsts";
import { updateUserInfo } from "../../../features/userSlice";
import { enableStep } from "../../../features/stepsSlice";

type FormValueType = {
  name: string;
  sername: string;
  nickname: string;
  sex: "man" | "woman" | "";
};

export const Step1 = () => {
  const dispatch = useAppDispatch();
  const { name, nickname, sername, sex } = useAppSelector(userInfoSelector);
  const navigate = useNavigate();
  const sexes = ["man", "woman"];
  const initialValues: FormValueType = {
    name,
    nickname,
    sername,
    sex: sex ? sex : "",
  };
  return (
    <div className="containerStep">
      <ProgressScale3 step={1} />
      <Spacer height={63} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(updateUserInfo(values));
          dispatch(enableStep("step1"));
          navigate("/step2");
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          nickname: Yup.string().required("Required"),
          sex: Yup.string<"man" | "" | "women">().required("Required"),
          sername: Yup.string().required("Required"),
        })}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Input
                styleType={INPUT_TYPES.STEP_INPUT}
                value={values.nickname}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.PLACEHOLDER}
                name={"nickname"}
                label={INPUT_LABELS.NICKNAME}
                id="field-nickname"
                maxLength={30}
              />
              <Input
                styleType={INPUT_TYPES.STEP_INPUT}
                value={values.name}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.PLACEHOLDER}
                name={"name"}
                label={INPUT_LABELS.NAME}
                id="field-name"
                maxLength={50}
              />
              <Input
                styleType={INPUT_TYPES.STEP_INPUT}
                value={values.sername}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.PLACEHOLDER}
                name={"sername"}
                label={INPUT_LABELS.SERNAME}
                id="field-sername"
                maxLength={50}
              />
              <Select
                setSelectValue={setFieldValue}
                styleType={INPUT_TYPES.STEP_INPUT}
                value={values.sex}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.NOT_SELECTED}
                name={"sex"}
                label={INPUT_LABELS.SEX}
                selectValues={sexes}
                id="field-sex"
              />
            </div>
            <Spacer height={88} />
            <div className={styles.buttons}>
              <Button
                styleType={BUTTON_TYPES.WHITE}
                id="button-back"
                onClick={() => {
                  navigate("/main");
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
