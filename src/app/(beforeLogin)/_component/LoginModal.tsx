"use client";

import { useState } from "react";
import style from "./login.module.css";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};

  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            X
          </button>
          <div>로그인하세요.</div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                type="text"
                id="id"
                className={style.input}
                value={id}
                onChange={onChangeId}
                placeholder=""
              />
            </div>

            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className={style.input}
                value={password}
                onChange={onChangePassword}
                placeholder=""
              />
            </div>
          </div>

          <div className={style.message}>{message}</div>

          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
