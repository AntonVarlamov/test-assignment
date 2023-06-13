import React, { FC } from "react";
import cn from "classnames";
import * as Yup from "yup";
import { Input } from "components/Input/Input";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";

import {
  INPUT_LABELS,
  INPUT_PLACEHOLDERS,
  INPUT_TYPES,
} from "utils/consts/inputConsts";
import { Spacer } from "components/Spacer/Spacer";
import { Button } from "components/Button/Button";
import { BUTTON_TYPES, BUTTON_VALUES } from "utils/consts/buttonConsts";
import { Header } from "./components/Header/Header";
import styles from "./Main.module.css";
import { userInfoSelector } from "app/selectors";
import { updateUserInfo } from "features/userSlice";
import { enableStep } from "../../features/stepsSlice";

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { email, mobile } = useAppSelector(userInfoSelector);
  const navigate = useNavigate();
  const name = "Антон";
  const sername = "Варламов";
  const links = {
    Telegram: "https://t.me/antoshka1997",
    GitHub: "https://github.com/AntonVarlamov",
    Resume:
      "https://izhevsk.hh.ru/resume/c26e6716ff09ce631f0039ed1f4f4633796d4c",
  };
  const phoneNumberMask = [
    "+",
    "7",
    " ",
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return (
    <div className={cn("containerMain")}>
      <Header name={name} sername={sername} links={links} />
      <Spacer height={24} />
      <hr className={styles.hrLine} />
      <Spacer height={24} />
      <Formik
        initialValues={{
          email,
          mobile,
        }}
        validate={(values) => {}}
        validationSchema={Yup.object().shape({
          mobile: Yup.string().required("Required"),
          email: Yup.string().email().required("Required"),
        })}
        onSubmit={(values) => {
          dispatch(updateUserInfo(values));
          dispatch(enableStep("main"));
          navigate("/step1");
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Input
                styleType={INPUT_TYPES.MAIN_INPUT}
                value={values.mobile}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.MOBILE}
                name="mobile"
                label={INPUT_LABELS.MOBILE}
                mask={phoneNumberMask}
              />
              <Input
                styleType={INPUT_TYPES.MAIN_INPUT}
                value={values.email}
                onChange={handleChange}
                placeholder={INPUT_PLACEHOLDERS.EMAIL}
                name="email"
                label={INPUT_LABELS.EMAIL}
                type={"email"}
              />
            </div>
            <Spacer height={48} />
            <Button styleType={BUTTON_TYPES.PURPLE} type="submit">
              {BUTTON_VALUES.BEGIN}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
